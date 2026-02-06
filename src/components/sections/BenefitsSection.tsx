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

  const photos = [
    "https://cdn.poehali.dev/files/_DSC5718.JPEG",
    "https://cdn.poehali.dev/files/_DSC5996.JPEG",
    "https://cdn.poehali.dev/files/_DSC6150.JPEG",
    "https://cdn.poehali.dev/files/_DSC6264.JPEG",
    "https://cdn.poehali.dev/files/DJI_20250922140843_0409_D.jpg",
    "https://cdn.poehali.dev/files/IMG_20220516_165857_171.jpg",
    "https://cdn.poehali.dev/files/IMG_20220516_165906_582.jpg",
    "https://cdn.poehali.dev/files/IMG_20230318_112921.jpg",
  ];

  return (
    <>
      <section id="about" className="pt-8 pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 md:mb-16 text-gray-800">
            Особенности путешествий с нами
          </h2>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col justify-center space-y-6 bg-white p-8 rounded-2xl shadow-lg">
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-gray-800">
                  Фото и видео-контент
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Профессиональный фотоаппарат и дрон для съемки лучших моментов вашего путешествия
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-gray-800">
                  Фильм о вашем приключении
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Дарим готовый фильм о ваших приключениях после каждого похода - вы главные герои
                </p>
              </div>

              <div className="pt-4">
                <Button
                  className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3"
                  onClick={() => document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Выбрать тур
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 md:gap-3">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className={`rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity ${
                    index === 0 ? 'col-span-2 row-span-2' : ''
                  }`}
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <img
                    src={photo}
                    alt={`Фото путешествия ${index + 1}`}
                    className="w-full h-full object-cover"
                    style={{ 
                      height: index === 0 ? '400px' : '196px'
                    }}
                  />
                </div>
              ))}
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