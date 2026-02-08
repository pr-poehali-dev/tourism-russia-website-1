import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useRef, useEffect } from "react";
import UniversalBookingDialog from "@/components/booking/UniversalBookingDialog";

const TourPermWeekend = () => {
  const navigate = useNavigate();
  const [showBookingForm, setShowBookingForm] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

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

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationId: number;
    const normalSpeed = 0.5;
    const slowSpeed = 0.15;

    const animate = () => {
      if (container) {
        const speed = isHovering ? slowSpeed : normalSpeed;
        container.scrollLeft += speed;
        
        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isHovering]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  const travelFeatures = [
    { icon: "Heart", title: "Индивидуальный подход", description: "Адаптируем маршрут под ваши пожелания" },
    { icon: "Camera", title: "Лучшие фотолокации", description: "Знаем все секретные места для кадров" },
    { icon: "Coffee", title: "Уютная атмосфера", description: "Тёплая база, вкусная еда, дружная компания" },
    { icon: "Shield", title: "Безопасность", description: "Опытный гид, проверенные маршруты" },
    { icon: "Smile", title: "Без суеты", description: "Комфортный темп, время на отдых и фото" },
    { icon: "Sparkles", title: "Яркие эмоции", description: "Незабываемые впечатления гарантированы" }
  ];

  const galleryImages = [
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/7c9e491b-a08c-4d61-abbd-5afbd1802624.jpg",
      aspectRatio: 3/4
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/89266a94-1049-43c7-82a7-8a473df1c1e9.jpg",
      aspectRatio: 3/4
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/1e468d7e-a78a-4006-8df7-adb639ceb008.jpg",
      aspectRatio: 16/9
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/8f961262-d412-4a18-b0b9-3be457f8d020.jpg",
      aspectRatio: 3/4
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/9da71f36-2275-46cf-81e4-203b9842f085.jpg",
      aspectRatio: 3/4
    },
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
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/c8cfc2b5-9055-49e2-a837-d84937328c30.jpg",
      aspectRatio: 9/16
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/2f08bd14-ed2d-4a95-8960-40bcb5a5485f.jpg",
      aspectRatio: 16/9
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/e311f381-8618-4814-8d3d-25ea84a189ba.jpg",
      aspectRatio: 16/9
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/1bf8d865-091e-4677-a1a4-98439fbce040.jpg",
      aspectRatio: 16/9
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/0c3ecb27-6e6f-463c-befa-361c72e68a2b.jpg",
      aspectRatio: 16/9
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/929198b5-46bf-4fcd-b9a8-e6a63dbbb28e.jpg",
      aspectRatio: 4/3
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/c9eac9f4-9a8a-4fe1-b5b5-82c1dc75c4ca.jpg",
      aspectRatio: 3/4
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/ad068daa-020b-4c18-be6e-e1087dea6e85.jpg",
      aspectRatio: 16/9
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/ebd5b26e-762b-47c4-8450-9e82ac374082.jpg",
      aspectRatio: 16/9
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/f68e7caf-f1c4-464d-a68f-e972ba6cd00f.jpg",
      aspectRatio: 16/9
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/d7dbf5d1-d5a9-409d-bc82-2ab47b55b1b8.jpg",
      aspectRatio: 3/4
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/e2b828b4-bd2c-4119-aa3a-0f996a5657d3.jpg",
      aspectRatio: 16/9
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/7a9be04b-8849-4730-9dcb-263a8c4a356d.jpg",
      aspectRatio: 9/16
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/066a085d-8cbc-4419-9501-2d07d7354422.jpg",
      aspectRatio: 16/9
    },
    {
      url: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/cb85149c-7b49-433f-8aca-f7e549c6086f.jpg",
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
              <h1 className="font-heading font-bold md:text-5xl lg:text-6xl text-white mb-2 text-4xl py-2.5">
                Тур выходного дня "Сказки Пермского Края"
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Каменный город • Усьвинские столбы • Ветлан и Полюд • Колчимский камень
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 py-12 md:py-20">
          <div className="w-full">
            <div
              ref={scrollContainerRef}
              className="overflow-x-scroll scrollbar-hide select-none"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="flex gap-4 px-4" style={{ width: 'max-content' }}>
                {[...galleryImages, ...galleryImages].map((image, index) => {
                  const height = 400;
                  const width = height * image.aspectRatio;
                  const originalIndex = index % galleryImages.length;
                  return (
                    <div
                      key={index}
                      className="flex-shrink-0 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer hover:scale-105"
                      style={{ height: `${height}px`, width: `${width}px` }}
                      onClick={() => {
                        setCurrentImageIndex(originalIndex);
                        setLightboxOpen(true);
                      }}
                    >
                      <img
                        src={image.url}
                        alt={`Фото тура ${originalIndex + 1}`}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-20">

          {lightboxOpen && (
            <div 
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
              onClick={() => setLightboxOpen(false)}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
                onClick={() => setLightboxOpen(false)}
              >
                <Icon name="X" size={32} />
              </button>
              
              <button
                className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
                }}
              >
                <Icon name="ChevronLeft" size={48} />
              </button>

              <div 
                className="max-w-[90vw] max-h-[90vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryImages[currentImageIndex].url}
                  alt={`Фото тура ${currentImageIndex + 1}`}
                  className="max-w-full max-h-[90vh] object-contain"
                />
              </div>

              <button
                className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
                }}
              >
                <Icon name="ChevronRight" size={48} />
              </button>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
                {currentImageIndex + 1} / {galleryImages.length}
              </div>
            </div>
          )}

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
                  <Icon name={info.icon} size={32} className="mx-auto mb-3 text-primary" />
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
                  <div key={index}>
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

          <Card className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Готовы к незабываемым выходным?</h2>
              <p className="text-lg mb-8 opacity-90">
                Забронируйте тур прямо сейчас и получите 5% скидку при раннем бронировании!
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => setShowBookingForm(true)}
                  className="relative inline-flex items-center justify-center bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 hover:from-orange-600 hover:via-orange-500 hover:to-orange-600 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-lg overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon name="Calendar" size={20} />
                    Забронировать тур
                  </span>
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent shine-effect"></span>
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default TourPermWeekend;