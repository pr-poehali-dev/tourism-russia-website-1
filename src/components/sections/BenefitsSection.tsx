import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Benefit {
  icon: string;
  title: string;
  description: string;
  photos: string[];
}

const BenefitsSection = () => {
  const [selectedBenefit, setSelectedBenefit] = React.useState<number | null>(null);
  const [selectedPhoto, setSelectedPhoto] = React.useState<string | null>(null);

  const benefits: Benefit[] = [
    { 
      icon: "Camera", 
      title: "Фото на профессиональный фотоаппарат и дрон", 
      description: "Лучшие моменты вашего путешествия запечатлены профессиональным оборудованием на всем маршруте",
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
      title: "Фильм о походе - вы в главных ролях", 
      description: "Профессиональный видеоотчет о вашем приключении",
      photos: [
        "https://cdn.poehali.dev/files/IMG_20220516_165857_171.jpg",
        "https://cdn.poehali.dev/files/IMG_20220516_165906_582.jpg",
        "https://cdn.poehali.dev/files/IMG_20230318_112921.jpg",
      ]
    },
    { 
      icon: "Coffee", 
      title: "Душевные посиделки у костра с фирменными чаями", 
      description: "Атмосфера уюта и тепла после дня в походе",
      photos: [
        "https://cdn.poehali.dev/files/IMG_20220430_172036_251.jpg",
        "https://cdn.poehali.dev/files/IMG_20220501_072715_590.jpg",
        "https://cdn.poehali.dev/files/IMG_20220502_091531.jpg",
      ]
    },
    { 
      icon: "Users", 
      title: "Невыгоревшие гиды", 
      description: "Мы ходим по одному маршруту только 1 раз в году - каждый раз свежие эмоции и энергия",
      photos: [
        "https://cdn.poehali.dev/files/IMG_20231018_104134.jpg",
        "https://cdn.poehali.dev/files/IMG_0934.jpg",
        "https://cdn.poehali.dev/files/IMG_20220823_120648.jpg",
        "https://cdn.poehali.dev/files/IMG_20230414_125550_494.jpg",
      ]
    },
    { 
      icon: "Mountain", 
      title: "Дикий Байкал", 
      description: "Идем по маршрутам, где нет толпы - только вы и природа",
      photos: [
        "https://cdn.poehali.dev/files/IMG_20250922_121202.jpg",
        "https://cdn.poehali.dev/files/IMG_20250909_130301.jpg",
        "https://cdn.poehali.dev/files/IMG_20231105_155911.jpg",
        "https://cdn.poehali.dev/files/cp0yCYWD-lY.jpg",
        "https://cdn.poehali.dev/files/DSCF8036.jpg",
      ]
    },
    { 
      icon: "ShieldCheck", 
      title: "Опытные гиды с удостоверениями", 
      description: "Медицинская подготовка и официальные сертификаты - ваша безопасность в надежных руках",
      photos: [
        "https://cdn.poehali.dev/files/photo_2025-12-22_17-01-39.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_17-01-44.jpg",
        "https://cdn.poehali.dev/files/Диплом 1.jpg",
        "https://cdn.poehali.dev/files/Удостоверение 1.jpg",
      ]
    },
    { 
      icon: "Handshake", 
      title: "Без посредников, без переплат", 
      description: "Все общение напрямую с Антоном и Эмилем - от заявки до последнего дня похода",
      photos: [
        "https://cdn.poehali.dev/files/IMG_20231018_104134.jpg",
        "https://cdn.poehali.dev/files/IMG_0934.jpg",
      ]
    },
    { 
      icon: "Heart", 
      title: "Небольшие группы 8-16 человек", 
      description: "Уделяем внимание каждому участнику - никто не останется без поддержки",
      photos: [
        "https://cdn.poehali.dev/files/IMG_20220509_215659_999.jpg",
        "https://cdn.poehali.dev/files/IMG_20220904_151101_258.JPG",
        "https://cdn.poehali.dev/files/IMG_20220910_081817_752.jpg",
      ]
    },
  ];

  return (
    <>
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              То, что делает наши туры особенными
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group" 
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedBenefit(index)}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-start gap-3">
                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                      <Icon name={benefit.icon} size={28} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-green-600 transition-colors">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="mt-2 text-green-600 hover:text-green-700 hover:bg-green-50 p-0 h-auto"
                    >
                      <Icon name="Image" size={16} className="mr-1.5" />
                      Посмотреть фото
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={selectedBenefit !== null} onOpenChange={() => setSelectedBenefit(null)}>
        <DialogContent className="max-w-4xl w-[95vw] sm:w-full max-h-[90vh] overflow-y-auto">
          {selectedBenefit !== null && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name={benefits[selectedBenefit].icon} size={32} className="text-green-600" />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl font-heading">
                      {benefits[selectedBenefit].title}
                    </DialogTitle>
                    <DialogDescription className="text-base">
                      {benefits[selectedBenefit].description}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {benefits[selectedBenefit].photos.map((photo, idx) => (
                  <div 
                    key={idx} 
                    className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                    onClick={() => setSelectedPhoto(photo)}
                  >
                    <img 
                      src={photo} 
                      alt={`${benefits[selectedBenefit].title} ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <Icon name="ZoomIn" size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={selectedPhoto !== null} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-6xl w-[95vw] sm:w-full p-0 bg-black/95">
          <div className="relative w-full h-[80vh] flex items-center justify-center">
            {selectedPhoto && (
              <img 
                src={selectedPhoto} 
                alt="Полноразмерное фото"
                className="max-w-full max-h-full object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BenefitsSection;
