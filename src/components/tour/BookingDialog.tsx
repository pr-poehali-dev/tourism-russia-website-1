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

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  formData: {
    name: string;
    phone: string;
    email: string;
    tour: string;
    comment: string;
  };
  onFormDataChange: (data: any) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

const BookingDialog = ({ 
  open, 
  onOpenChange, 
  formData, 
  onFormDataChange, 
  onSubmit,
  isSubmitting 
}: BookingDialogProps) => {
  const tourDates = [
    "16-22 февраля",
    "6-12 марта"
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[95vh] overflow-y-auto w-[95vw] sm:w-full p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-base sm:text-2xl leading-tight">Оставить заявку на тур 🎁</DialogTitle>
          <DialogDescription className="text-sm">
            Заполните форму, и мы свяжемся с вами в ближайшее время
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Ваше имя *</label>
            <Input
              placeholder="Иван Иванов"
              value={formData.name}
              onChange={(e) => onFormDataChange({ ...formData, name: e.target.value })}
              required
            />
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Телефон *</label>
            <Input
              type="tel"
              placeholder="+7 (999) 123-45-67"
              value={formData.phone}
              onChange={(e) => onFormDataChange({ ...formData, phone: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Email *</label>
            <Input
              type="email"
              placeholder="example@mail.ru"
              value={formData.email}
              onChange={(e) => onFormDataChange({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Выберите дату *</label>
            <Select value={formData.tour} onValueChange={(value) => onFormDataChange({ ...formData, tour: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите дату заезда" />
              </SelectTrigger>
              <SelectContent>
                {tourDates.map((date, idx) => (
                  <SelectItem key={idx} value={date}>
                    {date}
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
              onChange={(e) => onFormDataChange({ ...formData, comment: e.target.value })}
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
  );
};

export default BookingDialog;