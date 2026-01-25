const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-ken-burns"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/files/ahFddRW4KWcWkKlNvnq3MY7pWuo-960.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
      </div>
      <div className="relative z-10 text-center text-white px-4 animate-fade-in max-w-6xl mx-auto flex-shrink-0 mt-20 md:mt-24">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 md:mb-10">
          <span className="block mb-4 md:mb-6">Зимние туры</span>
          <span className="block">на Дикий Байкал</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mb-6 max-w-4xl mx-auto font-semibold">Путешествия по России с Антоном и Эмилем</p>
      </div>
      <div className="relative z-10 flex-1 flex items-center justify-center w-full">
        <a 
          href="#tours" 
          className="group relative inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg md:text-xl px-10 py-4 md:px-12 md:py-5 rounded-full transition-all hover:scale-105 shadow-2xl overflow-hidden"
        >
          <span className="relative z-10">Выбери свои приключения</span>
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;