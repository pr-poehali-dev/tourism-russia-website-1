import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface GalleryImage {
  url: string;
  alt: string;
}

interface PhotoGallery {
  id: string;
  title: string;
  coverImage: string;
  images: GalleryImage[];
}

const PhotoGallerySection = () => {
  const [selectedGallery, setSelectedGallery] = React.useState<PhotoGallery | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const photoGalleries: PhotoGallery[] = [
    {
      id: "baikal-skating",
      title: "Коньковый поход по Байкалу",
      coverImage: "https://cdn.poehali.dev/files/photo_2025-12-23_10-01-44.jpg",
      images: [
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-01-44.jpg", alt: "Группа туристов на льду Байкала с санями" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_09-55-33.jpg", alt: "Буддийские столбы на Байкале" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_09-55-39.jpg", alt: "Скала Огой на Байкале" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_09-56-04.jpg", alt: "Ледяной грот на Байкале" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_09-56-15.jpg", alt: "Закат над зимним Байкалом" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_09-56-26.jpg", alt: "Встреча рассвета на льду" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_09-56-33.jpg", alt: "Группа в ледяном гроте с сосульками" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_09-56-39.jpg", alt: "Турист в ледяной пещере Байкала" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_09-56-41.jpg", alt: "Девушка с байкальским льдом" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-01-26.jpg", alt: "Сердце из ягод на прозрачном льду" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-01-29.jpg", alt: "Акробатика на прозрачном льду Байкала" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-01-33.jpg", alt: "Гид с рюкзаком на фоне Байкала" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-01-36.jpg", alt: "Туристка в красном на коньках" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-01-39.jpg", alt: "Туристка в бирюзовом у берега Байкала" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-01-41.jpg", alt: "Прыжок с санями на прозрачном льду" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-01-47.jpg", alt: "Веселая группа у деревянного домика" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-01-50.jpg", alt: "Туристка в ледяном гроте с сосульками" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-01-53.jpg", alt: "Группа на прозрачном льду с заснеженными горами" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-01-56.jpg", alt: "Турист на ледяных торосах Байкала" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-01-59.jpg", alt: "Отдых группы на льду с санями" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-02-02.jpg", alt: "Группа на крыльце деревянной базы" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-02-06.jpg", alt: "Туристы изучают узоры прозрачного льда" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-02-10.jpg", alt: "Караван с санями по ледяной дороге" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-02-13.jpg", alt: "Гид на зеркальном льду с группой вдали" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-02-16.jpg", alt: "Группа у скалистого берега на льду" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-02-19.jpg", alt: "Обед на льду с любопытной лисой" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-02-33.jpg", alt: "Селфи группы на прозрачном льду" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-02-36.jpg", alt: "Веселые трюки на прозрачном льду" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-02-39.jpg", alt: "Отдых в ледяном гроте" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-02-41.jpg", alt: "Заледеневший турист на морозе" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-02-44.jpg", alt: "Вся группа у турбазы на крыльце" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-02-48.jpg", alt: "Веселая забава на идеально гладком льду" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-05-01.jpg", alt: "Командное фото на синем льду" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-05-36.jpg", alt: "Групповое фото с отражением во льду" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-05-42.jpg", alt: "Команда на фоне бескрайнего льда Байкала" },
      ],
    },
    {
      id: "baikal-tents",
      title: "Байкал в палатках",
      coverImage: "https://cdn.poehali.dev/files/photo_2025-12-23_10-13-45.jpg",
      images: [
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-13-45.jpg", alt: "Палатка на льду Байкала на закате" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-13-41.jpg", alt: "Ночной лагерь с палатками под звездным небом" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-13-42.jpg", alt: "Светящиеся палатки на ночном льду Байкала" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-13-51.jpg", alt: "Велосипедисты в деревне по дороге на Байкал" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-13-55.jpg", alt: "Туристы на велосипедах в весеннем селе" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-00.jpg", alt: "Двое велосипедистов в яркой экипировке" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-03.jpg", alt: "Отдых на прозрачном льду Байкала" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-06.jpg", alt: "На фоне ледяных гротов Байкала" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-10.jpg", alt: "У ледяной скалы на льду озера" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-12.jpg", alt: "Команда на льду Байкала в ярких куртках" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-16.jpg", alt: "Фотограф на фоне ледяных скал Байкала" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-19.jpg", alt: "Сборы группы на солнечном льду" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-23.jpg", alt: "Коньки на прозрачном льду - вид сверху" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-26.jpg", alt: "С санями по гладкому льду Байкала" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-30.jpg", alt: "Желтая палатка на фоне скал и озера" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-34.jpg", alt: "Утренний завтрак у палатки на льду" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-37.jpg", alt: "Готовка еды на закате у желтой палатки" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-40.jpg", alt: "Костер на льду Байкала в сумерках" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-44.jpg", alt: "Двое туристов с санями на прозрачном льду" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-48.jpg", alt: "Путь по зеркальному льду Байкала с рюкзаком" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-50.jpg", alt: "Группа с санями в пути по льду" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-54.jpg", alt: "Остановка на маршруте у скал" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-57.jpg", alt: "Двое идут по узорчатому льду с санями" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-15-01.jpg", alt: "Подъем по заснеженному склону в лесу" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-15-08.jpg", alt: "Туристы на перевале среди сосен" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-15-13.jpg", alt: "Селфи троих друзей на снегу" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-15-19.jpg", alt: "Отдых группы на склоне с видом на озеро" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-15-22.jpg", alt: "Веселая компания на снежном склоне" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-15-25.jpg", alt: "Закат над лагерем на льду Байкала" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-15-29.jpg", alt: "Кусочек льда на фоне заката" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-15-33.jpg", alt: "Отдых на прозрачном льду у скал" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-15-39.jpg", alt: "Отражение в маске на льду" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-15-42.jpg", alt: "Одинокий путник с санями по льду" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-15-46.jpg", alt: "У костра в ночи на Байкале" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-15-47.jpg", alt: "Силуэт палатки на рассвете" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-15-50.jpg", alt: "Обед группы у костра на скалистом берегу" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-15-53.jpg", alt: "Отдых на белоснежном льду с санями" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-15-56.jpg", alt: "Туристы отдыхают на солнечном льду Байкала" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-16-00.jpg", alt: "Утренний чай группы на каменистом берегу" },
      ],
    },
    {
      id: "altai-belukha",
      title: "Поход к горе Белухе",
      coverImage: "https://cdn.poehali.dev/files/photo_2025-12-23_11-31-38.jpg",
      images: [
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-31-38.jpg", alt: "Группа туристов на горной тропе Алтая" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-30-08.jpg", alt: "Вид на бирюзовое озеро с горами" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-30-12.jpg", alt: "Отдых группы на зеленых альпийских лугах" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-30-30.jpg", alt: "Вьючные лошади в сосновом лесу" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-30-34.jpg", alt: "Караван с лошадьми на высокогорном перевале" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-30-38.jpg", alt: "Переправа через горный ручей" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-30-42.jpg", alt: "Гид рассказывает о каменных пирамидах" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-30-44.jpg", alt: "Вечер у костра в горах" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-30-48.jpg", alt: "Группа на фоне горного озера" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-31-46.jpg", alt: "Бирюзовое озеро с отражением гор" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-31-50.jpg", alt: "Река молочного цвета в хвойной долине" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-31-57.jpg", alt: "Турист на берегу озера с горными вершинами" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-32-01.jpg", alt: "Лагерь на берегу реки среди зеленых холмов" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-32-05.jpg", alt: "Спокойная гладь озера с затопленными деревьями" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-32-09.jpg", alt: "Каменистый берег горного озера" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-32-13.jpg", alt: "Инструктаж группы в хвойном лесу" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-32-19.jpg", alt: "Панорама озера в пасмурный день" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-32-23.jpg", alt: "Вся группа на вершине горы" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-32-28.jpg", alt: "Селфи на вершине с видом на долину" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-32-31.jpg", alt: "Гид на фоне горного озера и вершин" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-32-37.jpg", alt: "Вид на гору Белуху с долины реки" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-32-44.jpg", alt: "Деревянная часовня на фоне ледников Белухи" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-32-49.jpg", alt: "Турист на каменистом плато перед ледником" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-32-54.jpg", alt: "Три туристки у горного озера босиком" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-32-58.jpg", alt: "Привал группы на зеленом холме" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-33-05.jpg", alt: "Переход через горную реку с видом на Белуху" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-33-08.jpg", alt: "Переправа через горный ручей по деревянному мостику" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-33-12.jpg", alt: "Вечер у костра всей группой в тумане" },
      ],
    },
    {
      id: "kamchatka",
      title: "Камчатка — три вулкана",
      coverImage: "https://cdn.poehali.dev/files/photo_2025-12-23_11-41-12.jpg",
      images: [
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-41-12.jpg", alt: "Селфи на вершине вулкана над облаками" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-36-29.jpg", alt: "Туристка на фоне горных хребтов Камчатки" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-36-30.jpg", alt: "Гид с треккинговыми палками на закате" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-36-32 (2).jpg", alt: "На вершине холма с панорамой Камчатки" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-36-32 (3).jpg", alt: "Турист на склоне вулканической долины" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-36-32 (4).jpg", alt: "Одинокая береза на склоне холма с туристом" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-36-32.jpg", alt: "Отдых на вершине с панорамой Камчатки" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-39-58.jpg", alt: "Группа у высокого водопада в каньоне" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-40-03.jpg", alt: "Красная палатка на фоне вулкана в тумане" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-40-10.jpg", alt: "Лагерь в ущелье с паром от горячих источников" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-40-16.jpg", alt: "Пара туристов жарят зефир на вершине вулкана" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-40-22.jpg", alt: "Большая группа туристов с гидом на фоне леса" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-40-30.jpg", alt: "Гид у костра с бутербродом в руках" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-40-37.jpg", alt: "Группа у высокого водопада в скалах на закате" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-40-45.jpg", alt: "Команда на снежнике перед водопадом" },
      ],
    },
    {
      id: "kolyma",
      title: "Путешествие за золотом Колымы",
      coverImage: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/files/ec9cfc09-8cdb-435c-b12e-2a0bae6f1bf6.jpg",
      images: [],
    },
    {
      id: "dagestan",
      title: "Дагестан: Кавказская тропа",
      coverImage: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/files/61d12ccc-7a24-446a-8342-96f46f102626.jpg",
      images: [],
    },
  ];

  const openGallery = (gallery: PhotoGallery) => {
    setSelectedGallery(gallery);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (!selectedGallery) return;
    setCurrentImageIndex((prev) => 
      prev === selectedGallery.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!selectedGallery) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedGallery.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 md:mb-4">Фотогалерея</h2>
            <p className="text-base md:text-lg text-muted-foreground">Наши путешествия в фотографиях</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photoGalleries.map((gallery) => (
              <Card
                key={gallery.id}
                className="cursor-pointer group overflow-hidden hover:shadow-xl transition-all duration-300"
                onClick={() => openGallery(gallery)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={gallery.coverImage}
                    alt={gallery.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-heading font-bold text-xl text-white mb-1">
                      {gallery.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <Icon name="Images" size={16} />
                      <span>{gallery.images.length} фото</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <DialogPrimitive.Root open={selectedGallery !== null} onOpenChange={closeGallery}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/95" />
          <DialogPrimitive.Content className="fixed left-0 top-0 z-50 w-screen h-screen flex flex-col bg-black">
            {selectedGallery && selectedGallery.images.length > 0 && (
              <>
                <VisuallyHidden>
                  <DialogPrimitive.Title>{selectedGallery.title}</DialogPrimitive.Title>
                </VisuallyHidden>
                
                <button
                  onClick={closeGallery}
                  className="absolute top-4 right-4 z-50 bg-white hover:bg-gray-100 p-2 rounded-full transition-all shadow-lg"
                  aria-label="Закрыть галерею"
                >
                  <Icon name="X" size={24} className="text-black" />
                </button>

                <div className="flex-1 flex items-center justify-center px-20 py-4 relative" style={{ maxHeight: 'calc(100vh - 200px)' }}>
                  <img
                    key={currentImageIndex}
                    src={selectedGallery.images[currentImageIndex].url}
                    alt={selectedGallery.images[currentImageIndex].alt}
                    className="max-w-full max-h-full object-contain"
                  />
                  
                  {selectedGallery.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-full transition-all shadow-lg z-20"
                        aria-label="Предыдущее фото"
                      >
                        <Icon name="ChevronLeft" size={36} className="text-black" />
                      </button>
                      
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-full transition-all shadow-lg z-20"
                        aria-label="Следующее фото"
                      >
                        <Icon name="ChevronRight" size={36} className="text-black" />
                      </button>
                    </>
                  )}
                </div>

                <div className="bg-gray-900 border-t border-gray-800 flex-shrink-0 max-h-[200px]">
                  <div className="px-4 py-3">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-heading font-bold text-base text-white">
                        {selectedGallery.title}
                      </h3>
                      <span className="text-gray-300 text-sm font-medium">
                        {currentImageIndex + 1} / {selectedGallery.images.length}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 overflow-x-auto overflow-y-hidden px-4 pb-3 h-[88px]">
                    {selectedGallery.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`flex-shrink-0 w-20 h-20 rounded overflow-hidden border-2 transition-all ${
                          idx === currentImageIndex
                            ? "border-white ring-2 ring-white scale-105"
                            : "border-gray-600 opacity-60 hover:opacity-100 hover:border-gray-400"
                        }`}
                      >
                        <img
                          src={img.url}
                          alt={img.alt}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
};

export default PhotoGallerySection;