import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

interface SuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SuccessDialog = ({ open, onOpenChange }: SuccessDialogProps) => {
  const navigate = useNavigate();

  const handleClose = () => {
    onOpenChange(false);
    navigate('/');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg p-0 overflow-hidden border-4 border-primary w-[95vw] sm:w-full">
        <div className="relative bg-gradient-to-br from-primary/10 via-white to-primary/5 p-8 md:p-12">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/20 flex items-center justify-center animate-bounce">
              <Icon name="CheckCircle" size={48} className="text-primary" />
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                Заявка отправлена!
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-md">
                Спасибо за ваш интерес! Мы свяжемся с вами в ближайшее время для уточнения деталей путешествия.
              </p>
            </div>

            <div className="w-full max-w-sm space-y-3 pt-4">
              <Button
                onClick={handleClose}
                className="w-full text-lg py-6 hover:scale-105 transition-all duration-300"
                size="lg"
              >
                <Icon name="Home" size={20} className="mr-2" />
                Вернуться на главную
              </Button>
              <p className="text-sm text-muted-foreground">
                Или позвоните нам: <a href="tel:+79655615153" className="text-primary font-semibold hover:underline">+7 965 561-51-53</a>
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessDialog;