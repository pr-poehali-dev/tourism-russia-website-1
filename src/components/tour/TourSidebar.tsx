import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface TourSidebarProps {
  onBookingClick: () => void;
}

const TourSidebar = ({ onBookingClick }: TourSidebarProps) => {
  const tourDates = [
    "6-12 марта"
  ];

  return (
    <div className="space-y-6 lg:sticky lg:top-24">
      <Card className="border-2 border-cyan-600 shadow-lg">
        <CardContent className="p-6 space-y-6">
          <div className="text-center">
            <p className="text-2xl line-through text-red-600 mb-1">75 000 ₽</p>
            <p className="text-3xl font-bold text-cyan-600 mb-2">67 500 ₽</p>
            <p className="text-muted-foreground text-sm">за человека</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Icon name="Calendar" size={20} className="text-cyan-600" />
              Даты заездов
            </h3>
            <ul className="space-y-2">
              {tourDates.map((date, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <Icon name="Dot" size={16} className="text-cyan-600 mt-1 flex-shrink-0" />
                  <span>{date}</span>
                </li>
              ))}
            </ul>
          </div>

          <button 
            onClick={onBookingClick}
            className="w-full relative inline-flex items-center justify-center bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 hover:from-orange-600 hover:via-orange-500 hover:to-orange-600 text-white font-bold text-xs md:text-lg px-3 py-2 md:px-4 md:py-6 rounded-full transition-all hover:scale-105 shadow-lg overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-1 md:gap-2">
              <Icon name="Ticket" size={16} className="flex-shrink-0" />
              <span className="leading-tight">Оставить заявку на тур и получить сертификат на 5 000₽ 🎁</span>
            </span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent shine-effect"></span>
          </button>

          <div className="border-t pt-4">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Icon name="Phone" size={20} className="text-cyan-600" />
              Контакты
            </h3>
            <div className="space-y-2 text-sm">
              <a href="tel:+79655615153" className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
                <Icon name="Phone" size={16} />
                +7 965 561-51-53
              </a>
              <a href="mailto:rukzaklife@mail.ru" className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
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