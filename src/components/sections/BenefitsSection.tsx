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
  const [selectedBenefit, setSelectedBenefit] = React.useState<number | null>(null);
  const [selectedPhoto, setSelectedPhoto] = React.useState<string | null>(null);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  const benefits: Benefit[] = [
    { 
      icon: "Camera", 
      title: "Фото", 
      description: "Профессиональный фотоаппарат и дрон для лучших моментов",
      photos: [
        "https://cdn.poehali.dev/files/_DSC5718.JPEG",
        "https://cdn.poehali.dev/files/_DSC5996.JPEG",
        "https://cdn.poehali.dev/files/_DSC6150.JPEG",
        "https://cdn.poehali.dev/files/_DSC6264.JPEG",
        "https://cdn.poehali.dev/files/DJI_20250922140843_0409_D.jpg",
      ]
    },
    { 
      icon: "Film", 
      title: "Фильм - вы главные герои", 
      description: "Дарим готовый фильм о ваших приключениях после каждого похода",
      photos: [
        "https://cdn.poehali.dev/files/IMG_20220516_165857_171.jpg",
        "https://cdn.poehali.dev/files/IMG_20220516_165906_582.jpg",
        "https://cdn.poehali.dev/files/IMG_20230318_112921.jpg",
      ]
    },
  ];

  return (
    <>
      <section id="about" className="pt-8 pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 md:mb-20 text-gray-800">
            Особенности путешествий с нами
          </h2>
          
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
            <div 
              className="flex gap-4 pl-4 pr-4 pb-4"
              style={{ width: 'max-content' }}
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-cyan-600 rounded-2xl p-5 flex flex-col items-start shadow-lg"
                  style={{ minWidth: '320px', maxWidth: '320px', height: '160px' }}
                >
                  <h3 className="text-lg font-heading font-bold mb-2 text-white leading-tight">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-white/90 mb-3 flex-1 text-xs leading-snug overflow-hidden">
                    {benefit.description}
                  </p>
                  
                  <Button
                    onClick={() => setSelectedBenefit(index)}
                    className="bg-white text-cyan-600 hover:bg-white hover:text-cyan-600 font-semibold text-xs px-4 py-1.5 h-auto rounded-md"
                  >
                    Подробнее
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Dialog open={selectedBenefit !== null} onOpenChange={() => setSelectedBenefit(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading">
              {selectedBenefit !== null && benefits[selectedBenefit].title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedBenefit !== null && (
            <div className="mt-4">
              {benefits[selectedBenefit].sections ? (
                benefits[selectedBenefit].sections!.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="mb-8">
                    <h3 className="text-xl font-heading font-bold mb-4">{section.title}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {section.photos.map((photo, photoIndex) => (
                        <div
                          key={photoIndex}
                          className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={() => setSelectedPhoto(photo)}
                        >
                          <img
                            src={photo}
                            alt={`${section.title} ${photoIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {benefits[selectedBenefit].photos.map((photo, photoIndex) => (
                    <div
                      key={photoIndex}
                      className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => setSelectedPhoto(photo)}
                    >
                      <img
                        src={photo}
                        alt={`${benefits[selectedBenefit].title} ${photoIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

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