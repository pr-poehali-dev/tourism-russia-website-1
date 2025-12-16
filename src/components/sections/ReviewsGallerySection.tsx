import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

interface Review {
  name: string;
  tour: string;
  rating: number;
  text: string;
}

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

const ReviewsGallerySection = () => {
  const reviews: Review[] = [
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

  const benefits: Benefit[] = [
    { icon: "Shield", title: "Безопасность", description: "Проверенные маршруты и опытные гиды" },
    { icon: "Users", title: "Малые группы", description: "До 12 человек для комфорта каждого" },
    { icon: "Award", title: "15 лет опыта", description: "Более 5000 довольных туристов" },
    { icon: "MapPin", title: "Уникальные места", description: "Скрытые жемчужины России" },
  ];

  return (
    <>
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
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input type="tel" placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea placeholder="Расскажите о ваших планах..." className="min-h-[120px]" />
                </div>
                <Button className="w-full" size="lg">
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
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Жизнь с рюкзаком</h3>
              <p className="text-sm opacity-90">Авторские туры по России с 2010 года</p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm">
                <p>+7 965 561-51-53</p>
                <p>rukzaklife@mail.ru</p>
                <p>г. Москва</p>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <Icon name="Youtube" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-75">
            <p>© 2024 Жизнь с рюкзаком. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ReviewsGallerySection;
