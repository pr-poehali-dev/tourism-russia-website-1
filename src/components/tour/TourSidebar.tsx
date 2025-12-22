import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface TourSidebarProps {
  onBookingClick: () => void;
}

const TourSidebar = ({ onBookingClick }: TourSidebarProps) => {
  const tourDates = [
    "16-22 февраля",
    "6-12 марта"
  ];

  return (
    <div className="space-y-6 lg:sticky lg:top-24">
      <Card className="border-2 border-primary shadow-lg">
        <CardContent className="p-6 space-y-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-2">75 000 ₽</p>
            <p className="text-muted-foreground text-sm">за человека</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Icon name="Calendar" size={20} className="text-primary" />
              Даты заездов
            </h3>
            <ul className="space-y-2">
              {tourDates.map((date, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <Icon name="Dot" size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span>{date}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button 
            onClick={onBookingClick}
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-lg"
            size="lg"
          >
            <Icon name="Calendar" size={20} className="mr-2" />
            Забронировать место
          </Button>

          <div className="border-t pt-4">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Icon name="Phone" size={20} className="text-primary" />
              Контакты
            </h3>
            <div className="space-y-2 text-sm">
              <a href="tel:+79655615153" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Icon name="Phone" size={16} />
                +7 965 561-51-53
              </a>
              <a href="mailto:rukzaklife@mail.ru" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Icon name="Mail" size={16} />
                rukzaklife@mail.ru
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <Icon name="Info" size={24} className="text-blue-600 flex-shrink-0 mt-1" />
            <div className="text-sm text-gray-700">
              <p className="font-semibold mb-2 text-blue-900">Важная информация</p>
              <p>При бронировании необходима предоплата 30%. Остаток оплачивается за 14 дней до начала тура.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TourSidebar;