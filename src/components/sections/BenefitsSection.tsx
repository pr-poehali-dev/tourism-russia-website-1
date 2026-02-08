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
  const [selectedVideo, setSelectedVideo] = React.useState<{url: string; title: string} | null>(null);
  const videoScrollRef = React.useRef<HTMLDivElement>(null);

  const photosColumn1 = [
    "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/7c9e491b-a08c-4d61-abbd-5afbd1802624.jpg",
    "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/e3797cb5-bb89-4ab8-97f7-f0bfe6199054.JPEG",
    "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/481460fc-370f-4dbf-933c-a8553527c772.jpg",
    "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/79760431-d75c-4a5b-b555-436afd98c4ea.JPEG",
    "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/23a1758c-66b5-45ca-ac0f-085489fe9f4e.jpg",
    "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/97cc0080-f487-462d-ab61-0a2ebb3c2fd3.JPEG",
    "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/bf152e18-b0c5-4a72-b371-a1c0b9455717.jpg",
    "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/b10e4cc0-6e94-4eba-99f4-f98cd7dfda02.jpg",
  ];

  const photosColumn2 = [
    "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/89266a94-1049-43c7-82a7-8a473df1c1e9.jpg",
    "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/5fde691a-1135-483a-a14a-44511e5a18cc.jpg",
    "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/cccd6041-0758-4aec-b170-c36247177381.jpg",
    "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/287df3f4-300f-4c57-acd9-6a2b29fd3898.JPG",
    "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/6a3321a8-b43a-49ea-8ae6-2d45362d69f2.jpg",
    "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/2d94b074-129a-4768-a212-f3f837cd4b8d.jpg",
    "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/3780c0c5-e461-453e-9edb-8b7028545732.jpg",
    "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/24840e64-8fd5-4958-82d7-89be946ac156.jpg",
    "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/3e46be2c-ca28-4731-960a-4c39c903fbf6.JPG",
  ];

  const allPhotos = [...photosColumn1, ...photosColumn2];

  const handlePhotoClick = () => {
    if (selectedPhoto) {
      const currentIndex = allPhotos.indexOf(selectedPhoto);
      const nextIndex = (currentIndex + 1) % allPhotos.length;
      setSelectedPhoto(allPhotos[nextIndex]);
    }
  };

  const videos = [
    {
      url: "https://rutube.ru/play/embed/f2a3d83a234efbf818c43a1e8b938172",
      title: "Шавлинские озера 2025г",
      isEmbed: true,
      isRutube: true,
      thumbnail: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/files/143d941c-8b49-4089-8f4c-199409e54412.jpg"
    },
    {
      url: "https://rutube.ru/play/embed/0f69abb346ad8912ab6ee013bfcf6b37/?p=L2LFQNee7hMNJxWdP9ntEw",
      title: "Шавлинские озера 2022г",
      isEmbed: true,
      isRutube: true,
      thumbnail: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/files/a65103b5-7a63-4991-b221-01254067ef19.jpg"
    }
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
            <div className="relative h-[500px] md:h-auto overflow-hidden rounded-2xl bg-cyan-600 p-3">
              <div className="absolute inset-3 flex gap-3">
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
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Camera" size={32} className="text-cyan-600 flex-shrink-0" />
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-800">Фото</h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  Профессиональный фотоаппарат и дрон для съемки лучших моментов вашего путешествия
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Video" size={32} className="text-cyan-600 flex-shrink-0" />
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-800">Фильм - вы в главных ролях</h3>
                </div>
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
                  {videos.map((video, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-48 rounded-lg overflow-hidden bg-gray-200 cursor-pointer"
                      onClick={() => {
                        setSelectedVideo(video);
                      }}
                    >
                      <div className="relative h-36">
                        {video.isEmbed && video.thumbnail ? (
                          <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                        ) : video.isEmbed ? (
                          <div className="w-full h-full bg-gradient-to-br from-red-500 to-red-700 flex flex-col items-center justify-center gap-2">
                            <Icon name="Play" size={24} className="text-white/90" />
                            <span className="text-xs text-white/80 font-semibold">Rutube</span>
                          </div>
                        ) : (
                          <video
                            className="w-full h-full object-cover"
                            loop
                            muted
                            playsInline
                            autoPlay
                          >
                            <source src={video.url} type="video/mp4" />
                          </video>
                        )}
                        <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors flex items-center justify-center">
                          <Icon name="Play" size={32} className="text-white" />
                        </div>
                      </div>
                      <div className="p-2 bg-white">
                        <p className="text-xs font-semibold text-gray-800 text-center">{video.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={selectedPhoto !== null} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-6xl max-h-[95vh] p-0 bg-transparent border-none shadow-none flex items-center justify-center">
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg"
            aria-label="Закрыть"
          >
            <Icon name="X" size={24} className="text-gray-800" />
          </button>
          {selectedPhoto && (
            <img
              src={selectedPhoto}
              alt="Полноэкранное фото"
              className="max-w-full max-h-[95vh] object-contain rounded-lg cursor-pointer"
              onClick={handlePhotoClick}
            />
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={selectedVideo !== null} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-5xl max-h-[95vh] p-2">
          <DialogHeader>
            <DialogTitle className="text-xl font-heading">
              {selectedVideo?.title}
            </DialogTitle>
          </DialogHeader>
          {selectedVideo && (
            <div className="mt-4">
              {selectedVideo.isEmbed ? (
                <iframe
                  src={selectedVideo.url}
                  width="100%"
                  height="500"
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture; clipboard-write;"
                  frameBorder="0"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              ) : (
                <video
                  className="w-full rounded-lg"
                  controls
                  autoPlay
                >
                  <source src={selectedVideo.url} type="video/mp4" />
                </video>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BenefitsSection;