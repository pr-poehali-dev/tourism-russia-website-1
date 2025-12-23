import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import React from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface GalleryImage {
  url: string;
  alt: string;
}

interface Gallery {
  id: string;
  title: string;
  coverImage: string;
  images: GalleryImage[];
}

interface Review {
  name: string;
  tour: string;
  rating: number;
  text: string;
  images?: string[];
  link?: string;
  videoUrl?: string;
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
  const [selectedGallery, setSelectedGallery] = React.useState<Gallery | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const galleries: Gallery[] = [
    {
      id: "baikal-skating",
      title: "Коньковый поход по Байкалу",
      coverImage: "https://cdn.poehali.dev/files/photo_2025-12-23_09-55-33.jpg",
      images: [
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_09-55-33.jpg", alt: "Группа у буддийских столбов на Байкале" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_09-55-39.jpg", alt: "Скала Огой на льду Байкала" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_09-56-04.jpg", alt: "Ледяной грот на Байкале" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_09-56-15.jpg", alt: "Закат над зимним Байкалом" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_09-56-26.jpg", alt: "Встреча рассвета на льду" },
      ],
    },
    {
      id: "baikal-tents",
      title: "Байкал в палатках",
      coverImage: "https://cdn.poehali.dev/files/2z7a6771.jpg",
      images: [
        { url: "https://cdn.poehali.dev/files/2z7a6771.jpg", alt: "Палаточный лагерь на Байкале" },
      ],
    },
    {
      id: "altai-belukha",
      title: "Поход к горе Белухе",
      coverImage: "https://cdn.poehali.dev/files/belukha-main.jpg",
      images: [
        { url: "https://cdn.poehali.dev/files/belukha-main.jpg", alt: "Гора Белуха" },
      ],
    },
    {
      id: "kamchatka",
      title: "Камчатка",
      coverImage: "https://cdn.poehali.dev/files/kamchatka-main.jpg",
      images: [
        { url: "https://cdn.poehali.dev/files/kamchatka-main.jpg", alt: "Вулканы Камчатки" },
      ],
    },
    {
      id: "kolyma",
      title: "Колыма",
      coverImage: "https://cdn.poehali.dev/files/kolyma-main.jpg",
      images: [
        { url: "https://cdn.poehali.dev/files/kolyma-main.jpg", alt: "Озеро Джека Лондона" },
      ],
    },
    {
      id: "dagestan",
      title: "Дагестан",
      coverImage: "https://cdn.poehali.dev/files/dagestan-main.jpg",
      images: [
        { url: "https://cdn.poehali.dev/files/dagestan-main.jpg", alt: "Горы Дагестана" },
      ],
    },
  ];

  const openGallery = (gallery: Gallery) => {
    setSelectedGallery(gallery);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (!selectedGallery) return;
    setCurrentImageIndex((prev) => 
      prev === selectedGallery.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!selectedGallery) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedGallery.images.length - 1 : prev - 1
    );
  };

  const reviews: Review[] = [
    {
      name: "Инна Литковская",
      tour: "Камчатка",
      rating: 5,
      text: "Ровно год назад с утра была эта песня, и мы еще не знали, что к нам в лагерь с крейсерской скоростью с соседней сопки несётся медведь, который изменит всю нашу дальнейшую жизнь. 😃😉 Медведя первой заметила я. Гляжу, по склону несётся коричневый шарик. О, какой прикольный шпиц, интересно, что он здесь делает, подумала я. Потом было три секунды оцепенения.. Но позвольте, какой к чёрту шпиц здесь на многие километры никого нет! Это же медведь, просто очень далеко, и кажется, что это маленькая собачка!!! На этом видео запечатлены самые красивые моменты. А дальше он пошёл прямиком в наши палатки и начал потрошить рюкзак)... Я снова и снова благодарю нашего гида и давно уже друга Антона Немчинова. Если бы не его хладнокровные и разумные действия, то эта история могла бы иметь совсем другой конец. Антон Антонович !!! Да хранит бог все твои пути! С нетерпением жду наших новых путешествий! 😊❤️",
      link: "https://vk.com/innuit",
      videoUrl: "https://youtu.be/sJ_FEqm1aZo",
      images: [
        "https://cdn.poehali.dev/files/photo_2025-12-22_16-06-33.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_16-06-57.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_16-06-26.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_16-06-15.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_16-06-31.jpg",
      ],
    },
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
      link: "https://vk.com/id30034156",
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
    {
      name: "Екатерина Хлопкова",
      tour: "Дагестан",
      rating: 5,
      text: "Антон — человек, невероятно простой в общении и с космосом внутри. Веселый, эрудированный, отзывчивый, немного психолог и в меру пофигист, он сделал наш поход по Дагестану незабываемым с точки зрения эмоций и впечатлений. За организацию коллектива, четкое распределение ролей, лидерские качества особый респект! Спасибо, что услышал меня и взял «двойкой»: без тебя бы я подохла🙈Спасибо за общность интересов, за твой плейлист, за песни, танцы и кофе в горах, за погоду (верю, что это тоже ты нашаманил), за красоту, которую показал💚Спасибо за фразы, которые разобрали на цитаты и увезли в разные уголки страны (как теперь избавиться от «без затей», пока не понимаю😹), за загадки и анекдоты, за смех до слез! Из таких людей складывается узор лучших путешествий, а значит, и всей жизни! Навсегда в моем💟 Зови еще! P.S. Желаю тебе встретить человека, с которым вы будете смотреть в одном направлении ❤️💯",
      link: "https://vk.com/id46098",
      images: [
        "https://cdn.poehali.dev/files/photo_2025-12-22_14-59-22.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_14-59-20.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_14-59-16.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_14-59-13.jpg",
      ],
    },
  ];

  const benefits: Benefit[] = [
    {
      icon: "Users",
      title: "Тёплая, почти семейная атмосфера",
      description: "Мы создаём дружескую обстановку, где каждый участник чувствует себя частью команды. Вечерние посиделки у костра, общие песни и истории делают путешествие незабываемым.",
    },
    {
      icon: "Shield",
      title: "Гиды, которым можно доверять на все 100%",
      description: "Наши инструкторы — профессионалы с многолетним опытом и сертификатами. Они знают маршруты как свои пять пальцев и всегда готовы помочь.",
    },
    {
      icon: "Heart",
      title: "Индивидуальный подход к каждому",
      description: "Мы учитываем физическую подготовку и пожелания каждого участника. Никого не оставим позади, всегда поможем и поддержим.",
    },
    {
      icon: "MapPin",
      title: "Уникальные маршруты в самые красивые уголки",
      description: "Мы тщательно отбираем места, которые поражают своей красотой. От зимнего Байкала до вулканов Камчатки — каждый маршрут продуман до мелочей.",
    },
    {
      icon: "Sparkles",
      title: "Безопасность превыше всего",
      description: "Качественное снаряжение, проверенные маршруты, страховка и опытные гиды — мы делаем всё, чтобы ваше путешествие было безопасным.",
    },
    {
      icon: "Star",
      title: "Воспоминания на всю жизнь",
      description: "Наши туры — это не просто походы, это приключения, которые меняют жизнь. Вы получите бесценный опыт и новых друзей.",
    },
  ];

  const toggleReviewExpansion = (index: number) => {
    setExpandedReviews(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const previousReviews = () => {
    setReviewsStartIndex(Math.max(0, reviewsStartIndex - 3));
  };

  const nextReviews = () => {
    setReviewsStartIndex(Math.min(reviews.length - 3, reviewsStartIndex + 3));
  };

  return (
    <>
      <section id="gallery" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 md:mb-4">
              Галерея
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Моменты из наших путешествий
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleries.map((gallery) => (
              <Card
                key={gallery.id}
                className="cursor-pointer group overflow-hidden hover:shadow-xl transition-all duration-300"
                onClick={() => openGallery(gallery)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={gallery.coverImage}
                    alt={gallery.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-heading font-bold text-xl text-white mb-1">
                      {gallery.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <Icon name="Images" size={16} />
                      <span>{gallery.images.length} фото</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={selectedGallery !== null} onOpenChange={closeGallery}>
        <DialogContent className="max-w-6xl p-0 bg-black/95">
          {selectedGallery && (
            <div className="relative">
              <div className="relative aspect-video w-full">
                <img
                  src={selectedGallery.images[currentImageIndex].url}
                  alt={selectedGallery.images[currentImageIndex].alt}
                  className="w-full h-full object-contain"
                />
                
                {selectedGallery.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-colors"
                      aria-label="Предыдущее фото"
                    >
                      <Icon name="ChevronLeft" size={24} className="text-white" />
                    </button>
                    
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-colors"
                      aria-label="Следующее фото"
                    >
                      <Icon name="ChevronRight" size={24} className="text-white" />
                    </button>
                  </>
                )}
              </div>

              <div className="p-4 bg-black/50 backdrop-blur">
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  {selectedGallery.title}
                </h3>
                <div className="flex items-center justify-between text-white/60 text-sm">
                  <span>{selectedGallery.images[currentImageIndex].alt}</span>
                  <span>
                    {currentImageIndex + 1} / {selectedGallery.images.length}
                  </span>
                </div>
              </div>

              {selectedGallery.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto p-4 bg-black/50">
                  {selectedGallery.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        idx === currentImageIndex
                          ? "border-primary scale-105"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img.url}
                        alt={img.alt}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      <section id="reviews" className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 md:mb-4">Отзывы путешественников</h2>
            <p className="text-base md:text-lg text-muted-foreground">Истории тех, кто уже побывал в наших турах</p>
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
                    {review.videoUrl && (
                      <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1 z-10 shadow-lg">
                        <Icon name="Video" size={16} />
                        ВИДЕО
                      </div>
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
                  <CardDescription className="text-xs sm:text-sm">{review.tour}</CardDescription>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className={`text-xs sm:text-sm text-muted-foreground leading-relaxed ${!expandedReviews[reviewsStartIndex + index] ? 'line-clamp-4' : ''}`}>
                    {review.text}
                  </p>
                  {review.text.length > 200 && (
                    <Button
                      variant="link"
                      size="sm"
                      onClick={() => toggleReviewExpansion(reviewsStartIndex + index)}
                      className="px-0 h-auto text-xs sm:text-sm mt-2"
                    >
                      {expandedReviews[reviewsStartIndex + index] ? 'Скрыть' : 'Читать далее'}
                    </Button>
                  )}
                  {review.videoUrl && (
                    <a 
                      href={review.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-xs sm:text-sm text-primary hover:underline font-medium"
                    >
                      <Icon name="Video" size={16} />
                      Смотреть видео
                    </a>
                  )}
                </CardContent>
              </Card>
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={previousReviews}
                disabled={reviewsStartIndex === 0}
                className="h-10 w-10"
              >
                <Icon name="ChevronLeft" size={20} />
              </Button>
              <div className="flex items-center gap-2">
                {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setReviewsStartIndex(i * 3)}
                    className={`h-2 rounded-full transition-all ${
                      Math.floor(reviewsStartIndex / 3) === i 
                        ? 'w-8 bg-primary' 
                        : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextReviews}
                disabled={reviewsStartIndex >= reviews.length - 3}
                className="h-10 w-10"
              >
                <Icon name="ChevronRight" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 md:mb-4">Почему выбирают нас</h2>
            <p className="text-base md:text-lg text-muted-foreground">То, что делает наши туры особенными</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedBenefit(index)}
              >
                <CardHeader>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={benefit.icon as any} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="font-heading text-lg md:text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6">Свяжитесь с нами</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-12">
              Готовы отправиться в путешествие? Напишите или позвоните нам
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <Card className="p-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Телефон</h3>
                    <a href="tel:+79655615153" className="text-primary hover:underline">
                      +7 965 561-51-53
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <a href="mailto:rukzaklife@mail.ru" className="text-primary hover:underline break-all">
                      rukzaklife@mail.ru
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-semibold mb-1">Режим работы</h3>
                  <p className="text-sm text-muted-foreground">
                    Пн-Пт: 08:00-22:00 | Сб-Вс: 10:00-20:00
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewsGallerySection;
