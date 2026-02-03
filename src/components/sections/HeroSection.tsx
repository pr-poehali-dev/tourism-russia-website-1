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
        <p className="text-xl sm:text-2xl md:text-3xl mb-4 max-w-4xl mx-auto font-semibold">Путешествия с Эмилем и Антоном</p>
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto font-medium text-white/90">Без посредников и переплат</p>
      </div>
    </section>
  );
};

export default HeroSection;