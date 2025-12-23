import React from "react";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

interface GalleryImage {
  url: string;
  alt: string;
}

interface Gallery {
  id: string;
  title: string;
  coverImage: string;
  images: GalleryImage[];
}

const PhotoGallerySection = () => {
  const [selectedGallery, setSelectedGallery] = React.useState<Gallery | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const galleries: Gallery[] = [
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
      ],
    },
  ];

  const openGallery = (gallery: Gallery) => {
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
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 md:mb-4">
              Фотогалерея
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Наши путешествия в фотографиях
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleries.map((gallery) => (
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
        <DialogContent className="max-w-6xl p-0 bg-black/95">
          {selectedGallery && (
            <div className="relative">
              <div className="relative aspect-video w-full">
                <img
                  src={selectedGallery.images[currentImageIndex].url}
                  alt={selectedGallery.images[currentImageIndex].alt}
                  className="w-full h-full object-contain"
                />
                
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-colors"
                  aria-label="Предыдущее фото"
                >
                  <Icon name="ChevronLeft" size={24} className="text-white" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-colors"
                  aria-label="Следующее фото"
                >
                  <Icon name="ChevronRight" size={24} className="text-white" />
                </button>
              </div>

              <div className="p-4 bg-black/50 backdrop-blur">
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  {selectedGallery.title}
                </h3>
                <div className="flex items-center justify-between text-white/60 text-sm">
                  <span>{selectedGallery.images[currentImageIndex].alt}</span>
                  <span>
                    {currentImageIndex + 1} / {selectedGallery.images.length}
                  </span>
                </div>
              </div>

              <div className="flex gap-2 overflow-x-auto p-4 bg-black/50">
                {selectedGallery.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === currentImageIndex
                        ? "border-primary scale-105"
                        : "border-transparent opacity-60 hover:opacity-100"
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
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PhotoGallerySection;