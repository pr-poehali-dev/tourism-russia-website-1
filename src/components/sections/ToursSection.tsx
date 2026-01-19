import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { useNavigate } from "react-router-dom";
import UniversalBookingDialog from "@/components/booking/UniversalBookingDialog";

interface Tour {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  duration: string;
  price: string;
  difficulty: string;
  image: string;
  url: string;
}

const ToursSection = () => {
  const navigate = useNavigate();
  const [showBookingForm, setShowBookingForm] = React.useState(false);

  const tours: Tour[] = [
    {
      id: 1,
      title: "Тур \"Байкал:Коньки Над Бездной\"",
      subtitle: "можно пешком, если нет желания на коньках",
      description: "16-22 февраля<br>6-12 марта",
      duration: "За 7 дней мы преодолеем несколько десятков километров по льду и познакомимся с достопримечательностями острова <strong>Ольхон</strong>: мысом <strong>Хобой</strong>, скалами <strong>Три Брата</strong> и <strong>Шаманка</strong>, буддийской ступой на острове <strong>Огой</strong> и многим другим!\n\n<strong>Передвигаться будем на коньках, пешком и автомобилях повышенной проходимости. Все ночёвки запланированы на тёплых турбазах.</strong>",
      price: "75 000 ₽",
      difficulty: "Легкий",
      image: "https://cdn.poehali.dev/files/2z7a6771.jpg",
      url: "/tour/baikal-skating",
    },
    {
      id: 2,
      title: "Тур \"Дикий Байкал\"",
      subtitle: "комфортные отапливаемые палатки",
      description: "25 февраля – 4 марта 2026 года",
      duration: "За 8 дней мы совершим путешествие вокруг острова <strong>Ольхон</strong> по льду Байкала: увидим мыс <strong>Хобой</strong>, скалу <strong>Шаманка</strong>, ледяные гроты и байкальские сокуи!\n\n<strong>Будем перемещаться пешком и на коньках, помогая себе специальными палками. Ночевать будем в отапливаемых палатках с печкой прямо на льду Байкала!</strong>",
      price: "61 000 ₽",
      difficulty: "Легкий",
      image: "https://cdn.poehali.dev/files/IMG_5107.jpg",
      url: "/tour/baikal-tents",
    },
    {
      id: 6,
      title: "Дагестан: Кавказская тропа по краю башен",
      subtitle: "Пеший поход с палатками",
      description: "1-7 мая 2026 года",
      duration: "За 7 дней пешего похода преодолеем около <strong>100 км по Кавказской тропе</strong>, пройдем через <strong>Гунибскую крепость</strong>, <strong>Карадахскую теснину</strong>, увидим <strong>Сулакский каньон</strong> и познакомимся с традициями горцев!\n\n<strong>Ночевки в палатках, приготовление еды на костре, восхождения на вершины и невероятные панорамы гор!</strong>",
      price: "45 600 ₽",
      difficulty: "Средний",
      image: "https://cdn.poehali.dev/files/photo_2025-12-23_11-28-42.jpg",
      url: "/tour/dagestan",
    },
    {
      id: 3,
      title: "Поход к горе Белухе",
      subtitle: "с конным сопровождением",
      description: "5-16 июля 2026 года",
      duration: "За 12 дней похода увидим Аккемское озеро, Кучерлинские озера, гору <strong>Белуха</strong>, посетим озеро Горных духов, Семиозерье, огромный Аккемский ледник и уютную деревянную часовню среди величественных пейзажей.\n\n<strong>Лошади будут нести ваши личные вещи и общественное снаряжение, а мы будем ходить в треккинги с небольшим рюкзаком, гулять по кедровым лесам и наслаждаться рассветами!</strong>",
      price: "78 800 ₽",
      difficulty: "Средний",
      image: "https://cdn.poehali.dev/files/ozz-q6fkgwprn4f2igi58odrec2ov3kk0uj0u7w4k4es9c.jpg",
      url: "/tour/altai-belukha",
    },
    {
      id: 4,
      title: "Камчатка — три вулкана",
      subtitle: "Мутновский, Горелый и Авачинский",
      description: "15-23 августа 2026 года",
      duration: "За 9 дней вы поднимитесь на вулканы <strong>Мутновский</strong>, <strong>Горелый</strong> и <strong>Авачинский</strong>, увидите лавовые потоки, фумаролы, кратерные озёра и ледовые пещеры!\n\n<strong>Термальные источники «Дачные» в малой долине гейзеров, уха из свежей красной рыбки, икра и чай из трав. Идеально для тех, кто любит природу!</strong>",
      price: "83 200 ₽",
      difficulty: "Средний",
      image: "https://cdn.poehali.dev/files/photo_2025-12-23_11-41-12.jpg",
      url: "/tour/kamchatka",
    },
    {
      id: 5,
      title: "Путешествие за золотом Колымы",
      subtitle: "Поход вокруг озера Джека Лондона",
      description: "5-15 сентября 2026 года",
      duration: "Уникальный 11-дневный тур по одному из самых живописных уголков Магаданской области в самый разгар золотой осени. Переходы через перевалы, переправы через реки, баня на <strong>Косе Биологов</strong> и вид на массив <strong>Пила</strong>!\n\n<strong>Лодочная переправа, озера с танцующими хариусами и панорамы хребта Черского — всё это ждёт вас на Колыме!</strong>",
      price: "92 000 ₽",
      difficulty: "Сложный",
      image: "https://cdn.poehali.dev/files/IMG_4203.jpg",
      url: "/tour/kolyma",
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Легкий":
        return "bg-green-500";
      case "Средний":
        return "bg-yellow-500";
      case "Сложный":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const filterTours = (tab: string) => {
    if (tab === "all") return tours;
    if (tab === "baikal") return tours.filter(t => t.id === 1 || t.id === 2);
    if (tab === "altai") return tours.filter(t => t.id === 3);
    if (tab === "kamchatka") return tours.filter(t => t.id === 4);
    if (tab === "kolyma") return tours.filter(t => t.id === 5);
    if (tab === "dagestan") return tours.filter(t => t.id === 6);
    if (tab === "ural") return tours.filter(t => false);
    return tours;
  };

  return (
    <section id="tours" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 md:mb-4">Наши туры</h2>
          <p className="text-base md:text-lg text-muted-foreground">Выберите своё следующее приключение</p>
        </div>
        <Tabs defaultValue="baikal" className="w-full mb-12">
          <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-5 border-2 border-primary">
            <TabsTrigger value="baikal" className="text-xs sm:text-sm">Байкал</TabsTrigger>
            <TabsTrigger value="dagestan" className="text-xs sm:text-sm">Дагестан</TabsTrigger>
            <TabsTrigger value="altai" className="text-xs sm:text-sm">Алтай</TabsTrigger>
            <TabsTrigger value="kamchatka" className="text-xs sm:text-sm">Камчатка</TabsTrigger>
            <TabsTrigger value="kolyma" className="text-xs sm:text-sm">Колыма</TabsTrigger>
          </TabsList>
          {["baikal", "dagestan", "altai", "kamchatka", "kolyma"].map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {filterTours(tab).map((tour) => (
                  <Card key={tour.id} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      {tour.id === 1 && (
                        <div className="absolute top-0 left-0 flex flex-col gap-2 z-10">
                          <div className="relative bg-red-500 text-white px-4 py-2 font-bold text-sm uppercase shadow-lg"
                               style={{
                                 clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 100%)'
                               }}>
                            Хит продаж
                          </div>
                          <div className="relative bg-orange-500 text-white px-4 py-2 font-bold text-sm shadow-lg"
                               style={{
                                 clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)'
                               }}>
                            Осталось 7 мест
                          </div>
                        </div>
                      )}
                      {tour.id === 2 && (
                        <div className="absolute top-0 left-0 flex flex-col gap-2 z-10">
                          <div className="relative text-white px-4 py-2 font-bold text-sm uppercase shadow-lg bg-green-600"
                               style={{
                                 clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 100%)'
                               }}>самый душевный тур</div>
                          <div className="relative bg-orange-500 text-white px-4 py-2 font-bold text-sm shadow-lg"
                               style={{
                                 clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)'
                               }}>Осталось 6 мест</div>
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="font-heading text-xl md:text-2xl">{tour.title}</CardTitle>
                      {tour.subtitle && (
                        <p className="text-sm md:text-base text-muted-foreground mt-1">{tour.subtitle}</p>
                      )}
                      <div className="flex items-start justify-between mt-2">
                        <CardDescription className="text-sm md:text-base text-left" dangerouslySetInnerHTML={{ __html: tour.description }} />
                        <div className="text-primary font-bold text-xl md:text-2xl whitespace-nowrap ml-4">
                          {tour.price}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: tour.duration.replace(/\n/g, '<br>') }} />
                      <Button 
                        variant="outline" 
                        className="w-full bg-white hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 border-2 border-primary"
                        onClick={() => navigate(tour.url)}
                      >
                        <Icon name="ArrowRight" size={16} className="mr-2" />
                        Подробнее
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <div className="text-center mt-12 px-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => setShowBookingForm(true)}
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-3 py-2 md:px-6 md:py-3 rounded-lg font-bold text-xs md:text-base transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-1 md:gap-2"
            >
              <span className="leading-tight font-extrabold">Забронировать тур за  <span className="text-white font-extrabold"><span className="text-xl md:text-2xl">0</span>₽</span></span>
            </button>
            <button 
              onClick={() => setShowBookingForm(true)}
              className="w-full sm:w-auto bg-white hover:bg-green-600 text-black hover:text-white px-3 py-2 md:px-6 md:py-3 rounded-lg font-bold text-xs md:text-base transition-all hover:scale-105 shadow-lg border-2 border-green-600"
            >
              Предложить свой вариант тура
            </button>
          </div>
        </div>
      </div>

      <UniversalBookingDialog 
        open={showBookingForm} 
        onOpenChange={setShowBookingForm}
      />
    </section>
  );
};

export default ToursSection;