import Icon from "@/components/ui/icon";
import HeroSection from "@/components/sections/HeroSection";
import GuidesSection from "@/components/sections/GuidesSection";
import ToursSection from "@/components/sections/ToursSection";
import ReviewsGallerySection from "@/components/sections/ReviewsGallerySection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { href: "#home", label: "Главная" },
    { href: "#guides", label: "Гиды" },
    { href: "#tours", label: "Туры" },
    { href: "#reviews", label: "Отзывы" },
    { href: "#gallery", label: "Галерея" },
    { href: "#about", label: "Почему мы?" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white backdrop-blur border-b">
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-start gap-2 md:gap-3">
            <img src="https://cdn.poehali.dev/files/11-1.png" alt="Логотип" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-black text-sm sm:text-base md:text-lg leading-tight">Жизнь с рюкзаком</span>
              <span className="text-black text-xs leading-tight">авторские туры</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            {menuItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </a>
            ))}
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
          
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Icon name="Menu" size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
              <div className="flex flex-col gap-6 mt-8 pb-8">
                <nav className="flex flex-col gap-4">
                  {menuItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium hover:text-primary transition-colors py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="border-t pt-6 flex flex-col gap-4">
                  <a href="tel:+79655615153" className="flex items-center gap-3 hover:text-primary transition-colors text-black font-semibold">
                    <Icon name="Phone" size={20} />
                    +7 965 561-51-53
                  </a>
                  <a href="mailto:rukzaklife@mail.ru" className="flex items-center gap-3 hover:text-primary transition-colors text-black">
                    <Icon name="Mail" size={20} />
                    rukzaklife@mail.ru
                  </a>
                  <div className="flex items-start gap-3 text-black">
                    <Icon name="Clock" size={20} className="mt-0.5" />
                    <div className="flex flex-col leading-tight">
                      <span>Пн-Пт 08:00-22:00</span>
                      <span>Сб-Вс 10:00-20:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <HeroSection />
      <GuidesSection />
      <BenefitsSection />
      <ToursSection />
      <ReviewsGallerySection />
    </div>
  );
};

export default Index;