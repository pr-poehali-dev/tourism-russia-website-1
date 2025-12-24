import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
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
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 md:mb-6">Душевные туры по России</h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-2xl mx-auto">Путешествия с Антоном и Эмилем</p>
        
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 max-w-2xl mx-auto border border-white/20">
          <h2 className="text-sm md:text-base font-bold mb-2">
            КОМФОРТНАЯ СХЕМА ОПЛАТЫ
          </h2>
          
          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-3">
            <div className="bg-gradient-to-br from-green-300 to-green-400 rounded-full w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center shadow-lg mx-auto">
              <div className="text-[9px] md:text-[10px] font-medium mb-0.5 uppercase text-center leading-tight px-1">Взнос</div>
              <div className="text-xl md:text-2xl font-bold">10%</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-400 to-green-500 rounded-full w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center shadow-lg mx-auto">
              <div className="text-[9px] md:text-[10px] font-medium mb-0.5 uppercase text-center leading-tight px-1">30 дней до тура</div>
              <div className="text-xl md:text-2xl font-bold">30%</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center shadow-lg mx-auto">
              <div className="text-[9px] md:text-[10px] font-medium mb-0.5 uppercase text-center leading-tight px-1">1-й день тура</div>
              <div className="text-xl md:text-2xl font-bold">50%</div>
            </div>
          </div>
          
          <button 
            onClick={() => document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
          >
            <Icon name="Compass" size={16} />
            Подобрать тур
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;