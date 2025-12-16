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

interface Guide {
  name: string;
  experience: string;
  specialization: string;
  tours: number;
  rating: number;
  image: string;
  achievements: string[];
  phone: string;
}

const GuidesSection = () => {
  const [selectedGuide, setSelectedGuide] = React.useState<number | null>(null);
  const [showContactForm, setShowContactForm] = React.useState(false);
  const [contactGuideIndex, setContactGuideIndex] = React.useState<number | null>(null);

  const handleContactClick = (index: number) => {
    setContactGuideIndex(index);
    setShowContactForm(true);
  };

  const guides: Guide[] = [
    {
      name: "Антон Немчинов",
      experience: "15 лет",
      specialization: "Горные экспедиции, Алтай, Байкал",
      tours: 200,
      rating: 5.0,
      image: "https://cdn.poehali.dev/files/IMG_20231018_104134.jpg",
      phone: "+7 965 561-51-53",
      achievements: [
        "Восхождение на г. Эльбрус 2017 и 2023 годы",
        "Восхождение на г. Демавенд",
        "Восхождением на г. Пабаку в 2023 и 2024 годах",
        "Восхождение на г. Базардюзю в 2020 году",
        "Организация и проведение походов на Камчатке, Приполярном Урале, зимнем Байкале, Алтае, зимнем Урале, Магадане в 2017-2025 годах",
        "Организация и проведение автотуров в Дагестане, Сочи, Кольском полуострове, Урале в 2020-2025 годах",
      ],
    },
    {
      name: "Эмиль Газизов",
      experience: "14 лет",
      specialization: "1-й спортивный разряд (горный, лыжный, велотуризм). Алтай, Кавказ, Кольский, Киргизия, Казахстан, Эльбрус, Урал, Забайкалье, Саяны.",
      tours: 180,
      rating: 4.9,
      image: "https://cdn.poehali.dev/files/IMG_9242.jpg",
      phone: "+7 965 561-51-53",
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
    },
  ];

  return (
    <>
      <section id="guides" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">С кем вы пойдёте в поход или тур</h2>
            <p className="text-lg text-muted-foreground">Профессионалы с многолетним опытом</p>
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
                  <CardTitle className="font-heading text-2xl">{guide.name}</CardTitle>
                  <CardDescription className="text-sm">{guide.specialization}</CardDescription>
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
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <Button variant="outline" size="sm" onClick={() => setSelectedGuide(index)}>
                      <Icon name="FileText" size={14} className="mr-1" />
                      Достижения
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleContactClick(index)}>
                      <Icon name="MessageCircle" size={14} className="mr-1" />
                      Связаться с гидом
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
              <div className="space-y-4">
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
                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{guides[selectedGuide].experience}</div>
                    <div className="text-xs text-muted-foreground">Опыт работы</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{guides[selectedGuide].tours}</div>
                    <div className="text-xs text-muted-foreground">Проведено туров</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary flex items-center justify-center gap-1">
                      {guides[selectedGuide].rating}
                      <Icon name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                    </div>
                    <div className="text-xs text-muted-foreground">Рейтинг</div>
                  </div>
                </div>
                <Button className="w-full" size="lg" onClick={() => handleContactClick(selectedGuide)}>
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
          <form className="space-y-4" onSubmit={(e) => {
            e.preventDefault();
            alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
            setShowContactForm(false);
          }}>
            <div className="space-y-2">
              <label className="text-sm font-medium">Ваше имя</label>
              <Input placeholder="Иван Иванов" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Ваш телефон</label>
              <Input type="tel" placeholder="+7 (999) 123-45-67" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Удобное время для звонка</label>
              <Input type="text" placeholder="Например: 10:00 - 18:00" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Комментарий (необязательно)</label>
              <Textarea 
                placeholder="Расскажите о ваших пожеланиях..."
                className="min-h-[80px]"
              />
            </div>
            <Button type="submit" className="w-full" size="lg">
              <Icon name="Phone" size={18} className="mr-2" />
              Заказать звонок
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GuidesSection;