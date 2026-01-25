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
        "https://cdn.poehali.dev/files/IMG_20250922_121202.jpg",
        "https://cdn.poehali.dev/files/IMG_20250909_130301.jpg",
        "https://cdn.poehali.dev/files/IMG_20231105_155911.jpg",
        "https://cdn.poehali.dev/files/IMG_20230414_125550_494.jpg",
        "https://cdn.poehali.dev/files/IMG_20250830_174455.jpg",
        "https://cdn.poehali.dev/files/_DSC5718.JPEG",
        "https://cdn.poehali.dev/files/_DSC5996.JPEG",
        "https://cdn.poehali.dev/files/_DSC6150.JPEG",
        "https://cdn.poehali.dev/files/_DSC6264.JPEG",
        "https://cdn.poehali.dev/files/cp0yCYWD-lY.jpg",
        "https://cdn.poehali.dev/files/DSCF8036.jpg",
        "https://cdn.poehali.dev/files/DSCF8329.jpg",
        "https://cdn.poehali.dev/files/IaeE_y74cms.jpg",
        "https://cdn.poehali.dev/files/IMG_20220430_172036_251.jpg",
        "https://cdn.poehali.dev/files/IMG_20220501_072715_590.jpg",
        "https://cdn.poehali.dev/files/IMG_20220502_091531.jpg",
        "https://cdn.poehali.dev/files/IMG_20220509_215659_999.jpg",
        "https://cdn.poehali.dev/files/IMG_20220516_165857_171.jpg",
        "https://cdn.poehali.dev/files/IMG_20220516_165906_582.jpg",
        "https://cdn.poehali.dev/files/IMG_20220823_120648.jpg",
        "https://cdn.poehali.dev/files/IMG_20220904_151101_258.JPG",
        "https://cdn.poehali.dev/files/IMG_20220910_081817_752.jpg",
        "https://cdn.poehali.dev/files/IMG_20220916_133645.jpg",
        "https://cdn.poehali.dev/files/IMG_20220930_163804.jpg",
        "https://cdn.poehali.dev/files/IMG_20230318_112921.jpg",
        "https://cdn.poehali.dev/files/IMG_20230418_200151.jpg",
        "https://cdn.poehali.dev/files/IMG_20230518_104600.jpg",
        "https://cdn.poehali.dev/files/IMG_20231223_151421_172.jpg",
        "https://cdn.poehali.dev/files/IMG_20240208_231008.jpg",
        "https://cdn.poehali.dev/files/IMG_20240316_125230_718.jpg",
        "https://cdn.poehali.dev/files/IMG_20250911_190741.jpg",
        "https://cdn.poehali.dev/files/IMG-20221126-WA0002.jpg",
        "https://cdn.poehali.dev/files/sLNSeBQJxvQ.jpg",
        "https://cdn.poehali.dev/files/yFtt6xe1Hdk.jpg",
        "https://cdn.poehali.dev/files/YGFZHrJdWeU.jpg",
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
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer group overflow-hidden" 
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedBenefit(index)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={benefit.photos[0]} 
                    alt={benefit.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center mb-2">
                      <Icon name={benefit.icon} size={20} className="text-green-600" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-base mb-1 group-hover:text-green-600 transition-colors line-clamp-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{benefit.description}</p>
                    <div className="flex items-center gap-1 text-green-600 text-sm mt-1">
                      <Icon name="Image" size={14} />
                      <span>{benefit.photos.length} фото</span>
                    </div>
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