import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import SuccessDialog from "@/components/booking/SuccessDialog";
import InputMask from "react-input-mask";

interface Guide {
  name: string;
  experience: string;
  specialization: string;
  tours: string;
  rating: number;
  image: string;
  achievements: string[];
  phone: string;
  certificates?: string[];
  photos?: string[];
  expeditions?: string;
}

const GuidesSection = () => {
  const [selectedGuide, setSelectedGuide] = React.useState<number | null>(null);
  const [showContactForm, setShowContactForm] = React.useState(false);
  const [contactGuideIndex, setContactGuideIndex] = React.useState<number | null>(null);
  const [selectedCertificate, setSelectedCertificate] = React.useState<string | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = React.useState<{[key: number]: number}>({0: 0, 1: 0});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [formData, setFormData] = React.useState({
    clientName: '',
    clientPhone: '',
    preferredTime: '',
    comment: ''
  });

  const handleContactClick = (index: number) => {
    setContactGuideIndex(index);
    setShowContactForm(true);
    setFormData({ clientName: '', clientPhone: '', preferredTime: '', comment: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (contactGuideIndex === null) return;

    setIsSubmitting(true);
    const guide = guides[contactGuideIndex];

    try {
      const response = await fetch('https://functions.poehali.dev/8182ae3f-befc-4f6f-b59a-12a2a2b88b6c', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          guideName: guide.name,
          guidePhone: guide.phone,
          ...formData
        })
      });

      if (response.ok) {
        console.log('✅ Форма обратного звонка отправлена');
        if (typeof window !== 'undefined' && (window as any).ym) {
          console.log('✅ Отправка цели в Метрику: callback_submit');
          (window as any).ym(106027453, 'reachGoal', 'callback_submit');
        } else {
          console.warn('⚠️ Яндекс.Метрика не загружена при отправке формы обратного звонка');
        }
        
        setShowContactForm(false);
        setFormData({ clientName: '', clientPhone: '', preferredTime: '', comment: '' });
        setShowSuccess(true);
      } else {
        alert('Произошла ошибка. Попробуйте позже или позвоните напрямую.');
      }
    } catch (error) {
      alert('Произошла ошибка. Попробуйте позже или позвоните напрямую.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const guides: Guide[] = [
    {
      name: "Антон",
      experience: "более 8 лет",
      specialization: "Основатель проекта \"Жизнь с рюкзаком\", организатор туров, гид",
      tours: "более 150",
      rating: 5.0,
      image: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/7ba1b441-2c55-4e90-910f-74d8ba83d4da.jpg",
      phone: "+7 996 083-71-57",
      expeditions: "Экспедиции на Алтай, Байкал, Кавказ, Иран, Приполярный Урал, Кольский полуостров",
      achievements: [
        "Опыт работы более 8 лет",
        "Проведено туров более 150",
        "Восхождение на г. Эльбрус 2017 и 2023 годы",
        "Восхождение на г. Демавенд",
        "Восхождением на г. Пабаку в 2023 и 2024 годах",
        "Восхождение на г. Базардюзю в 2020 году",
        "Организация и проведение походов на Камчатке, Приполярном Урале, зимнем Байкале, Алтае, зимнем Урале, Магадане в 2017-2025 годах",
        "Организация и проведение автотуров в Дагестане, Сочи, Кольском полуострове, Урале в 2020-2025 годах",
      ],
      certificates: [
        "https://cdn.poehali.dev/files/photo_2025-12-22_17-01-39.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_17-01-44.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_17-01-47.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_17-01-51.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_17-04-39.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_22-26-12.jpg",
      ],
    },
    {
      name: "Эмиль",
      experience: "более 10 лет",
      specialization: "1-й спортивный разряд (горный, лыжный, велотуризм). Алтай, Кавказ, Кольский, Киргизия, Казахстан, Эльбрус, Урал, Забайкалье, Саяны.",
      tours: "более 180",
      rating: 4.9,
      image: "https://cdn.poehali.dev/files/IMG_0934.jpg",
      phone: "+7 987 255-84-99",
      achievements: [
        "Алтай велопоход 3 к.с. (2012 г.)",
        "Кавказ велопоход 2 к.с. (2013 г.)",
        "Кольский полуостров, лыжный поход 3 к.с. (2015 г.)",
        "Киргизия, горный поход 2 к.с. (2016 г.)",
        "Казахстан, Сайрам, горный поход 3 к.с. (2017 г.)",
        "Восхождение на Эльбрус с Востока (2014 г.)",
        "Южный Урал, водный 2 к.с. (2017 г.)",
        "Забайкалье, лыжный поход 4 к.с. с первопрохождением (2019 г.)",
        "Западные Саяны, лыжный поход 4 к.с. с первопрохождениями (2020 г.)",
      ],
      certificates: [
        "https://cdn.poehali.dev/files/04 Удостоверение 3.jpg",
        "https://cdn.poehali.dev/files/Диплом 1.jpg",
        "https://cdn.poehali.dev/files/Диплом2.jpg",
        "https://cdn.poehali.dev/files/Диплом 3.jpg|rotate-right",
        "https://cdn.poehali.dev/files/Удостоверение 1.jpg",
        "https://cdn.poehali.dev/files/Удостоверение 2.jpg",
      ],
      photos: [
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
      ],
    },
  ];

  return (
    <>
      <section id="guides" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-8 max-w-6xl mx-auto">
            {guides.map((guide, index) => {
              const allPhotos = guide.photos && guide.photos.length > 0 ? [guide.image, ...guide.photos] : [guide.image];
              const currentIdx = currentPhotoIndex[index] || 0;
              
              return (
              <div key={index} className="flex flex-col md:flex-row gap-6">
                {/* Текстовый блок */}
                <div className="md:w-1/2 bg-cyan-600 rounded-3xl border border-cyan-500 shadow-lg p-6 md:p-8 flex flex-col">
                  <CardHeader className="text-center pb-4 p-0">
                    <CardTitle className="font-heading text-2xl md:text-3xl mb-2 text-white">{guide.name}</CardTitle>
                    <CardDescription className="text-sm md:text-base text-white/90">{guide.specialization}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 mt-4 flex-1 flex flex-col">
                    <div className="flex-1">
                      {index === 0 && (
                        <p className="leading-relaxed text-white text-base md:text-lg text-left space-y-4">
                          <span className="block">Антон — душа компании.</span>
                          <span className="block">Вечерние посиделки у костра с весёлыми и познавательными историями, дружеская атмосфера, юмор и позитив.</span>
                          <span className="block">Завтраки, обеды и ужины, приготовленные с Антоном, вы не забудете никогда.</span>
                          <span className="block">Крылатые выражения Антона запомнятся на всю жизнь, захочется возвращаться в его компанию снова и снова...</span>
                        </p>
                      )}
                      {index === 1 && (
                        <p className="leading-relaxed text-white text-base md:text-lg text-left space-y-4">
                          <span className="block">Эмиль — штатный психолог.</span>
                          <span className="block">Спокойствие, медитации, ранние восходы с авторскими чаями, душевные беседы обеспечены.</span>
                          <span className="block">Прагматичность и надёжность, обустройство быта, атмосферы в лагере и переходах, ощущение спокойствия гарантированы...</span>
                          <span className="block">Настоящий руководитель похода, подскажет и поможет в любой ситуации.</span>
                        </p>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-6">
                      <button
                        onClick={() => setSelectedGuide(index)}
                        className="inline-flex items-center justify-center bg-white text-cyan-600 border border-white font-bold text-xs md:text-sm px-4 py-2 rounded-full transition-all hover:scale-105 shadow-lg"
                      >
                        Достижения
                      </button>
                      <button
                        onClick={() => handleContactClick(index)}
                        className="relative inline-flex items-center justify-center bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 hover:from-orange-600 hover:via-orange-500 hover:to-orange-600 text-white font-bold text-xs md:text-sm px-4 py-2 rounded-full transition-all hover:scale-105 shadow-lg overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center gap-1">
                          <Icon name="MessageCircle" size={14} />
                          Связаться с {guide.name.split(' ')[0] === 'Эмиль' ? 'Эмилем' : guide.name.split(' ')[0] + 'ом'}
                        </span>
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent shine-effect"></span>
                      </button>
                    </div>
                  </CardContent>
                </div>

                {/* Блок с галереей */}
                <div className="md:w-1/2 bg-white/40 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 shadow-lg">
                  <div className="relative h-96 md:h-full overflow-hidden">
                    <img
                      src={allPhotos[currentIdx]}
                      alt={guide.name}
                      className="w-full h-full object-cover transition-opacity duration-300"
                    />
                    {allPhotos.length > 1 && (
                      <>
                        <button
                          onClick={() => setCurrentPhotoIndex(prev => ({...prev, [index]: (currentIdx - 1 + allPhotos.length) % allPhotos.length}))}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors shadow-lg"
                        >
                          <Icon name="ChevronLeft" size={20} className="text-gray-800" />
                        </button>
                        <button
                          onClick={() => setCurrentPhotoIndex(prev => ({...prev, [index]: (currentIdx + 1) % allPhotos.length}))}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors shadow-lg"
                        >
                          <Icon name="ChevronRight" size={20} className="text-gray-800" />
                        </button>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                          {allPhotos.map((_, photoIdx) => (
                            <button
                              key={photoIdx}
                              onClick={() => setCurrentPhotoIndex(prev => ({...prev, [index]: photoIdx}))}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                currentIdx === photoIdx ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      <Dialog open={selectedGuide !== null} onOpenChange={() => setSelectedGuide(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedGuide !== null && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={guides[selectedGuide].image}
                    alt={guides[selectedGuide].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                  />
                  <div>
                    <DialogTitle className="text-2xl font-heading">
                      {guides[selectedGuide].name}
                    </DialogTitle>
                    <DialogDescription className="text-base">
                      {guides[selectedGuide].expeditions || guides[selectedGuide].specialization}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Icon name="Award" size={20} className="text-primary" />
                    Спортивные достижения
                  </h3>
                  <ul className="space-y-2">
                    {guides[selectedGuide].achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {guides[selectedGuide].certificates && guides[selectedGuide].certificates!.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Icon name="FileCheck" size={20} className="text-primary" />
                      Сертификаты и документы
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {guides[selectedGuide].certificates!.map((certData, idx) => {
                        const [certUrl, rotation] = certData.split('|');
                        const rotationClass = rotation === 'rotate-right' ? 'rotate-90' : rotation === 'rotate-left' ? '-rotate-90' : '';
                        
                        return (
                          <button
                            key={idx}
                            onClick={() => setSelectedCertificate(certData)}
                            className="group relative aspect-[3/4] overflow-hidden rounded-lg border-2 border-muted hover:border-primary transition-all duration-300 hover:shadow-lg"
                          >
                            <img
                              src={certUrl}
                              alt={`Сертификат ${idx + 1}`}
                              className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${rotationClass}`}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                              <Icon name="ZoomIn" size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
                <button
                  onClick={() => handleContactClick(selectedGuide)}
                  className="relative w-full inline-flex items-center justify-center bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 hover:from-orange-600 hover:via-orange-500 hover:to-orange-600 text-white font-bold text-base px-6 py-3 rounded-full transition-all hover:scale-105 shadow-lg overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon name="MessageCircle" size={18} />
                    Связаться с гидом
                  </span>
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent shine-effect"></span>
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
        <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto w-[95vw] sm:w-full">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading">
              Обратный звонок
            </DialogTitle>
            <DialogDescription>
              {contactGuideIndex !== null && (
                <>
                  <span className="block">Связаться с гидом {guides[contactGuideIndex].name}</span>
                  <a href={`tel:${guides[contactGuideIndex].phone}`} className="block mt-2 text-primary font-semibold text-lg hover:underline">
                    {guides[contactGuideIndex].phone}
                  </a>
                </>
              )}
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-medium">Ваше имя</label>
              <Input 
                placeholder="Иван Иванов" 
                required 
                value={formData.clientName}
                onChange={(e) => setFormData({...formData, clientName: e.target.value})}
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Ваш телефон</label>
              <InputMask
                mask="+7 (999) 999-99-99"
                value={formData.clientPhone}
                onChange={(e) => setFormData({...formData, clientPhone: e.target.value})}
                disabled={isSubmitting}
              >
                {(inputProps: any) => (
                  <Input 
                    {...inputProps}
                    type="tel" 
                    placeholder="+7 (999) 123-45-67" 
                    required
                  />
                )}
              </InputMask>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Удобное время для звонка</label>
              <Input 
                type="text" 
                placeholder="Например: 10:00 - 18:00" 
                value={formData.preferredTime}
                onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Комментарий (необязательно)</label>
              <Textarea 
                placeholder="Расскажите о ваших пожеланиях..."
                className="min-h-[80px]"
                value={formData.comment}
                onChange={(e) => setFormData({...formData, comment: e.target.value})}
                disabled={isSubmitting}
              />
            </div>
            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              <Icon name="Phone" size={18} className="mr-2" />
              {isSubmitting ? 'Отправка...' : 'Заказать звонок'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={selectedCertificate !== null} onOpenChange={() => setSelectedCertificate(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          {selectedCertificate && (
            <div className="relative w-full h-full flex items-center justify-center bg-black/95 rounded-lg overflow-hidden">
              {(() => {
                const [certUrl, rotation] = selectedCertificate.split('|');
                const rotationClass = rotation === 'rotate-right' ? 'rotate-90' : rotation === 'rotate-left' ? '-rotate-90' : '';
                return (
                  <img
                    src={certUrl}
                    alt="Сертификат"
                    className={`max-w-full max-h-[85vh] object-contain ${rotationClass}`}
                  />
                );
              })()}
            </div>
          )}
        </DialogContent>
      </Dialog>

      <SuccessDialog open={showSuccess} onOpenChange={setShowSuccess} />
    </>
  );
};

export default GuidesSection;