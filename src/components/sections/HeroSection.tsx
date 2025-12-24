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
        
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 max-w-2xl mx-auto border border-white/20">
          <h2 className="text-lg md:text-2xl font-bold mb-2">
            ВНУТРЕННЯЯ РАССРОЧКА <span className="text-primary">НА</span> ПУТЕШЕСТВИЕ
          </h2>
          <p className="text-sm md:text-base mb-4 md:mb-5 text-white/90">
            Воспользуйтесь нашей беспроцентной рассрочкой
          </p>
          
          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-5">
            <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-full aspect-square flex flex-col items-center justify-center p-3 md:p-4 shadow-xl">
              <div className="text-[10px] md:text-xs font-medium mb-1 uppercase text-center leading-tight">Первый взнос</div>
              <div className="text-2xl md:text-4xl font-bold">20%</div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-full aspect-square flex flex-col items-center justify-center p-3 md:p-4 shadow-xl">
              <div className="text-[10px] md:text-xs font-medium mb-1 uppercase text-center leading-tight">Через месяц</div>
              <div className="text-2xl md:text-4xl font-bold">30%</div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-full aspect-square flex flex-col items-center justify-center p-3 md:p-4 shadow-xl">
              <div className="text-[10px] md:text-xs font-medium mb-1 uppercase text-center leading-tight">В первый день</div>
              <div className="text-2xl md:text-4xl font-bold">50%</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3 items-center justify-center">
            <a 
              href="tel:+79655615153"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-sm md:text-base transition-all hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
            >
              <Icon name="Phone" size={18} />
              +7 965 561-51-53
            </a>
            <a 
              href="mailto:rukzaklife@mail.ru"
              className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-sm md:text-base transition-all hover:scale-105 border border-white/30 w-full sm:w-auto justify-center"
            >
              <Icon name="Mail" size={18} />
              rukzaklife@mail.ru
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;