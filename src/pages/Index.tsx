import Icon from "@/components/ui/icon";
import HeroSection from "@/components/sections/HeroSection";
import GuidesSection from "@/components/sections/GuidesSection";
import ToursSection from "@/components/sections/ToursSection";
import ReviewsGallerySection from "@/components/sections/ReviewsGallerySection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-start gap-3">
            <img src="https://cdn.poehali.dev/files/68572a0b1c5f5eacb47f025aa04b05e4.jpg" alt="Логотип" className="w-12 h-12 object-cover rounded-lg" />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-black text-lg leading-tight">Жизнь с рюкзаком</span>
              <span className="text-black text-xs leading-tight">авторские туры</span>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center gap-3">
            <nav className="flex gap-8">
              <a href="#home" className="hover:text-primary transition-colors text-[#000000]">Главная</a>
              <a href="#guides" className="hover:text-primary transition-colors">Гиды</a>
              <a href="#tours" className="hover:text-primary transition-colors">Туры</a>
              <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
              <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#about" className="hover:text-primary transition-colors">О нас</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </nav>
            <div className="flex gap-4">
              <a href="https://t.me/trash_mnesh" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                <Icon name="Send" size={20} />
              </a>
              <a href="https://vk.com/trash_mnesh" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.15 14.63h-1.43c-.51 0-.67-.42-1.58-1.33-.8-.76-1.15-.86-1.35-.86-.28 0-.36.08-.36.46v1.21c0 .33-.1.52-1.01.52-1.49 0-3.14-.9-4.3-2.57-1.76-2.37-2.24-4.15-2.24-4.51 0-.2.08-.39.46-.39h1.43c.35 0 .48.16.61.53.71 2.05 1.91 3.85 2.4 3.85.18 0 .27-.09.27-.55v-2.14c-.06-.98-.57-1.06-.57-1.41 0-.16.13-.32.35-.32h2.24c.29 0 .4.16.4.5v2.89c0 .3.13.4.22.4.18 0 .33-.1.67-.44 1.04-1.17 1.79-2.97 1.79-2.97.1-.21.26-.39.61-.39h1.43c.43 0 .53.22.43.52-.16.73-1.97 3.44-1.97 3.44-.15.24-.2.35 0 .62.14.2.61.59 1.12 1.13.59.62.95 1.14 1.06 1.5.11.36-.08.54-.49.54z"/></svg>
              </a>
              <a href="https://www.instagram.com/ant.turist" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="https://youtube.com/@antturist" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
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