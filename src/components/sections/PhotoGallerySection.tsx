import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
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
      coverImage: "https://cdn.poehali.dev/files/IMG_5107.jpg",
      images: [],
    },
    {
      id: "altai-belukha",
      title: "Поход к горе Белухе",
      coverImage: "https://cdn.poehali.dev/files/ozz-q6fkgwprn4f2igi58odrec2ov3kk0uj0u7w4k4es9c.jpg",
      images: [],
    },
    {
      id: "kamchatka",
      title: "Камчатка — три вулкана",
      coverImage: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/files/f69f3837-399c-401e-9bbc-11624839b9e9.jpg",
      images: [],
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

      <Dialog open={selectedGallery !== null} onOpenChange={closeGallery}>
        <DialogContent className="max-w-[95vw] w-[95vw] max-h-[95vh] p-0 bg-black [&>button]:hidden overflow-hidden">
          {selectedGallery && selectedGallery.images.length > 0 && (
            <div className="flex flex-col h-full">
              <VisuallyHidden>
                <DialogTitle>{selectedGallery.title}</DialogTitle>
              </VisuallyHidden>
              
              <button
                onClick={closeGallery}
                className="absolute top-3 right-3 z-50 bg-white hover:bg-gray-100 p-2 rounded-full transition-all shadow-lg"
                aria-label="Закрыть галерею"
              >
                <Icon name="X" size={24} className="text-black" />
              </button>

              <div className="relative flex-1 flex items-center justify-center bg-black min-h-0">
                <img
                  key={currentImageIndex}
                  src={selectedGallery.images[currentImageIndex].url}
                  alt={selectedGallery.images[currentImageIndex].alt}
                  className="max-w-full max-h-full w-auto h-auto object-contain"
                />
                
                {selectedGallery.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-full transition-all shadow-lg z-20"
                      aria-label="Предыдущее фото"
                    >
                      <Icon name="ChevronLeft" size={32} className="text-black" />
                    </button>
                    
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-full transition-all shadow-lg z-20"
                      aria-label="Следующее фото"
                    >
                      <Icon name="ChevronRight" size={32} className="text-black" />
                    </button>
                  </>
                )}
              </div>

              <div className="bg-gray-900 border-t border-gray-800">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-heading font-bold text-lg text-white">
                      {selectedGallery.title}
                    </h3>
                    <span className="text-gray-300 text-sm font-medium">
                      {currentImageIndex + 1} / {selectedGallery.images.length}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 overflow-x-auto px-4 pb-4 scrollbar-hide">
                  {selectedGallery.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all ${
                        idx === currentImageIndex
                          ? "border-white ring-2 ring-white"
                          : "border-gray-700 opacity-50 hover:opacity-100"
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
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PhotoGallerySection;