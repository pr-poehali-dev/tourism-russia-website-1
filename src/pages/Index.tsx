import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Index = () => {
  const [selectedGuide, setSelectedGuide] = React.useState<number | null>(null);
  const tours = [
    {
      id: 1,
      title: "Золотое Кольцо",
      description: "8 древних городов за 7 дней",
      duration: "7 дней",
      price: "45 000 ₽",
      difficulty: "Легкий",
      image: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/files/1d1b6b17-c299-4be3-bbe7-08c4f7b7d05d.jpg",
    },
    {
      id: 2,
      title: "Байкал зимой",
      description: "Прозрачный лёд и снежные пики",
      duration: "10 дней",
      price: "89 000 ₽",
      difficulty: "Средний",
      image: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/files/b25ede9a-bb7c-4b9c-9e2b-b0baa7ac497b.jpg",
    },
    {
      id: 3,
      title: "Осенний Алтай",
      description: "Золотые леса и горные вершины",
      duration: "6 дней",
      price: "52 000 ₽",
      difficulty: "Средний",
      image: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/files/852468b8-1916-478c-b088-c33868a24865.jpg",
    },
  ];

  const guides = [
    {
      name: "Антон Немчинов",
      experience: "15 лет",
      specialization: "Горные экспедиции, Алтай, Байкал",
      tours: 200,
      rating: 5.0,
      image: "https://cdn.poehali.dev/files/IMG_20231018_104134.jpg",
      achievements: [
        "Руководитель экспедиций на Алтай (2010-2024)",
        "Восхождения на Белуху (5 раз)",
        "Опыт работы с группами до 25 человек",
        "Сертифицированный горный гид",
        "Автор 12 туристических маршрутов",
      ],
    },
    {
      name: "Эмиль Газизов",
      experience: "10+ лет",
      specialization: "1-й спортивный разряд (горный, лыжный, велотуризм). Алтай, Кавказ, Кольский, Киргизия, Казахстан, Эльбрус, Урал, Забайкалье, Саяны.",
      tours: 180,
      rating: 4.9,
      image: "https://cdn.poehali.dev/files/IMG_9242.jpg",
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

  const reviews = [
    {
      name: "Мария К.",
      tour: "Золотое Кольцо",
      rating: 5,
      text: "Невероятное путешествие! Гид Елена показала нам места, о которых мы даже не знали. Организация на высшем уровне.",
    },
    {
      name: "Игорь В.",
      tour: "Байкал зимой",
      rating: 5,
      text: "Дмитрий - профессионал своего дела. Безопасность, комфорт и незабываемые впечатления. Рекомендую всем!",
    },
    {
      name: "Ольга Н.",
      tour: "Осенний Алтай",
      rating: 5,
      text: "Александр - лучший гид! Знает каждую тропу, каждую историю. Тур превзошёл все ожидания.",
    },
  ];

  const benefits = [
    { icon: "Shield", title: "Безопасность", description: "Проверенные маршруты и опытные гиды" },
    { icon: "Users", title: "Малые группы", description: "До 12 человек для комфорта каждого" },
    { icon: "Award", title: "15 лет опыта", description: "Более 5000 довольных туристов" },
    { icon: "MapPin", title: "Уникальные места", description: "Скрытые жемчужины России" },
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-start gap-3">
            <img src="https://cdn.poehali.dev/files/68572a0b1c5f5eacb47f025aa04b05e4.jpg" alt="Логотип" className="w-12 h-12 object-cover rounded-lg" />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-black text-lg leading-tight">Жизнь с рюкзаком</span>
              <span className="text-black text-xs leading-tight">авторские туры</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-primary transition-colors text-[#000000]">Главная</a>
            <a href="#guides" className="hover:text-primary transition-colors">Гиды</a>
            <a href="#tours" className="hover:text-primary transition-colors">Туры</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <div className="hidden lg:flex flex-col gap-2 text-sm">
            <a href="tel:+79655615153" className="flex items-center gap-2 hover:text-primary transition-colors text-black font-semibold text-base">
              <Icon name="Phone" size={18} />
              +7 965 561-51-53
            </a>
            <a href="mailto:rukzaklife@mail.ru" className="flex items-center gap-2 hover:text-primary transition-colors text-black">
              <Icon name="Mail" size={16} />
              rukzaklife@mail.ru
            </a>
            <div className="flex items-start gap-2 text-black">
              <Icon name="Clock" size={16} className="mt-0.5" />
              <div className="flex flex-col leading-tight">
                <span>Пн-Пт 08:00-22:00</span>
                <span>Сб-Вс 10:00-20:00</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="home" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/files/ahFddRW4KWcWkKlNvnq3MY7pWuo-960.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="md:text-7xl font-heading font-bold mb-6 text-6xl">Уникальные туры по России</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">С профессиональными гидами</p>
          <div className="flex justify-center">
            <Button size="lg" className="text-xl px-12 py-6 bg-green-600 hover:bg-green-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <Icon name="Compass" size={24} className="mr-3" />
              Выбрать тур
            </Button>
          </div>
        </div>
      </section>

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
                  <div className="flex items-center justify-between py-1 text-sm">
                    <span className="text-muted-foreground text-xs">Опыт работы</span>
                    <span className="font-semibold text-sm">{guide.experience}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 text-sm">
                    <span className="text-muted-foreground text-xs">Проведено туров</span>
                    <span className="font-semibold text-sm">{guide.tours}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 text-sm">
                    <span className="text-muted-foreground text-xs">Рейтинг</span>
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold text-sm">{guide.rating}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <Button variant="outline" size="sm" onClick={() => setSelectedGuide(index)}>
                      <Icon name="FileText" size={14} className="mr-1" />
                      Достижения
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="MessageCircle" size={14} className="mr-1" />
                      Связаться
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
                <Button className="w-full" size="lg">
                  <Icon name="MessageCircle" size={18} className="mr-2" />
                  Связаться с гидом
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <section id="tours" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Популярные туры</h2>
            <p className="text-lg text-muted-foreground">Выберите своё следующее приключение</p>
          </div>
          <Tabs defaultValue="all" className="w-full mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="easy">Легкие</TabsTrigger>
              <TabsTrigger value="medium">Средние</TabsTrigger>
              <TabsTrigger value="hard">Сложные</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tours.map((tour) => (
                  <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 right-4">{tour.difficulty}</Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="font-heading text-2xl">{tour.title}</CardTitle>
                      <CardDescription className="text-base">{tour.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Icon name="Clock" size={18} />
                          <span>{tour.duration}</span>
                        </div>
                        <div className="text-2xl font-bold text-primary">{tour.price}</div>
                      </div>
                      <Button className="w-full">
                        <Icon name="ArrowRight" size={18} className="mr-2" />
                        Подробнее
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Галерея</h2>
            <p className="text-lg text-muted-foreground">Моменты из наших путешествий</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/files/852468b8-1916-478c-b088-c33868a24865.jpg",
              "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/files/b25ede9a-bb7c-4b9c-9e2b-b0baa7ac497b.jpg",
              "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/files/1d1b6b17-c299-4be3-bbe7-08c4f7b7d05d.jpg",
              "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/files/852468b8-1916-478c-b088-c33868a24865.jpg",
              "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/files/b25ede9a-bb7c-4b9c-9e2b-b0baa7ac497b.jpg",
              "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/files/1d1b6b17-c299-4be3-bbe7-08c4f7b7d05d.jpg",
            ].map((img, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Icon name="ZoomIn" size={32} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Отзывы</h2>
            <p className="text-lg text-muted-foreground">Что говорят наши путешественники</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="font-heading text-xl">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <CardDescription>Тур: {review.tour}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Почему мы?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы создаём незабываемые путешествия по России уже 15 лет
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={benefit.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="font-heading">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">Мы ответим на все ваши вопросы</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-heading">
                    <Icon name="Phone" size={24} className="text-primary" />
                    Телефон
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:+79655615153" className="text-lg hover:text-primary transition-colors">
                    +7 965 561-51-53
                  </a>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-heading">
                    <Icon name="Mail" size={24} className="text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:rukzaklife@mail.ru" className="text-lg hover:text-primary transition-colors">
                    rukzaklife@mail.ru
                  </a>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-heading">
                    <Icon name="MapPin" size={24} className="text-primary" />
                    Адрес
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">г. Москва, ул. Примерная, д. 123</p>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Напишите нам</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="ivan@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea placeholder="Расскажите о ваших планах..." rows={4} />
                </div>
                <Button className="w-full">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-start gap-3 mb-4">
                <img src="https://cdn.poehali.dev/files/68572a0b1c5f5eacb47f025aa04b05e4.jpg" alt="Логотип" className="w-10 h-10 object-cover rounded-lg" />
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-white text-lg leading-tight">Жизнь с рюкзаком</span>
                  <span className="text-white/80 text-xs leading-tight">авторские туры</span>
                </div>
              </div>
              <p className="text-primary-foreground/80 mb-4">
                Путешествия по России с душой и профессионализмом
              </p>
              <div className="space-y-2 text-sm text-primary-foreground/90">
                <a href="tel:+79655615153" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Icon name="Phone" size={16} />
                  +7 965 561-51-53
                </a>
                <a href="mailto:rukzaklife@mail.ru" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Icon name="Mail" size={16} />
                  rukzaklife@mail.ru
                </a>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  <div>
                    <div>Пн-Пт 08:00-22:00</div>
                    <div>Сб-Вс 10:00-20:00</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-heading font-bold mb-4">Навигация</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#home" className="hover:text-primary-foreground transition-colors">Главная</a></li>
                <li><a href="#about" className="hover:text-primary-foreground transition-colors">О нас</a></li>
                <li><a href="#tours" className="hover:text-primary-foreground transition-colors">Туры</a></li>
                <li><a href="#guides" className="hover:text-primary-foreground transition-colors">Гиды</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold mb-4">Информация</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#gallery" className="hover:text-primary-foreground transition-colors">Галерея</a></li>
                <li><a href="#reviews" className="hover:text-primary-foreground transition-colors">Отзывы</a></li>
                <li><a href="#contacts" className="hover:text-primary-foreground transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold mb-4">Соцсети</h3>
              <div className="flex gap-4">
                <Button size="icon" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>© 2024 РусТур. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;