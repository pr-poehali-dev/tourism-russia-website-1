import React from "react";
import { Button } from "@/components/ui/button";
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
  role: string;
  description: string;
  image: string;
  detailImage: string;
  phone: string;
  achievements: string[];
  certificates?: string[];
}

const GuidesSection = () => {
  const [selectedGuide, setSelectedGuide] = React.useState<number | null>(null);
  const [showContactForm, setShowContactForm] = React.useState(false);
  const [contactGuideIndex, setContactGuideIndex] = React.useState<number | null>(null);
  const [selectedCertificate, setSelectedCertificate] = React.useState<string | null>(null);
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
      name: "АНТОН НЕМЧИНОВ",
      role: "ГИД И ОСНОВАТЕЛЬ ПРОЕКТА «ЖИЗНЬ С РЮКЗАКОМ»",
      description: "Жизнь с рюкзаком — это мой проект, в котором я собираю тех, кто не боится сойти с маршрута. Я веду людей вглубь природы и одновременно вглубь себя. Здесь нет расписания, Wi-Fi и фасадов, но есть горы, туманы, реки, ветер и молчание. Жизнь с рюкзаком это опыт, после которого ты возвращаешься другим. Более настоящим, более свободным, более живым!",
      image: "https://cdn.poehali.dev/files/IMG_20231018_104134.jpg",
      detailImage: "https://cdn.poehali.dev/files/IMG_20250922_121202.jpg",
      phone: "+7 996 083-71-57",
      achievements: [
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
      name: "ЭМИЛЬ ГАЗИЗОВ",
      role: "ГИД И СО-ОСНОВАТЕЛЬ ПРОЕКТА «ЖИЗНЬ С РЮКЗАКОМ»",
      description: "Я прошёл более 180 походов и экспедиций по России и миру. Имею 1-й спортивный разряд по горному, лыжному и велотуризму. Каждый мой маршрут — это не просто поход, а возможность почувствовать себя частью природы, преодолеть себя и найти новые грани своих возможностей.",
      image: "https://cdn.poehali.dev/files/IMG_0934.jpg",
      detailImage: "https://cdn.poehali.dev/files/IMG_9242.jpg",
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
    },
  ];

  return (
    <>
      <section id="guides" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-16">
            {guides.map((guide, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0 overflow-hidden`}
              >
                {/* Текстовая часть */}
                <div className={`flex-1 bg-gradient-to-br ${index % 2 === 0 ? 'from-teal-600 to-teal-700' : 'from-emerald-600 to-emerald-700'} p-8 md:p-12 lg:p-16 text-white flex flex-col justify-center`}>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-wide">
                    {guide.name}
                  </h2>
                  <div className="w-20 h-1 bg-white/40 mb-6"></div>
                  <p className="text-sm md:text-base text-white/90 mb-6 uppercase tracking-wider">
                    {guide.role}
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-8">
                    {guide.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      onClick={() => setSelectedGuide(index)}
                      className="bg-white text-teal-700 hover:bg-white/90 font-semibold"
                    >
                      Подробнее
                    </Button>
                    <Button
                      onClick={() => handleContactClick(index)}
                      variant="outline"
                      className="border-white text-white hover:bg-white/10"
                    >
                      <Icon name="Phone" size={18} className="mr-2" />
                      Связаться
                    </Button>
                  </div>
                </div>

                {/* Фото часть */}
                <div className="flex-1 relative overflow-hidden h-96 lg:h-auto">
                  <img 
                    src={guide.detailImage} 
                    alt={guide.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Модальное окно с достижениями */}
      <Dialog open={selectedGuide !== null} onOpenChange={() => setSelectedGuide(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedGuide !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-heading">{guides[selectedGuide].name}</DialogTitle>
                <DialogDescription className="text-base">
                  {guides[selectedGuide].role}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Достижения</h3>
                  <ul className="space-y-2">
                    {guides[selectedGuide].achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {guides[selectedGuide].certificates && guides[selectedGuide].certificates!.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Сертификаты</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {guides[selectedGuide].certificates!.map((cert, idx) => {
                        const [url, rotation] = cert.split('|');
                        return (
                          <div
                            key={idx}
                            className="relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer group"
                            onClick={() => setSelectedCertificate(cert)}
                          >
                            <img
                              src={url}
                              alt={`Сертификат ${idx + 1}`}
                              className={`w-full h-full object-cover transition-transform group-hover:scale-110 ${rotation === 'rotate-right' ? 'rotate-90' : ''}`}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                              <Icon name="ZoomIn" size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                <Button
                  onClick={() => handleContactClick(selectedGuide)}
                  className="w-full"
                >
                  <Icon name="Phone" size={18} className="mr-2" />
                  Связаться с гидом
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Модальное окно просмотра сертификата */}
      <Dialog open={selectedCertificate !== null} onOpenChange={() => setSelectedCertificate(null)}>
        <DialogContent className="max-w-4xl max-h-[95vh] p-2">
          {selectedCertificate && (
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={selectedCertificate.split('|')[0]}
                alt="Сертификат"
                className={`max-w-full max-h-[90vh] object-contain ${selectedCertificate.includes('rotate-right') ? 'rotate-90' : ''}`}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Форма обратного звонка */}
      <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Заказать обратный звонок</DialogTitle>
            <DialogDescription>
              {contactGuideIndex !== null && `Гид: ${guides[contactGuideIndex].name}`}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Ваше имя</label>
              <Input
                required
                value={formData.clientName}
                onChange={(e) => setFormData({...formData, clientName: e.target.value})}
                placeholder="Введите ваше имя"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Телефон</label>
              <InputMask
                mask="+7 (999) 999-99-99"
                value={formData.clientPhone}
                onChange={(e) => setFormData({...formData, clientPhone: e.target.value})}
              >
                {/* @ts-ignore */}
                {(inputProps) => (
                  <Input
                    {...inputProps}
                    required
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                  />
                )}
              </InputMask>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Удобное время для звонка</label>
              <Input
                value={formData.preferredTime}
                onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                placeholder="Например: с 10:00 до 18:00"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Комментарий (необязательно)</label>
              <Textarea
                value={formData.comment}
                onChange={(e) => setFormData({...formData, comment: e.target.value})}
                placeholder="Дополнительная информация"
                rows={3}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <SuccessDialog open={showSuccess} onOpenChange={setShowSuccess} />
    </>
  );
};

export default GuidesSection;
