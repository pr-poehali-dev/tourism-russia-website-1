import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const TourHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur border-b">
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => {
            navigate('/#tours');
            setTimeout(() => {
              const toursSection = document.getElementById('tours');
              if (toursSection) {
                toursSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }, 100);
          }}
          className="flex items-center gap-2"
        >
          <Icon name="ArrowLeft" size={20} />
          <span className="hidden sm:inline">Назад к турам</span>
        </Button>
        <h1 className="text-lg md:text-xl font-bold text-primary">Коньковый поход по зимнему Байкалу</h1>
      </div>
    </header>
  );
};

export default TourHeader;