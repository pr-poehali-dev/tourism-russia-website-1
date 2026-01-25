const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pb-32">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-ken-burns"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/files/ahFddRW4KWcWkKlNvnq3MY7pWuo-960.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
      </div>
      <div className="relative z-10 text-center text-white px-4 animate-fade-in max-w-6xl mx-auto -mt-24">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 md:mb-10 leading-[1.3]">Зимние туры<br />на Дикий Байкал</h1>
        <p className="text-xl sm:text-2xl md:text-3xl mb-6 max-w-4xl mx-auto font-semibold">Путешествия по России с Антоном и Эмилём</p>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto opacity-90">Без посредников и переплат</p>
      </div>
    </section>
  );
};

export default HeroSection;