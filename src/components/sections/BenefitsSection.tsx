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
    { 
      icon: "Coffee", 
      title: "Посиделки у костра", 
      description: "Фирменные чаи от Эмиля, незабываемые истории от Антона",
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
        "https://cdn.poehali.dev/files/IMG_9242.jpg",
        "https://cdn.poehali.dev/files/IMG_3762.jpg",
        "https://cdn.poehali.dev/files/IMG_20220701_210006.jpg",
        "https://cdn.poehali.dev/files/IMG_20230326_132238.jpg",
        "https://cdn.poehali.dev/files/IMG_20240419_161027.jpg",
        "https://cdn.poehali.dev/files/DJI_20250922140843_0409_D.jpg",
        "https://cdn.poehali.dev/files/IMG_20230325_155449.jpg",
        "https://cdn.poehali.dev/files/IMG_20230413_202302.jpg",
        "https://cdn.poehali.dev/files/IMG_20231105_155800.jpg",
        "https://cdn.poehali.dev/files/IMG_20231105_155830.jpg",
        "https://cdn.poehali.dev/files/VID_20240412_131103 (1).jpg",
        "https://cdn.poehali.dev/files/IMG_20250915_162650.jpg",
        "https://cdn.poehali.dev/files/IMG_20250911_142811.jpg",
        "https://cdn.poehali.dev/files/IMG_20250911_125310.jpg",
        "https://cdn.poehali.dev/files/IMG_20250909_130302_1.jpg",
        "https://cdn.poehali.dev/files/IMG_20240130_152540.jpg",
        "https://cdn.poehali.dev/files/IMG_20240201_135313.jpg",
        "https://cdn.poehali.dev/files/IMG_20240201_142516.jpg",
        "https://cdn.poehali.dev/files/IMG_20240412_191123 (1).jpg",
        "https://cdn.poehali.dev/files/IMG_20240416_103211.jpg",
        "https://cdn.poehali.dev/files/IMG_20240416_170640.jpg",
        "https://cdn.poehali.dev/files/IMG_20240416_1032111.jpg",
        "https://cdn.poehali.dev/files/IMG_20240421_142018.jpg",
        "https://cdn.poehali.dev/files/IMG_20241008_104138.jpg",
        "https://cdn.poehali.dev/files/IMG_20250123_195413.jpg",
        "https://cdn.poehali.dev/files/IMG_20250124_165019.jpg",
        "https://cdn.poehali.dev/files/IMG_20250125_125503.jpg",
        "https://cdn.poehali.dev/files/IMG_20250201_165423.jpg",
        "https://cdn.poehali.dev/files/IMG_20250803_173530.jpg",
        "https://cdn.poehali.dev/files/IMG_20250808_114307.jpg",
        "https://cdn.poehali.dev/files/IMG_20250808_172458.jpg",
        "https://cdn.poehali.dev/files/IMG_20250810_132201.jpg",
        "https://cdn.poehali.dev/files/IMG_20250810_153222.jpg",
        "https://cdn.poehali.dev/files/IMG_20250813_103849.jpg",
        "https://cdn.poehali.dev/files/IMG_20250816_134200_1.jpg",
        "https://cdn.poehali.dev/files/IMG_20250817_114839.jpg",
        "https://cdn.poehali.dev/files/IMG_20250826_160925.jpg",
        "https://cdn.poehali.dev/files/IMG_20250829_233556.jpg",
        "https://cdn.poehali.dev/files/IMG_20250831_172401.jpg",
        "https://cdn.poehali.dev/files/IMG_20250902_120552.jpg",
        "https://cdn.poehali.dev/files/IMG_20250904_133145.jpg",
        "https://cdn.poehali.dev/files/IMG_20250908_124417.jpg",
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
      title: "Опытные гиды", 
      description: "Медицинская подготовка, удостоверения и сертификаты",
      photos: [],
      sections: [
        {
          title: "Документы Антона",
          photos: [
            "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/2539392a-801e-41c9-aad1-41756fe3fea3.jpg",
            "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/282ccf9d-6306-48b0-ac9f-7dfd870d4e1f.jpg",
            "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/947c2c6d-25e0-44ab-8494-e1f350fb04bd.jpg",
            "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/b3d6d30b-5e2e-4554-bc41-8cbc9cef1e99.jpg",
            "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/7a8ab521-ae4d-419c-8d00-1e7a6ea13521.jpg",
            "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/832bb06f-75c7-49ec-bda2-7de42398b47a.jpg",
            "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/b9b4ae47-fe11-4ef3-b759-70339cbcb591.jpg"
          ]
        },
        {
          title: "Документы Эмиля",
          photos: [
            "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/d27c6ccf-8695-4da2-9c1a-b289b256ce07.jpg",
            "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/b2b88638-ce09-4316-a7e7-47ccee71aa26.jpg",
            "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/17dfe64f-b5b2-42a6-bb2e-d49951024c76.jpg",
            "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/c8d9619e-2fca-4368-93d6-ea56a0d020dd.jpg",
            "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/34081a0a-b324-4492-ab64-abd2b772146c.jpg",
            "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/278c01a3-48e4-4035-8f6e-84ff90449db0.jpg",
            "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/d9c8bd99-7f64-480e-85fa-bbd8db685aef.jpg",
            "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/b8ea1d8b-11c2-49da-aa51-b6e926524085.jpg"
          ]
        }
      ]
    },
    { 
      icon: "Handshake", 
      title: "Без посредников", 
      description: "Все общение напрямую с Антоном и Эмилем - от заявки до последнего дня похода",
      photos: [
        "https://cdn.poehali.dev/files/IMG_20230414_125550_494.jpg",
        "https://cdn.poehali.dev/files/IMG_20250830_174455.jpg",
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