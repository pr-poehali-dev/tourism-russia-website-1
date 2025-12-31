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
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import SuccessDialog from "./SuccessDialog";
import InputMask from "react-input-mask";

interface UniversalBookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultTour?: string;
}

const UniversalBookingDialog = ({ 
  open, 
  onOpenChange,
  defaultTour = ''
}: UniversalBookingDialogProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    tour: defaultTour,
    comment: ''
  });

  const tours = [
    "Коньковый поход по зимнему Байкалу - 75 000 ₽",
    "Байкал в палатках - 61 000 ₽",
    "Поход к горе Белухе - 78 800 ₽",
    "Камчатка — три вулкана - 83 200 ₽",
    "Путешествие за золотом Колымы - 92 000 ₽",
    "Дагестан: Кавказская тропа по краю башен - 54 900 ₽"
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
          tour: defaultTour,
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
        <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto w-[95vw] sm:w-full">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-2xl leading-tight">Оставить заявку на тур и получить сертификат на 5000р!</DialogTitle>
            <DialogDescription className="text-sm">
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </DialogDescription>
          </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Ваше имя *</label>
            <Input
              placeholder="Иван Иванов"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Телефон *</label>
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
            <label className="text-sm font-medium mb-2 block">Email *</label>
            <Input
              type="email"
              placeholder="example@mail.ru"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Выберите тур *</label>
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
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Комментарий</label>
            <Textarea
              placeholder="Дополнительная информация или вопросы..."
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              rows={4}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                Отправка...
              </>
            ) : (
              <>
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </>
            )}
          </Button>
        </form>
        </DialogContent>
      </Dialog>
      <SuccessDialog open={showSuccess} onOpenChange={setShowSuccess} />
    </>
  );
};

export default UniversalBookingDialog;