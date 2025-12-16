import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/files/ahFddRW4KWcWkKlNvnq3MY7pWuo-960.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
      </div>
      <div className="relative z-10 text-center text-white px-4 animate-fade-in">
        <h1 className="md:text-7xl font-heading font-bold mb-6 text-6xl">Уникальные туры по России</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">С профессиональными гидами</p>
        <div className="flex justify-center">
          <Button size="lg" className="text-xl px-12 py-6 bg-green-600 hover:bg-green-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
            <Icon name="Compass" size={24} className="mr-3" />
            Выбрать тур
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
