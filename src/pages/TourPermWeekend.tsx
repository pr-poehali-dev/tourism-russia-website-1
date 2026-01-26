import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useRef } from "react";
import UniversalBookingDialog from "@/components/booking/UniversalBookingDialog";

const TourPermWeekend = () => {
  const navigate = useNavigate();
  const [showBookingForm, setShowBookingForm] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const tourInfo = [
    { icon: "Calendar", label: "Длительность тура", value: "ОТ 1 ДНЯ ДО 4 ДНЕЙ" },
    { icon: "Moon", label: "Ночевки", value: "НА ТЁПЛОЙ БАЗЕ" },
    { icon: "FootprintsIcon", label: "Тип тура", value: "АВТО/ПЕШИЙ" },
    { icon: "Signal", label: "Сложность", value: "1 ИЗ 5" },
    { icon: "Users", label: "Количество", value: "ГРУППА ОТ 4 ЧЕЛОВЕК" },
    { icon: "UserCheck", label: "Возраст", value: "БЕЗ ОГРАНИЧЕНИЙ" },
    { icon: "MapPin", label: "Город отправления", value: "ПЕРМЬ" },
  ];

  const program = [
    {
      day: "1 день",
      distance: "Авто + пеший",
      title: "Каменный город, Шумихинские скалы и посёлок Юбилейный",
      description: "Выезжаем из Перми утром. Первая остановка – легендарный <strong>Каменный город</strong>, уникальный скальный массив с причудливыми каменными останцами. Прогуляемся по \"улицам\" каменного лабиринта, сделаем фантастические фото! Затем посетим живописные <strong>Шумихинские скалы</strong> и уютный посёлок <strong>Юбилейный</strong>. Размещение на базе, ужин."
    },
    {
      day: "2 день",
      distance: "Авто + пеший",
      title: "Усьвинские столбы и Сердце Пармы",
      description: "После завтрака отправляемся к величественным <strong>Усьвинским столбам</strong> – мощным 120-метровым скалам на берегу реки Усьва! Поднимемся на смотровую площадку с панорамными видами. Далее посетим таинственное <strong>Сердце Пармы</strong> – место силы с невероятной энергетикой. Возвращение на базу, ужин у камина."
    },
    {
      day: "3 день",
      distance: "Авто + пеший",
      title: "Камни-богатыри Ветлан и Полюд",
      description: "Третий день – знакомство с легендарными камнями-богатырями! <strong>Ветлан</strong> и <strong>Полюд</strong> стоят на разных берегах реки Вишеры, согласно легенде – это окаменевшие богатыри, сражавшиеся за прекрасную деву. Поднимемся на оба камня, насладимся величественными видами на тайгу и реку. Возвращение на базу."
    },
    {
      day: "4 день",
      distance: "Авто + пеший",
      title: "Колчимский камень-колдун и возвращение",
      description: "Финальный день – восхождение на любимый камень гида Антона! <strong>Колчимский камень</strong> (он же камень-колдун) – одна из самых мистических вершин Урала с потрясающими видами. После спуска – обед и выезд обратно в Пермь. Прибытие вечером с багажом незабываемых впечатлений!\n\n<strong>Можно выбрать любой день отдельно или комбинировать маршрут по своему желанию!</strong>"
    }
  ];

  const included = [
    "Трансфер (комфортабельный транспорт туда-обратно)",
    "Питание (полноценные завтраки, обеды и ужины)",
    "Проживание (тёплая база с удобствами)",
    "Работа опытного гида Антона",
    "Экскурсионное сопровождение на всех локациях",
    "Чай/кофе на базе без ограничений"
  ];

  const notIncluded = [
    "Проезд до Перми (если вы не из Перми)",
    "Личные расходы",
    "Дополнительные экскурсии по желанию"
  ];

  const galleryImages = [
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/f4de9d1f-567d-4892-ad15-de6664c8c99c.jpg",
      aspectRatio: 16/9
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/c1b59aa2-06d8-47af-bd95-56560d586cc7.jpg",
      aspectRatio: 4/3
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/a87ea35c-f95b-42a2-b434-621da3a95ad5.jpg",
      aspectRatio: 4/3
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/8346eb2e-c85f-4784-bfe8-71e3a694cf83.jpg",
      aspectRatio: 3/4
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/77b2f3e3-fef5-4f2c-9e36-34e7892780d8.jpg",
      aspectRatio: 9/16
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/6f789975-c7b2-43eb-ad17-2b52df5034c3.jpg",
      aspectRatio: 9/16
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/ee33f798-c7fb-4a22-b705-55301e3371e7.jpg",
      aspectRatio: 9/16
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/6efa0fe2-c8f1-473d-be04-b86c4ad28f29.jpg",
      aspectRatio: 9/16
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/82b1bf83-37dc-4278-877b-188faa5a6d90.jpg",
      aspectRatio: 9/16
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/3b1b1185-2e56-48e6-b285-1b5dbdfcd3ea.jpg",
      aspectRatio: 9/16
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/98e65736-f397-41c0-82ac-d1e5e95b7459.jpg",
      aspectRatio: 9/16
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/1f713803-febc-4229-9e9d-6171c5fc759c.jpg",
      aspectRatio: 9/16
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/a2177105-33df-4b0f-9d99-2a78db70acfb.jpg",
      aspectRatio: 16/9
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/be90c22d-378e-49a8-8ff6-0c38d8044e03.jpg",
      aspectRatio: 9/16
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/6d28cc0f-6dc2-4c8e-95eb-944a741e8baf.jpg",
      aspectRatio: 9/16
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/4409aee7-8bf4-4730-b674-174516d4c3c9.jpg",
      aspectRatio: 16/9
    }
  ];

  return (
    <>
      <UniversalBookingDialog 
        open={showBookingForm} 
        onOpenChange={setShowBookingForm}
      />

      <div className="min-h-screen bg-background">
        <header className="bg-white border-b sticky top-0 z-50">
          <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
            <div className="flex items-start gap-2 md:gap-3">
              <img src="https://cdn.poehali.dev/files/11-1.png" alt="Логотип" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-black text-sm sm:text-base md:text-lg leading-tight">Жизнь с рюкзаком</span>
                <span className="text-black text-xs leading-tight">авторские туры</span>
              </div>
            </div>
            <Button
              variant="ghost"
              onClick={() => navigate('/#tours')}
              className="flex items-center gap-2"
            >
              <Icon name="ArrowLeft" size={20} />
              <span className="hidden sm:inline">На главную</span>
            </Button>
          </div>
        </header>

        <div 
          className="relative h-[40vh] md:h-[60vh] overflow-hidden"
        >
          <img
            src="https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/f4de9d1f-567d-4892-ad15-de6664c8c99c.jpg"
            alt="Тур выходного дня Сказки Пермского Края"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container mx-auto">
              <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-2">
                Тур выходного дня "Сказки Пермского Края"
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Каменный город • Усьвинские столбы • Ветлан и Полюд • Колчимский камень
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="md:col-span-2">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">О туре</h2>
                <div className="prose prose-lg max-w-none space-y-4 text-gray-700">
                  <p>
                    <strong>Каменный город, Усьвинские столбы, Белогорский монастырь и мой любимый Колчимский камень</strong> – это природные локации, известные далеко за пределами Перми! Но не только этим знаменит наш чудесный край.
                  </p>
                  <p>
                    <strong>Меня зовут Антон, и я организую вам бомбическое путешествие по Пермскому краю и вообще Уралу!</strong> 🏔️
                  </p>
                  <p>
                    Предлагаю как <strong>однодневные экскурсии от 4000 р</strong> с человека (выезд из Перми и возвращение в тот же день), так и многодневные туры. Например, 4-дневное путешествие в зимнюю сказку с посещением всех топовых локаций – <strong>всего 28 000 р</strong> с человека!
                  </p>
                  <p>
                    Даты проведения – <strong>по вашему запросу!</strong> Формируем группы от 4 человек. Все маршруты можно комбинировать под ваши пожелания.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary">
              <CardContent className="p-6 md:p-8">
                <div className="text-center mb-4">
                  <div className="text-sm text-muted-foreground mb-2">Даты тура</div>
                  <div className="font-bold text-lg">По запросу</div>
                </div>
                <div className="text-center mb-6">
                  <div className="flex flex-col items-center gap-1">
                    <div className="text-3xl md:text-4xl font-bold text-primary">
                      от 4 000 р <span className="text-lg font-bold text-primary">за 1 день</span>
                    </div>
                    <div className="text-lg font-bold text-primary">28 000 р за 4 дня</div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-center gap-3">
                    <Icon name="Users" size={20} className="text-primary" />
                    <span>Группы от 4 человек</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Shield" size={20} className="text-primary" />
                    <span>Легкий уровень сложности</span>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    className="relative inline-flex items-center justify-center bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 hover:from-orange-600 hover:via-orange-500 hover:to-orange-600 text-white font-bold text-base px-6 py-3 rounded-lg transition-all hover:scale-105 shadow-lg overflow-hidden"
                    onClick={() => setShowBookingForm(true)}
                  >
                    <span className="relative z-10 whitespace-nowrap">
                      Забронировать место
                    </span>
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent shine-effect"></span>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {tourInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Icon name={info.icon as any} size={32} className="mx-auto mb-3 text-primary" />
                  <p className="text-xs text-muted-foreground mb-2">{info.label}</p>
                  <p className="font-semibold text-sm">{info.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-16">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">Программа тура</h2>
              <div className="space-y-8">
                {program.map((day, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-heading font-bold">{day.day}</h3>
                        <span className="text-sm text-muted-foreground">{day.distance}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-primary mb-3">{day.title}</h4>
                      <p 
                        className="text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: day.description }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-2 border-green-500">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="CheckCircle" size={32} className="text-green-500" />
                  <h2 className="text-2xl font-heading font-bold">Что входит в стоимость</h2>
                </div>
                <ul className="space-y-3">
                  {included.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="XCircle" size={32} className="text-orange-500" />
                  <h2 className="text-2xl font-heading font-bold">Что НЕ входит в стоимость</h2>
                </div>
                <ul className="space-y-3">
                  {notIncluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="Minus" size={20} className="text-orange-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">Галерея</h2>
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none"
              onMouseDown={(e) => {
                e.preventDefault();
                setIsDragging(true);
                setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
                setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
              }}
              onMouseLeave={() => setIsDragging(false)}
              onMouseUp={() => setIsDragging(false)}
              onMouseMove={(e) => {
                if (!isDragging || !scrollContainerRef.current) return;
                e.preventDefault();
                const x = e.pageX - (scrollContainerRef.current.offsetLeft || 0);
                const walk = (x - startX) * 2;
                scrollContainerRef.current.scrollLeft = scrollLeft - walk;
              }}
            >
              <div className="flex gap-4" style={{ width: 'max-content' }}>
                {galleryImages.map((image, index) => {
                  const height = 400;
                  const width = height * image.aspectRatio;
                  return (
                    <div
                      key={index}
                      className="flex-shrink-0 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                      style={{ height: `${height}px`, width: `${width}px` }}
                    >
                      <img
                        src={image.url}
                        alt={`Фото тура ${index + 1}`}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Готовы к незабываемому выходному?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Забронируйте тур прямо сейчас и получите 5% скидку при раннем бронировании!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => setShowBookingForm(true)}
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 font-bold text-lg px-8 py-6"
                >
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Забронировать тур
                </Button>
                <Button
                  onClick={() => window.location.href = 'tel:+79655615153'}
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/20 font-bold text-lg px-8 py-6"
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 965 561-51-53
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default TourPermWeekend;