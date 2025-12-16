import Icon from "@/components/ui/icon";
import HeroSection from "@/components/sections/HeroSection";
import GuidesSection from "@/components/sections/GuidesSection";
import ToursSection from "@/components/sections/ToursSection";
import ReviewsGallerySection from "@/components/sections/ReviewsGallerySection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-start gap-2 md:gap-3">
            <img src="https://cdn.poehali.dev/files/68572a0b1c5f5eacb47f025aa04b05e4.jpg" alt="Логотип" className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-lg" />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-black text-sm sm:text-base md:text-lg leading-tight">Жизнь с рюкзаком</span>
              <span className="text-black text-xs leading-tight">авторские туры</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-primary transition-colors text-[#000000]">Главная</a>
            <a href="#guides" className="hover:text-primary transition-colors">Гиды</a>
            <a href="#tours" className="hover:text-primary transition-colors">Туры</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
            <a href="#about" className="hover:text-primary transition-colors">Почему мы</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <div className="hidden lg:flex flex-col gap-2 text-sm">
            <a href="tel:+79655615153" className="flex items-center gap-2 hover:text-primary transition-colors text-black font-semibold text-base">
              <Icon name="Phone" size={18} />
              +7 965 561-51-53
            </a>
            <a href="mailto:rukzaklife@mail.ru" className="flex items-center gap-2 hover:text-primary transition-colors text-black">
              <Icon name="Mail" size={16} />
              rukzaklife@mail.ru
            </a>
            <div className="flex items-start gap-2 text-black">
              <Icon name="Clock" size={16} className="mt-0.5" />
              <div className="flex flex-col leading-tight">
                <span>Пн-Пт 08:00-22:00</span>
                <span>Сб-Вс 10:00-20:00</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <HeroSection />
      <GuidesSection />
      <ToursSection />
      <ReviewsGallerySection />
    </div>
  );
};

export default Index;