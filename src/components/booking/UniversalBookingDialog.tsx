import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import SuccessDialog from "./SuccessDialog";
import InputMask from "react-input-mask";

interface UniversalBookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultTour?: string;
  isCustomTour?: boolean;
}

const UniversalBookingDialog = ({ 
  open, 
  onOpenChange,
  defaultTour = '',
  isCustomTour = false
}: UniversalBookingDialogProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    tour: '',
    comment: ''
  });

  useEffect(() => {
    if (open) {
      if (isCustomTour) {
        setFormData({
          name: '',
          phone: '',
          email: '',
          tour: 'Предложить свой вариант тура',
          comment: ''
        });
      } else if (defaultTour) {
        setFormData({
          name: '',
          phone: '',
          email: '',
          tour: defaultTour,
          comment: ''
        });
      } else {
        setFormData({
          name: '',
          phone: '',
          email: '',
          tour: '',
          comment: ''
        });
      }
    }
  }, [open, isCustomTour, defaultTour]);

  const tours = [
    "Коньковый поход по зимнему Байкалу - 67 500 ₽",
    "Байкал в палатках - 59 400 ₽",
    "Поход к горе Белухе - 78 800 ₽",
    "Камчатка — три вулкана - 83 200 ₽",
    "Путешествие за золотом Колымы - 92 000 ₽",
    "Дагестан: Кавказская тропа по краю башен - 54 900 ₽",
    "Предложить свой вариант тура"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/a929cb91-0eec-4a5d-8515-46159925b0a2', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        if (typeof window !== 'undefined' && (window as any).ym) {
          (window as any).ym(106027453, 'reachGoal', 'booking_submit');
        }

        onOpenChange(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          tour: '',
          comment: ''
        });
        setShowSuccess(true);
      } else {
        throw new Error('Network error');
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-md max-h-[95vh] overflow-y-auto w-[95vw] sm:w-full p-4 sm:p-6">
          <DialogHeader>
            <DialogTitle className="text-base sm:text-2xl leading-tight">Оставить заявку на тур 🎁</DialogTitle>
            <DialogDescription className="text-sm">
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </DialogDescription>
          </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div>
            <label className="text-sm font-medium mb-1.5 block">Ваше имя *</label>
            <Input
              placeholder="Иван Иванов"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          
          <div>
            <label className="text-sm font-medium mb-1.5 block">Телефон *</label>
            <InputMask
              mask="+7 (999) 999-99-99"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            >
              {(inputProps: any) => (
                <Input
                  {...inputProps}
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  required
                />
              )}
            </InputMask>
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">Электронная почта *</label>
            <Input
              type="email"
              placeholder="example@mail.ru"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">Выберите *</label>
            {isCustomTour ? (
              <div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                <span className="font-bold text-green-600">Предложить свой вариант тура</span>
              </div>
            ) : (
              <Select 
                value={formData.tour} 
                onValueChange={(value) => setFormData({ ...formData, tour: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Выберите тур из списка" />
                </SelectTrigger>
                <SelectContent>
                  {tours.map((tour) => (
                    <SelectItem key={tour} value={tour}>
                      {tour}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">Комментарий</label>
            <Textarea
              placeholder={isCustomTour ? "место, время и продолжительность желаемого тура" : "Дополнительная информация или вопросы..."}
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              rows={2}
              className="min-h-[60px]"
            />
          </div>

          <button 
            type="submit" 
            className="w-full relative inline-flex items-center justify-center bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 hover:from-orange-600 hover:via-orange-500 hover:to-orange-600 text-white font-bold text-base px-6 py-3 rounded-lg transition-all hover:scale-105 shadow-lg overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            <span className="relative z-10 flex items-center gap-2">
              {isSubmitting ? (
                <>
                  <Icon name="Loader2" size={20} className="animate-spin" />
                  Отправка...
                </>
              ) : (
                <>
                  <Icon name="Send" size={20} />
                  Отправить заявку
                </>
              )}
            </span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent shine-effect"></span>
          </button>
        </form>
        </DialogContent>
      </Dialog>
      <SuccessDialog open={showSuccess} onOpenChange={setShowSuccess} />
    </>
  );
};

export default UniversalBookingDialog;