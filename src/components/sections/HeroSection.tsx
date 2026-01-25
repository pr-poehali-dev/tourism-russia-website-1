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
        <h1 className="sm:text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 md:mb-6 text-6xl">Зимние туры на Дикий Байкал</h1>
        <p className="sm:text-lg md:text-xl lg:text-2xl mb-2 max-w-2xl mx-auto text-3xl">Путешествия по России с Антоном и Эмилем</p>
        <p className="text-sm sm:text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto opacity-90">Без посредников и переплат</p>
        
        <div className="space-y-4 max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 md:p-7 border border-white/20">
            <h2 className="text-sm md:text-base font-bold mb-2">
              КОМФОРТНАЯ СХЕМА ОПЛАТЫ
            </h2>
            
            <div className="grid grid-cols-4 gap-2 md:gap-3 mb-3 items-center">
              <div className="bg-gradient-to-br from-green-200 to-green-300 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center shadow-lg mx-auto border-4 border-red-600 animate-pulse">
                <div className="text-[7px] md:text-[8px] font-medium mb-0.5 uppercase text-center leading-tight px-1 text-red-600">Предварительное бронирование</div>
                <div className="font-bold text-red-600 flex items-baseline">
                  <span className="text-3xl md:text-4xl">0</span>
                  <span className="text-base md:text-lg">₽</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-300 to-green-400 rounded-full w-14 h-14 md:w-16 md:h-16 flex flex-col items-center justify-center shadow-lg mx-auto">
                <div className="text-[8px] md:text-[9px] font-medium mb-0.5 uppercase text-center leading-tight px-1">бронь</div>
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
            
            <p className="text-xs md:text-sm text-center font-medium flex items-center justify-center gap-2">При 100% оплате тура Вы получаете сертификат на профессиональную одежду и снаряжение в магазине-партнере на 5000р</p>
          </div>
          
          <button 
            onClick={() => setShowBookingForm(true)}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 md:px-6 md:py-3 rounded-lg font-bold text-sm md:text-base transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2 mx-auto"
          >
            <span className="font-extrabold text-[#ffffff]">Забронировать тур за  <span className="text-white font-extrabold"><span className="text-xl md:text-2xl">0</span>₽</span></span>
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;