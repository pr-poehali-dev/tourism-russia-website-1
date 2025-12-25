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

interface Guide {
  name: string;
  experience: string;
  specialization: string;
  tours: number;
  rating: number;
  image: string;
  achievements: string[];
  phone: string;
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
    
    // Отправка цели в Яндекс.Метрику
    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(106027453, 'reachGoal', 'contact_guide_click');
    }
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
      name: "Антон Немчинов",
      experience: "15 лет",
      specialization: "Экспедиции на Алтай, Байкал, Кавказ, Иран, Приполярный Урал, Кольский полуостров",
      tours: 200,
      rating: 5.0,
      image: "https://cdn.poehali.dev/files/IMG_20231018_104134.jpg",
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
        "https://cdn.poehali.dev/files/04 Удостоверение 3.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_17-01-39.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_17-01-44.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_17-01-47.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_17-01-51.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_17-04-39.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_22-26-12.jpg",
      ],
    },
    {
      name: "Эмиль Газизов",
      experience: "14 лет",
      specialization: "1-й спортивный разряд (горный, лыжный, велотуризм). Алтай, Кавказ, Кольский, Киргизия, Казахстан, Эльбрус, Урал, Забайкалье, Саяны.",
      tours: 180,
      rating: 4.9,
      image: "https://cdn.poehali.dev/files/IMG_9242.jpg",
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
        "https://cdn.poehali.dev/files/04 Удостоверение 2.jpg",
        "https://cdn.poehali.dev/files/04 Удостоверение 3.jpg",
        "https://cdn.poehali.dev/files/04 Удостоверение 1.jpg",
        "https://cdn.poehali.dev/files/01 Удостоверение 1.jpg",
        "https://cdn.poehali.dev/files/01 Удостоверение 2.jpg",
        "https://cdn.poehali.dev/files/01.jpg|rotate-left",
        "https://cdn.poehali.dev/files/02.jpg",
        "https://cdn.poehali.dev/files/03.jpg|rotate-right",
      ],
    },
  ];

  return (
    <>
      <section id="guides" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 md:mb-4">С кем вы пойдёте в поход или тур</h2>
            <p className="text-base md:text-lg text-muted-foreground">Профессионалы с многолетним опытом</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {guides.map((guide, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="text-center pb-3">
                  <CardTitle className="font-heading text-xl md:text-2xl">{guide.name}</CardTitle>
                  <CardDescription className="text-xs md:text-sm">{guide.specialization}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between py-2 text-sm border-b">
                    <span className="text-muted-foreground text-xs">Опыт работы</span>
                    <span className="font-semibold text-sm">{guide.experience}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 text-sm">
                    <span className="text-muted-foreground text-xs">Проведено туров</span>
                    <span className="font-semibold text-sm">{guide.tours}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                    <Button variant="outline" size="sm" onClick={() => setSelectedGuide(index)} className="text-xs md:text-sm">
                      <Icon name="FileText" size={14} className="mr-1" />
                      Достижения
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={() => handleContactClick(index)} 
                      className="text-xs md:text-sm bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-all duration-300"
                    >
                      <Icon name="MessageCircle" size={14} className="mr-1" />
                      Связаться с {guide.name.split(' ')[0]}ом
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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
                      {guides[selectedGuide].specialization}
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
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{guides[selectedGuide].experience}</div>
                    <div className="text-xs text-muted-foreground">Опыт работы</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{guides[selectedGuide].tours}</div>
                    <div className="text-xs text-muted-foreground">Проведено туров</div>
                  </div>
                </div>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-all duration-300" 
                  size="lg" 
                  onClick={() => handleContactClick(selectedGuide)}
                >
                  <Icon name="MessageCircle" size={18} className="mr-2" />
                  Связаться с гидом
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
        <DialogContent className="max-w-md">
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
              <Input 
                type="tel" 
                placeholder="+7 (999) 123-45-67" 
                required 
                value={formData.clientPhone}
                onChange={(e) => setFormData({...formData, clientPhone: e.target.value})}
                disabled={isSubmitting}
              />
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