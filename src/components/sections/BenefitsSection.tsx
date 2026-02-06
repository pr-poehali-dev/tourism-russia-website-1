import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Benefit {
  icon: string;
  title: string;
  description: string;
  photos: string[];
  sections?: { title: string; photos: string[] }[];
}

const BenefitsSection = () => {
  const [selectedPhoto, setSelectedPhoto] = React.useState<string | null>(null);
  const videoScrollRef = React.useRef<HTMLDivElement>(null);

  const photosColumn1 = [
    "https://cdn.poehali.dev/files/_DSC5718.JPEG",
    "https://cdn.poehali.dev/files/_DSC6150.JPEG",
    "https://cdn.poehali.dev/files/DJI_20250922140843_0409_D.jpg",
    "https://cdn.poehali.dev/files/IMG_20220516_165906_582.jpg",
  ];

  const photosColumn2 = [
    "https://cdn.poehali.dev/files/_DSC5996.JPEG",
    "https://cdn.poehali.dev/files/_DSC6264.JPEG",
    "https://cdn.poehali.dev/files/IMG_20220516_165857_171.jpg",
    "https://cdn.poehali.dev/files/IMG_20230318_112921.jpg",
  ];

  const scrollVideos = (direction: 'left' | 'right') => {
    if (videoScrollRef.current) {
      const scrollAmount = 200;
      videoScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <style>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        
        @keyframes scrollDown {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
        
        .animate-scroll-up {
          animation: scrollUp 20s linear infinite;
        }
        
        .animate-scroll-down {
          animation: scrollDown 20s linear infinite;
        }
      `}</style>

      <section id="about" className="pt-8 pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 md:mb-16 text-gray-800">
            Особенности путешествий с нами
          </h2>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:items-stretch">
            <div className="relative h-[500px] md:h-auto overflow-hidden rounded-2xl bg-cyan-600">
              <div className="absolute inset-0 flex gap-3">
                <div className="flex-1 overflow-hidden">
                  <div className="animate-scroll-up">
                    {[...photosColumn1, ...photosColumn1].map((photo, index) => (
                      <div
                        key={index}
                        className="mb-3 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => setSelectedPhoto(photo)}
                      >
                        <img
                          src={photo}
                          alt={`Фото путешествия ${index + 1}`}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1 overflow-hidden">
                  <div className="animate-scroll-down">
                    {[...photosColumn2, ...photosColumn2].map((photo, index) => (
                      <div
                        key={index}
                        className="mb-3 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => setSelectedPhoto(photo)}
                      >
                        <img
                          src={photo}
                          alt={`Фото путешествия ${index + 1}`}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-6 bg-white p-8 rounded-2xl shadow-lg min-h-[500px]">
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-gray-800">Фото</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Профессиональный фотоаппарат и дрон для съемки лучших моментов вашего путешествия
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-gray-800">Фильм - вы в главных ролях</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Дарим готовый фильм о ваших приключениях после каждого похода - вы главные герои
                </p>
              </div>

              <div className="pt-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-heading font-bold text-gray-800">
                    Примеры фильмов
                  </h4>
                  <div className="flex gap-2">
                    <button
                      onClick={() => scrollVideos('left')}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                      aria-label="Прокрутить влево"
                    >
                      <Icon name="ChevronLeft" size={20} className="text-gray-700" />
                    </button>
                    <button
                      onClick={() => scrollVideos('right')}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                      aria-label="Прокрутить вправо"
                    >
                      <Icon name="ChevronRight" size={20} className="text-gray-700" />
                    </button>
                  </div>
                </div>
                <div ref={videoScrollRef} className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  {[
                    "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/7bb12129-0af0-4993-8e0c-c6c7b61a542e.MOV"
                  ].map((video, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-48 h-36 rounded-lg overflow-hidden bg-gray-200"
                    >
                      <video
                        className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        loop
                        muted
                        playsInline
                        controls
                      >
                        <source src={video} type="video/mp4" />
                      </video>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={selectedPhoto !== null} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-6xl max-h-[95vh] p-2">
          {selectedPhoto && (
            <img
              src={selectedPhoto}
              alt="Полноэкранное фото"
              className="w-full h-full object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BenefitsSection;