import Icon from "@/components/ui/icon";
import React from "react";
import UniversalBookingDialog from "@/components/booking/UniversalBookingDialog";

const HeroSection = () => {
  const [showBookingForm, setShowBookingForm] = React.useState(false);

  return (
    <>
      <UniversalBookingDialog 
        open={showBookingForm} 
        onOpenChange={setShowBookingForm}
      />
    
    <section id="home" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/files/ahFddRW4KWcWkKlNvnq3MY7pWuo-960.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
      </div>
      <div className="relative z-10 text-center text-white px-4 animate-fade-in max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 md:mb-6">Зимние туры на Байкал</h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2 max-w-2xl mx-auto">Путешествия с Антоном и Эмилем</p>
        <p className="text-sm sm:text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto opacity-90">Без посредников и туроператоров</p>
        
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/20">
            <h2 className="text-sm md:text-base font-bold mb-2">
              КОМФОРТНАЯ СХЕМА ОПЛАТЫ
            </h2>
            
            <div className="grid grid-cols-3 gap-3 md:gap-4 mb-3 items-center">
              <div className="bg-gradient-to-br from-green-300 to-green-400 rounded-full w-14 h-14 md:w-16 md:h-16 flex flex-col items-center justify-center shadow-lg mx-auto">
                <div className="text-[8px] md:text-[9px] font-medium mb-0.5 uppercase text-center leading-tight px-1">Взнос</div>
                <div className="text-base md:text-lg font-bold">10%</div>
              </div>
              
              <div className="bg-gradient-to-br from-green-400 to-green-500 rounded-full w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center shadow-lg mx-auto">
                <div className="text-[8px] md:text-[9px] font-medium mb-0.5 uppercase text-center leading-tight px-1">30 дней до тура</div>
                <div className="text-lg md:text-xl font-bold">30%</div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center shadow-lg mx-auto">
                <div className="text-[9px] md:text-[10px] font-medium mb-0.5 uppercase text-center leading-tight px-1">1-й день тура</div>
                <div className="text-xl md:text-2xl font-bold">60%</div>
              </div>
            </div>
            
            <p className="text-xs md:text-sm text-center font-medium flex items-center justify-center gap-2">
              При 100% оплате тура Вы получаете сертификат на одежду и снаряжение на 5000р!
              <span className="text-xl">🎁</span>
            </p>
          </div>
          
          <button 
            onClick={() => setShowBookingForm(true)}
            className="w-full bg-primary hover:bg-primary/90 text-white px-3 py-2 md:px-4 rounded-full font-bold text-xs md:text-sm transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-1 md:gap-2"
          >
            <Icon name="Ticket" size={16} className="flex-shrink-0" />
            <span className="leading-tight">Оставить заявку на тур и получить сертификат на 5 000₽ 🎁</span>
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;