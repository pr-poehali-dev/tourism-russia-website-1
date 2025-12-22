import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Review {
  name: string;
  tour: string;
  rating: number;
  text: string;
  images?: string[];
  link?: string;
}

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

const ReviewsGallerySection = () => {
  const [imageIndices, setImageIndices] = React.useState<{[key: number]: number}>({});
  const [selectedBenefit, setSelectedBenefit] = React.useState<number | null>(null);
  const [expandedReviews, setExpandedReviews] = React.useState<{[key: number]: boolean}>({});
  const [selectedReview, setSelectedReview] = React.useState<Review | null>(null);
  const [reviewsStartIndex, setReviewsStartIndex] = React.useState(0);

  const reviews: Review[] = [
    {
      name: "Катерина Лин-о",
      tour: "Камчатка 2020г",
      rating: 5,
      text: "Присоединяюсь к теплым словам о походе на Камчатку в августе 2020 по маршруту Три вулкана. Было очень круто, преодоление препед всего себя ) впечатления самые разнообразные и насыщенные. Нас хлестал дождь, жарило солнце, скользили по снегу и прыгали по камням, но все это меркло под впечатлениями, которые получали от окружающего полудикого мира. В конце похода чувствовал себя заново рожденным, и крепким и осознаешь, что действительно горы сверяют. Жаль, медведей так и не увидели, хоть издали)) Зато кормили ужасно смешных толстеньких евражек и гоняли хитрую лисичку из лагеря. Отдельное спасибо нашим инструкторам Антону и Татьяне, которые смогли сделать поход посильным для всех, кого нужно подбадривали и поддерживали и поэтому получилось все преодолеть с улыбкой)) И всем ребятам спасибо, все вдруг поддерживали и поэтому получилось все преодолеть с улыбкой))",
      link: "https://vk.com/id10807781",
      images: [
        "https://cdn.poehali.dev/files/photo_2025-12-22_14-16-47.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_14-16-55.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_14-17-02.jpg",
      ],
    },
    {
      name: "Александр С.",
      tour: "Колыма 2025г",
      rating: 5,
      text: "Отличное путешествие на Колыму, на озеро Джека Лондона. Гиды Антон и Эмиль настоящие профессионалы своего дела и очень приятные и интересные люди. Общение с ними доставило не меньше восхитительных эмоций, чем умопомрачительная природа Колымы! Всем рекомендую!",
      link: "https://t.me/+79824900900",
      images: [
        "https://cdn.poehali.dev/files/IMG_4222.jpg",
        "https://cdn.poehali.dev/files/IMG_4420.jpg",
        "https://cdn.poehali.dev/files/IMG_3977.jpg",
      ],
    },
    {
      name: "Елизавета С.",
      tour: "Гора Пабаку 2023г",
      rating: 5,
      text: "Не первый и не последний раз хожу с Антоном и Эмилём в походы. За что обожаю именно Антона, за его любовь к местам, куда он нас водит. Он знает про жизнь людей, знает истории и с удовольствием с нами этим делиться. Из путешествий я возвращаюсь не только с впечатлениями от места, но и с горой знаний ❤️. Эмиль всегда найдет подход к каждому участнику, ты никогда не останешься без помощи и без совета. А еще эти душевные вечерние разговоры, Эмиль ты мастер и глубоко видишь людей ❤️",
      link: "https://vk.ru/elizavetaspirit",
      images: [
        "https://cdn.poehali.dev/files/photo_2025-12-16_23-15-55.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-16_23-16-09.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-16_23-16-04.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-16_23-16-01.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-16_23-12-17.jpg",
        "https://cdn.poehali.dev/files/IMG_3977.jpg",
      ],
    },
    {
      name: "Анна Мочалова",
      tour: "Камчатка 2020г",
      rating: 5,
      text: "Прошло всё просто бомбически, как говорит Антон) Маршрут был насыщенным, и каждым днём Камчатка открывалась под другим углом: и туман, и дождь, и солнце, и снег, и гольцы. Сложно, хотя это и был мой первый настоящий горный поход (правда я не думала, что будут вулканцы после каждого подъёма))), после подъёмов возвращалась шоколадки, но лучше бы больше орехов набрала😁 (хотя и эти не без влияния, он нас всегда подбадривал шутками и рассказами, когда что-то было совсем сложно и ты думала, что сил уже ни на что не останется, помогал и объяснял) Благодаря судьбе, что с Камчаткой показывал именно он, я бы с Антоном пошла ещё в поход, и не раз! В итоге завалилась туда мы две взрослая но подружились. Вышли серьёзными и лису, подглядели голубыше, морских котиков и лису. В очень довольная первым походом и рада, что ходила именно в нашй! Спасибо организатором горе и моей дружеской компании, повысить в такой коллективе стопроцентно😘🫶",
      link: "https://vk.com/mochalova_am",
      images: [
        "https://cdn.poehali.dev/files/photo_2025-12-22_14-36-26.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_14-36-22.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_14-36-18.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_14-36-12.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_14-35-50.jpg",
      ],
    },
    {
      name: "Кристина Литвиненко",
      tour: "Камчатка 2024г",
      rating: 5,
      text: "Съездили с Антоном на Камчатку 14.09.24-24.09.24. Насыщенная, интересная программа. Поднялись на вулкан Авачинский. Антон всегда подбадривал, поддерживал. В поход ходили вдвоем с мужем. И это был лучший наш поход. Если пойдем в поход еще, то обязательно обратимся именно к Антону. В походе отпраздновали день рождение, группа была небольшая. 7 человек, мы все сдружились и отлично провели время вместе 9 дней. Эмоций осталось очень много, вместе с яркими фотографиями и видео. Очень рада, что нашла этот тур прям перед полетом на Камчатку. Благодарна Антону за все эти дни, за очень вкусную еду, крутую палатку, загадки, анекдоты, был не просто поход. А самый настоящий праздник длиною в 9 дней.",
      link: "https://vk.com/pegovajewelry",
      images: [
        "https://cdn.poehali.dev/files/photo_2025-12-22_14-46-24.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_14-46-22.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_14-46-18.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_14-46-16.jpg",
      ],
    },
  ];

  const benefits: Benefit[] = [
    { icon: "Shield", title: "Безопасность", description: "Проверенные маршруты и опытные гиды" },
    { icon: "Users", title: "Малые группы", description: "До 12 человек для комфорта каждого" },
    { icon: "Award", title: "15 лет опыта", description: "Более 5000 довольных туристов" },
    { icon: "Video", title: "Видео", description: "Интересные моменты из путешествий" },
  ];

  return (
    <>
      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 md:mb-4">Отзывы </h2>
            <p className="text-base md:text-lg text-muted-foreground">Что говорят наши путешественники</p>
          </div>
          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.slice(reviewsStartIndex, reviewsStartIndex + 3).map((review, index) => (
              <Card key={reviewsStartIndex + index} className="hover:shadow-lg transition-shadow overflow-hidden">
                {review.images && review.images.length > 0 && (
                  <div 
                    className="relative h-64 w-full overflow-hidden cursor-pointer group"
                    onClick={() => {
                      if (review.images && review.images.length > 1) {
                        const currentIndex = imageIndices[reviewsStartIndex + index] || 0;
                        const nextIndex = (currentIndex + 1) % review.images.length;
                        setImageIndices({...imageIndices, [reviewsStartIndex + index]: nextIndex});
                      }
                    }}
                  >
                    <img
                      src={review.images[imageIndices[reviewsStartIndex + index] || 0]}
                      alt={`${review.name} - ${review.tour}`}
                      className="w-full h-full object-contain bg-muted transition-opacity duration-300"
                    />
                    {review.images.length > 1 && (
                      <>
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Icon name="ChevronRight" size={48} className="text-white" />
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                          {(imageIndices[reviewsStartIndex + index] || 0) + 1} / {review.images.length}
                        </div>
                      </>
                    )}
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-1 sm:gap-2 mb-2">
                    <CardTitle className="font-heading text-base sm:text-lg md:text-xl">{review.name}</CardTitle>
                    {review.link && (
                      <a href={review.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors">
                        {review.link.includes('vk.') ? (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.15 14.63h-1.43c-.51 0-.67-.42-1.58-1.33-.8-.76-1.15-.86-1.35-.86-.28 0-.36.08-.36.46v1.21c0 .33-.1.52-1.01.52-1.49 0-3.14-.9-4.3-2.57-1.76-2.37-2.24-4.15-2.24-4.51 0-.2.08-.39.46-.39h1.43c.35 0 .48.16.61.53.71 2.05 1.91 3.85 2.4 3.85.18 0 .27-.09.27-.55v-2.14c-.06-.98-.57-1.06-.57-1.41 0-.16.13-.32.35-.32h2.24c.29 0 .4.16.4.5v2.89c0 .3.13.4.22.4.18 0 .33-.1.67-.44 1.04-1.17 1.79-2.97 1.79-2.97.1-.21.26-.39.61-.39h1.43c.43 0 .53.22.43.52-.16.73-1.97 3.44-1.97 3.44-.15.24-.2.35 0 .62.14.2.61.59 1.12 1.13.59.62.95 1.14 1.06 1.5.11.36-.08.54-.49.54z"/></svg>
                        ) : (
                          <Icon name="Send" size={20} />
                        )}
                      </a>
                    )}
                  </div>
                  <CardDescription className="text-xs sm:text-sm">Тур: {review.tour}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-muted-foreground italic">
                    "{review.text.length > 200 ? review.text.substring(0, 200) + '...' : review.text}"
                  </p>
                  {review.text.length > 200 && (
                    <Button 
                      variant="link" 
                      className="mt-2 p-0 h-auto text-primary"
                      onClick={() => setSelectedReview(review)}
                    >
                      Читать весь отзыв
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
            </div>
            
            {reviews.length > 3 && (
              <div className="flex justify-center mt-8 gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setReviewsStartIndex(Math.max(0, reviewsStartIndex - 3))}
                  disabled={reviewsStartIndex === 0}
                  className="flex items-center gap-2"
                >
                  <Icon name="ChevronLeft" size={20} />
                  Предыдущие
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setReviewsStartIndex(Math.min(reviews.length - 3, reviewsStartIndex + 3))}
                  disabled={reviewsStartIndex + 3 >= reviews.length}
                  className="flex items-center gap-2"
                >
                  Следующие
                  <Icon name="ChevronRight" size={20} />
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 md:mb-4">Галерея</h2>
            <p className="text-base md:text-lg text-muted-foreground">Моменты из наших путешествий</p>
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

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 md:mb-4">Почему мы?</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы создаём незабываемые путешествия по России уже 15 лет
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="text-center border-2 border-primary cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-slide-up group" 
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedBenefit(index)}
              >
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 group-hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors duration-300">
                    <Icon name={benefit.icon} size={32} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <CardTitle className="font-heading text-base md:text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm md:text-base group-hover:text-primary-foreground/90 transition-colors duration-300">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 md:mb-4">Свяжитесь с нами</h2>
            <p className="text-base md:text-lg text-muted-foreground">Мы ответим на все ваши вопросы</p>
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
                  <p className="text-lg">г. Пермь     г. Уфа</p>
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
                <p>г. Пермь  г. Уфа</p>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <a href="https://t.me/trash_mnesh" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                  <Icon name="Send" size={24} />
                </a>
                <a href="https://vk.com/trash_mnesh" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.15 14.63h-1.43c-.51 0-.67-.42-1.58-1.33-.8-.76-1.15-.86-1.35-.86-.28 0-.36.08-.36.46v1.21c0 .33-.1.52-1.01.52-1.49 0-3.14-.9-4.3-2.57-1.76-2.37-2.24-4.15-2.24-4.51 0-.2.08-.39.46-.39h1.43c.35 0 .48.16.61.53.71 2.05 1.91 3.85 2.4 3.85.18 0 .27-.09.27-.55v-2.14c-.06-.98-.57-1.06-.57-1.41 0-.16.13-.32.35-.32h2.24c.29 0 .4.16.4.5v2.89c0 .3.13.4.22.4.18 0 .33-.1.67-.44 1.04-1.17 1.79-2.97 1.79-2.97.1-.21.26-.39.61-.39h1.43c.43 0 .53.22.43.52-.16.73-1.97 3.44-1.97 3.44-.15.24-.2.35 0 .62.14.2.61.59 1.12 1.13.59.62.95 1.14 1.06 1.5.11.36-.08.54-.49.54z"/></svg>
                </a>
                <a href="https://www.instagram.com/ant.turist" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="https://youtube.com/@antturist" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                  <Icon name="Youtube" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-75">
            <p>© 2020 Жизнь с рюкзаком. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <Dialog open={selectedReview !== null} onOpenChange={() => setSelectedReview(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedReview && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <DialogTitle className="text-2xl font-heading">
                    {selectedReview.name}
                  </DialogTitle>
                  {selectedReview.link && (
                    <a href={selectedReview.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors">
                      {selectedReview.link.includes('vk.') ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.15 14.63h-1.43c-.51 0-.67-.42-1.58-1.33-.8-.76-1.15-.86-1.35-.86-.28 0-.36.08-.36.46v1.21c0 .33-.1.52-1.01.52-1.49 0-3.14-.9-4.3-2.57-1.76-2.37-2.24-4.15-2.24-4.51 0-.2.08-.39.46-.39h1.43c.35 0 .48.16.61.53.71 2.05 1.91 3.85 2.4 3.85.18 0 .27-.09.27-.55v-2.14c-.06-.98-.57-1.06-.57-1.41 0-.16.13-.32.35-.32h2.24c.29 0 .4.16.4.5v2.89c0 .3.13.4.22.4.18 0 .33-.1.67-.44 1.04-1.17 1.79-2.97 1.79-2.97.1-.21.26-.39.61-.39h1.43c.43 0 .53.22.43.52-.16.73-1.97 3.44-1.97 3.44-.15.24-.2.35 0 .62.14.2.61.59 1.12 1.13.59.62.95 1.14 1.06 1.5.11.36-.08.54-.49.54z"/></svg>
                      ) : (
                        <Icon name="Send" size={24} />
                      )}
                    </a>
                  )}
                </div>
                <DialogDescription className="text-base">
                  Тур: {selectedReview.tour}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                {selectedReview.images && selectedReview.images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {selectedReview.images.map((img, idx) => (
                      <img 
                        key={idx}
                        src={img} 
                        alt={`${selectedReview.name} - фото ${idx + 1}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                )}
                <p className="text-base leading-relaxed text-muted-foreground italic">
                  "{selectedReview.text}"
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={selectedBenefit !== null} onOpenChange={() => setSelectedBenefit(null)}>
        <DialogContent className="max-w-2xl">
          {selectedBenefit !== null && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={benefits[selectedBenefit].icon} size={32} className="text-primary" />
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
              <div className="space-y-4">
                {selectedBenefit === 0 && (
                  <div className="space-y-3">
                    <p className="text-muted-foreground">
                      Ваша безопасность - наш главный приоритет. Мы гарантируем:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Проверенные и безопасные маршруты</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Сертифицированные гиды с медицинской подготовкой</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Полное снаряжение и аптечка первой помощи</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Связь и GPS-трекинг во время походов</span>
                      </li>
                    </ul>
                  </div>
                )}
                {selectedBenefit === 1 && (
                  <div className="space-y-3">
                    <p className="text-muted-foreground">
                      Малые группы обеспечивают максимальный комфорт:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>До 12 человек - внимание каждому участнику</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Индивидуальный подход к темпу движения</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Дружеская атмосфера и новые знакомства</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Возможность задать любые вопросы гиду</span>
                      </li>
                    </ul>
                  </div>
                )}
                {selectedBenefit === 2 && (
                  <div className="space-y-3">
                    <p className="text-muted-foreground">
                      15 лет успешной работы и довольные клиенты:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Более 5000 туристов выбрали наши туры</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Средняя оценка 4.9 из 5 звезд</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>80% клиентов возвращаются снова</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Партнерство с ведущими турклубами России</span>
                      </li>
                    </ul>
                  </div>
                )}
                {selectedBenefit === 3 && (
                  <div className="space-y-3">
                    <p className="text-muted-foreground">
                      Смотрите видео с наших походов и экспедиций:
                    </p>
                    <div className="bg-muted rounded-lg p-6 text-center">
                      <Icon name="Youtube" size={48} className="text-primary mx-auto mb-3" />
                      <p className="text-sm text-muted-foreground mb-4">
                        Интересные моменты, впечатления участников и красота природы
                      </p>
                      <Button asChild className="w-full">
                        <a href="https://youtube.com/@antturist" target="_blank" rel="noopener noreferrer">
                          <Icon name="Youtube" size={18} className="mr-2" />
                          Смотреть на YouTube
                        </a>
                      </Button>
                    </div>
                  </div>
                )}
                <Button className="w-full mt-4" size="lg" onClick={() => setSelectedBenefit(null)}>
                  Закрыть
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

    </>
  );
};

export default ReviewsGallerySection;