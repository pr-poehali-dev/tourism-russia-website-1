import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import React from "react";
import UniversalBookingDialog from "@/components/booking/UniversalBookingDialog";

const ContactsSection = () => {
  const [showBookingForm, setShowBookingForm] = React.useState(false);

  return (
    <>
      <UniversalBookingDialog 
        open={showBookingForm} 
        onOpenChange={setShowBookingForm}
      />
      
      <section id="contacts" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold">Контакты</h2>
          </div>
          <div className="max-w-6xl mx-auto border-2 border-cyan-600 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-6 md:gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={24} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Телефон</p>
                    <a href="tel:+79655615153" className="text-lg hover:text-primary transition-colors">
                      +7 965 561-51-53
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={24} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:rukzaklife@mail.ru" className="text-lg hover:text-primary transition-colors">
                      rukzaklife@mail.ru
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Адрес</p>
                    <p className="text-lg">г. Пермь, ул. Монастырская 117-28</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center relative">
                <div className="flex flex-col gap-8 w-full">
                  <div className="text-cyan-600 font-bold text-xl text-center w-full">
                    Давай начнем с простого!
                  </div>
                  <div className="flex items-center justify-center gap-6 w-full">
                    <svg className="w-16 h-16 text-cyan-600 flex-shrink-0" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M 10 15 Q 20 40, 50 40" strokeLinecap="round"/>
                      <path d="M 50 40 L 42 35 M 50 40 L 42 45" strokeLinecap="round"/>
                    </svg>
                    <button 
                      onClick={() => setShowBookingForm(true)}
                      className="relative inline-flex items-center justify-center bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 hover:from-orange-600 hover:via-orange-500 hover:to-orange-600 text-white font-semibold px-10 py-4 text-lg rounded-full transition-all hover:scale-105 shadow-md overflow-hidden flex-shrink-0"
                    >
                      <span className="relative z-10">Забронировать за 0 р</span>
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent shine-effect"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Жизнь с рюкзаком</h3>
              <p className="text-sm opacity-90">Авторские туры по России с 2010 года</p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 965 561-51-53
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  rukzaklife@mail.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Пермь, ул. Монастырская 117-28
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <a href="https://t.me/trash_mnesh" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                  <Icon name="Send" size={24} />
                </a>
                <a href="https://vk.com/trash_mnesh" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.15 14.63h-1.43c-.51 0-.67-.42-1.58-1.33-.8-.76-1.15-.86-1.35-.86-.28 0-.36.08-.36.46v1.21c0 .33-.1.52-1.01.52-1.49 0-3.14-.9-4.3-2.57-1.76-2.37-2.24-4.15-2.24-4.51 0-.2.08-.39.46-.39h1.43c.35 0 .48.16.61.53.71 2.05 1.91 3.85 2.4 3.85.18 0 .27-.09.27-.55v-2.14c-.06-.98-.57-1.06-.57-1.41 0-.16.13-.32.35-.32h2.24c.29 0 .4.16.4.5v2.89c0 .3.13.4.22.4.18 0 .33-.1.67-.44 1.04-1.17 1.79-2.97 1.79-2.97.1-.21.26-.39.61-.39h1.43c.43 0 .53.22.43.52-.16.73-1.97 3.44-1.97 3.44-.15.24-.2.35 0 .62.14.2.61.59 1.12 1.13.59.62.95 1.14 1.06 1.5.11.36-.08.54-.49.54z"/></svg>
                </a>
                <a href="https://www.instagram.com/ant.turist" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="https://youtube.com/@antturist" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                  <Icon name="Youtube" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-75">
            <p>© 2020 Жизнь с рюкзаком. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactsSection;