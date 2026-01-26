import React from "react";
import UniversalBookingDialog from "@/components/booking/UniversalBookingDialog";

const PaymentSection = () => {
  const [showBookingForm, setShowBookingForm] = React.useState(false);

  return (
    <>
      <UniversalBookingDialog 
        open={showBookingForm} 
        onOpenChange={setShowBookingForm}
      />
      
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-gray-800">
              Комфортная схема оплаты
            </h2>
            
            <div className="bg-white shadow-xl rounded-xl p-5 md:p-7 border-2 border-cyan-600">
              
              <div className="grid grid-cols-4 gap-2 md:gap-3 mb-4 items-center">
                <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center shadow-lg mx-auto border-4 border-orange-600 animate-pulse">
                  <div className="text-[7px] md:text-[8px] font-medium mb-0.5 uppercase text-center leading-tight px-1 text-white">Предварительное бронирование</div>
                  <div className="font-bold text-white flex items-baseline">
                    <span className="text-3xl md:text-4xl">0</span>
                    <span className="text-base md:text-lg">₽</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full w-14 h-14 md:w-16 md:h-16 flex flex-col items-center justify-center shadow-lg mx-auto">
                  <div className="text-[8px] md:text-[9px] font-medium mb-0.5 uppercase text-center leading-tight px-1 text-white">бронь</div>
                  <div className="text-base md:text-lg font-bold text-white">10%</div>
                </div>
                
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center shadow-lg mx-auto">
                  <div className="text-[8px] md:text-[9px] font-medium mb-0.5 uppercase text-center leading-tight px-1 text-white">30 дней до тура</div>
                  <div className="text-lg md:text-xl font-bold text-white">30%</div>
                </div>
                
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center shadow-lg mx-auto">
                  <div className="text-[9px] md:text-[10px] font-medium mb-0.5 uppercase text-center leading-tight px-1 text-white">1-й день тура</div>
                  <div className="text-xl md:text-2xl font-bold text-white">60%</div>
                </div>
              </div>
              
              <p className="text-xs md:text-sm text-center font-medium text-gray-700 mb-6">При 100% оплате тура Вы получаете сертификат на профессиональную одежду и снаряжение в магазине-партнере на 5000₽ <span className="text-3xl md:text-4xl animate-swing">🎁</span></p>
              
              <div className="flex justify-center">
                <button 
                  onClick={() => setShowBookingForm(true)}
                  className="relative inline-flex items-center justify-center bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 hover:from-orange-600 hover:via-orange-500 hover:to-orange-600 text-white font-bold text-base md:text-lg px-6 py-3 md:px-8 md:py-4 rounded-full transition-all hover:scale-105 shadow-lg overflow-hidden"
                >
                  <span className="relative z-10 font-extrabold">Забронировать тур за  <span className="text-white font-extrabold"><span className="text-xl md:text-2xl">0</span>₽</span></span>
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent shine-effect"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentSection;