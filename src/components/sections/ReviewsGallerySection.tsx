import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import React from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface Review {
  name: string;
  tour: string;
  rating: number;
  text: string;
  images?: string[];
  link?: string;
  videoUrl?: string;
}

const ReviewsGallerySection = () => {
  const [imageIndices, setImageIndices] = React.useState<{[key: number]: number}>({});
  const [expandedReviews, setExpandedReviews] = React.useState<{[key: number]: boolean}>({});
  const [selectedReview, setSelectedReview] = React.useState<Review | null>(null);
  const [reviewsStartIndex, setReviewsStartIndex] = React.useState(0);

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
      text: "Прошло всё просто бомбически, как говорит Антон) Маршрут был насыщенным, и каждым днём Камчатка открывалась под другим углом: и туман, и дождь, и солнце, и снег, и гольцы. Сложно, хотя это и был мой первый настоящий горный поход (правда я не думала, что будут вулканцы после каждого подъёма))), пособирала всю волю в кулак, пришлось побороться с собой, но пока находятся силы закинуть одну ногу и вторую, то можно идти дальше. Не побоюсь заезженной фразы, что после этого не то что новым человеком чувствуешь себя, а намного сильнее)))) Но всё это и в самом деле не главное. Главное — это компания: Антон, Таня и все наши ребята. Атмосфера была потрясающе тёплая и душевная) Антон отличный гид, он знает не только про горы, но и про жизнь, маршрут, про особенности местности, всегда расскажет что-то интересное или просто даст послушать музыку. А как на гитаре играет — просто чудо! Таня была как наша мама: всегда приободрит, поможет и вкусно накормит. У нас были дни рождения Виктора и Антона. Было много подъёмов и спусков, метель и дождь с градом, и даже если набита до предела, но вытираешь кружку и пихаешь в рюкзак ещё пару фото с видами. В общем, всё супер! Спасибо огромное Антону и Тане! Надеюсь, увидимся снова)",
      link: "https://vk.com/id2318831",
      images: [
        "https://cdn.poehali.dev/files/photo_2025-12-22_14-04-45.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_14-04-49.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_14-05-01.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_14-05-09.jpg",
      ],
    },
    {
      name: "Мария",
      tour: "Камчатка 2022г",
      rating: 5,
      text: "Была с Антоном и командой на Камчатке. Очень благодарна ему за этот поход, за то что он привил любовь к горам и активному отдыху. Это был мой первый поход, и я очень рада что он был именно с Антоном. Всё прошло на высшем уровне: интересный маршрут, вкусная еда, душевные разговоры у костра и отличная компания. Антон — профессионал своего дела, всегда поможет, поддержит и расскажет много интересного. Очень рекомендую!",
      link: "https://vk.com/id123456",
      images: [
        "https://cdn.poehali.dev/files/photo_2025-12-22_14-07-15.jpg",
        "https://cdn.poehali.dev/files/photo_2025-12-22_14-07-22.jpg",
      ],
    },
  ];

  const nextImage = (reviewIndex: number) => {
    const review = reviews[reviewIndex];
    if (!review.images) return;
    
    setImageIndices(prev => ({
      ...prev,
      [reviewIndex]: ((prev[reviewIndex] || 0) + 1) % review.images!.length
    }));
  };

  const prevImage = (reviewIndex: number) => {
    const review = reviews[reviewIndex];
    if (!review.images) return;
    
    setImageIndices(prev => ({
      ...prev,
      [reviewIndex]: ((prev[reviewIndex] || 0) - 1 + review.images!.length) % review.images!.length
    }));
  };

  const toggleExpand = (index: number) => {
    setExpandedReviews(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const openReviewDialog = (review: Review) => {
    setSelectedReview(review);
  };

  const closeReviewDialog = () => {
    setSelectedReview(null);
  };

  const reviewsPerPage = 3;

  const nextReviews = () => {
    if (reviewsStartIndex + reviewsPerPage < reviews.length) {
      setReviewsStartIndex(reviewsStartIndex + reviewsPerPage);
    }
  };

  const prevReviews = () => {
    if (reviewsStartIndex > 0) {
      setReviewsStartIndex(Math.max(0, reviewsStartIndex - reviewsPerPage));
    }
  };

  const visibleReviews = reviews.slice(reviewsStartIndex, reviewsStartIndex + reviewsPerPage);

  return (
    <section id="reviews" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Отзывы наших путешественников
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Реальные истории и впечатления людей, которые уже побывали в наших походах
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleReviews.map((review, index) => {
            const actualIndex = reviewsStartIndex + index;
            const currentImageIndex = imageIndices[actualIndex] || 0;
            const isExpanded = expandedReviews[actualIndex] || false;
            const textPreview = review.text.slice(0, 150);
            const shouldTruncate = review.text.length > 150;

            return (
              <Card 
                key={actualIndex} 
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                {review.images && review.images.length > 0 && (
                  <div className="relative h-64 overflow-hidden group">
                    <img
                      src={review.images[currentImageIndex]}
                      alt={`${review.name} - ${review.tour}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                      onClick={() => openReviewDialog(review)}
                    />
                    {review.images.length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage(actualIndex)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                          aria-label="Предыдущее фото"
                        >
                          <Icon name="ChevronLeft" className="w-6 h-6" />
                        </button>
                        <button
                          onClick={() => nextImage(actualIndex)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                          aria-label="Следующее фото"
                        >
                          <Icon name="ChevronRight" className="w-6 h-6" />
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {review.images.map((_, imgIndex) => (
                            <div
                              key={imgIndex}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                imgIndex === currentImageIndex ? 'bg-white' : 'bg-white/50'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}

                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{review.name}</CardTitle>
                      <CardDescription className="text-sm">{review.tour}</CardDescription>
                    </div>
                    {review.link && (
                      <a
                        href={review.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                        aria-label="Ссылка на профиль"
                      >
                        <Icon name="ExternalLink" className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-700 leading-relaxed mb-4 flex-1">
                    {isExpanded || !shouldTruncate ? review.text : `${textPreview}...`}
                  </p>
                  
                  <div className="flex gap-2">
                    {shouldTruncate && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpand(actualIndex)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {isExpanded ? 'Свернуть' : 'Читать полностью'}
                      </Button>
                    )}
                    {review.videoUrl && (
                      <a
                        href={review.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors text-sm"
                      >
                        <Icon name="Youtube" className="w-5 h-5" />
                        Видео
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center items-center gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={prevReviews}
            disabled={reviewsStartIndex === 0}
            className="gap-2"
          >
            <Icon name="ChevronLeft" className="w-5 h-5" />
            Назад
          </Button>
          <span className="text-gray-600">
            {reviewsStartIndex + 1}-{Math.min(reviewsStartIndex + reviewsPerPage, reviews.length)} из {reviews.length}
          </span>
          <Button
            variant="outline"
            size="lg"
            onClick={nextReviews}
            disabled={reviewsStartIndex + reviewsPerPage >= reviews.length}
            className="gap-2"
          >
            Вперед
            <Icon name="ChevronRight" className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <Dialog open={selectedReview !== null} onOpenChange={closeReviewDialog}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedReview && (
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{selectedReview.name}</h3>
                  <p className="text-gray-600 mb-2">{selectedReview.tour}</p>
                  <div className="flex gap-1">
                    {[...Array(selectedReview.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                {selectedReview.link && (
                  <a
                    href={selectedReview.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Icon name="ExternalLink" className="w-6 h-6" />
                  </a>
                )}
              </div>

              {selectedReview.images && selectedReview.images.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                  {selectedReview.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedReview.name} - фото ${index + 1}`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  ))}
                </div>
              )}

              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {selectedReview.text}
              </p>

              {selectedReview.videoUrl && (
                <a
                  href={selectedReview.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors"
                >
                  <Icon name="Youtube" className="w-6 h-6" />
                  Смотреть видео
                </a>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ReviewsGallerySection;
