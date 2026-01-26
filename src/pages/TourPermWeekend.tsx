import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import UniversalBookingDialog from "@/components/booking/UniversalBookingDialog";

const TourPermWeekend = () => {
  const navigate = useNavigate();
  const [showBookingForm, setShowBookingForm] = useState(false);

  const tourInfo = [
    { icon: "Calendar", label: "Длительность тура", value: "2-3 ДНЯ" },
    { icon: "Moon", label: "Ночевки", value: "1-2 НОЧИ НА БАЗЕ" },
    { icon: "FootprintsIcon", label: "Тип тура", value: "АВТО/ПЕШИЙ" },
    { icon: "Signal", label: "Сложность", value: "1 ИЗ 5" },
    { icon: "Users", label: "Количество", value: "ГРУППА ОТ 4 ДО 12 ЧЕЛОВЕК" },
    { icon: "UserCheck", label: "Возраст", value: "УЧАСТНИКИ ОТ 12 ЛЕТ" },
    { icon: "MapPin", label: "Город отправления", value: "ПЕРМЬ" },
  ];

  const program = [
    {
      day: "1 день",
      distance: "200 км на машине",
      title: "Пермь – Северный Урал",
      description: "Выезжаем из Перми ранним утром на комфортабельном транспорте. По пути наслаждаемся живописными видами Пермского края, проезжаем через старинные уральские деревни. После прибытия на базу размещаемся, пьём чай с пирожками. Вечером прогулка к ближайшим скалам и ужин с уральскими легендами у камина."
    },
    {
      day: "2 день",
      distance: "10-15 км пешком",
      title: "Плато Маньпупунёр и Столбы Выветривания",
      description: "Главный день нашего путешествия! После завтрака отправляемся к знаменитому плато Маньпупунёр. Увидим 7 легендарных <strong>Столбов Выветривания</strong> высотой от 30 до 42 метров – одно из семи чудес России! Эти каменные великаны, созданные природой за миллионы лет, напоминают застывших великанов. Зимой столбы особенно сказочны в снежных шапках. Сделаем потрясающие фотографии и послушаем легенды манси об этом священном месте. Обед-пикник на плато. Возвращаемся на базу к ужину."
    },
    {
      day: "3 день (опционально)",
      distance: "150 км",
      title: "Обзорная экскурсия и возвращение",
      description: "После завтрака посещаем живописные <strong>скалы-останцы</strong>, уральские пещеры или водопады (в зависимости от сезона и погоды). Обед в традиционном уральском стиле. Выезжаем обратно в Пермь с остановками на смотровых площадках. Прибытие в город вечером.\n\n<strong>Этот день можно исключить для короткого 2-дневного тура.</strong>"
    }
  ];

  const included = [
    "Работа опытного гида-проводника",
    "Весь транспорт по программе (комфортабельный микроавтобус/внедорожник)",
    "Проживание на тёплой туристической базе",
    "Трёхразовое питание (завтрак, обед, ужин)",
    "Чай/кофе в неограниченном количестве",
    "Экскурсионное обслуживание",
    "Регистрация в МЧС",
    "Страховка"
  ];

  const notIncluded = [
    "Проезд до Перми (если вы не из Перми)",
    "Личные расходы",
    "Дополнительные экскурсии по желанию"
  ];

  const equipment = {
    clothes: [
      "Тёплая куртка и штаны",
      "Шапка, перчатки, шарф",
      "Удобная обувь для прогулок (зимой – тёплые ботинки)",
      "Термобельё (зимой)",
      "Сменная обувь для базы"
    ],
    other: [
      "Небольшой рюкзак для дневного выхода",
      "Термос (по желанию)",
      "Солнцезащитные очки",
      "Фотоаппарат/телефон",
      "Личные лекарства",
      "Документы, деньги"
    ]
  };

  return (
    <>
      <UniversalBookingDialog 
        open={showBookingForm} 
        onOpenChange={setShowBookingForm}
      />

      <div className="min-h-screen bg-background">
        <div 
          className="relative h-[50vh] md:h-[70vh] bg-cover bg-center"
          style={{
            backgroundImage: "url('https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/bucket/f4de9d1f-567d-4892-ad15-de6664c8c99c.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <button
            onClick={() => navigate("/")}
            className="absolute top-6 left-6 bg-white/90 hover:bg-white p-3 rounded-full transition-all shadow-lg z-10"
          >
            <Icon name="ArrowLeft" size={24} />
          </button>
          
          <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-4">
              Тур выходного дня
            </h1>
            <p className="text-xl md:text-3xl font-heading text-center mb-6">
              "Сказки Пермского Края"
            </p>
            <p className="text-lg md:text-xl text-center max-w-2xl mb-8">
              Плато Маньпупунёр и легендарные Столбы Выветривания
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setShowBookingForm(true)}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-6"
              >
                Забронировать тур
              </Button>
              <Button
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                size="lg"
                variant="outline"
                className="bg-white/20 hover:bg-white/30 text-white border-white font-bold text-lg px-8 py-6"
              >
                Узнать подробнее
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="md:col-span-2">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">О туре</h2>
                <div className="prose prose-lg max-w-none space-y-4 text-gray-700">
                  <p>
                    <strong>Тур выходного дня в Пермский край</strong> – идеальный вариант для тех, кто хочет увидеть одно из семи чудес России, не тратя много времени!
                  </p>
                  <p>
                    За 2-3 дня вы посетите легендарное <strong>плато Маньпупунёр</strong> с его знаменитыми <strong>Столбами Выветривания</strong> – семью каменными великанами высотой до 42 метров. Эти удивительные природные скульптуры, созданные ветром и временем за миллионы лет, входят в список семи чудес России!
                  </p>
                  <p>
                    Зимой плато превращается в настоящую сказку: заснеженные столбы на фоне белоснежных просторов создают фантастические пейзажи. Летом здесь цветут альпийские луга, а осенью тайга окрашивается в золотые цвета.
                  </p>
                  <p>
                    Ночевать будем на комфортной туристической базе с баней, горячим питанием и уютной атмосферой. Это не экстремальный поход, а комфортное путешествие для всей семьи!
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-500">
              <CardContent className="p-6 md:p-8">
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-600 mb-2">Стоимость тура</p>
                  <p className="text-4xl md:text-5xl font-bold text-orange-600">от 15 000 ₽</p>
                  <p className="text-sm text-gray-600 mt-2">на человека</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <Icon name="Calendar" size={20} className="text-orange-500" />
                    <span>Круглый год по выходным</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Icon name="Users" size={20} className="text-orange-500" />
                    <span>Группы от 4 человек</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Icon name="Shield" size={20} className="text-orange-500" />
                    <span>Легкий уровень сложности</span>
                  </div>
                </div>

                <Button
                  onClick={() => setShowBookingForm(true)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-6"
                  size="lg"
                >
                  Забронировать
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {tourInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Icon name={info.icon as any} size={32} className="mx-auto mb-3 text-primary" />
                  <p className="text-xs text-muted-foreground mb-2">{info.label}</p>
                  <p className="font-semibold text-sm">{info.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-16">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">Программа тура</h2>
              <div className="space-y-8">
                {program.map((day, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-heading font-bold">{day.day}</h3>
                        <span className="text-sm text-muted-foreground">{day.distance}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-primary mb-3">{day.title}</h4>
                      <p 
                        className="text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: day.description }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-2 border-green-500">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="CheckCircle" size={32} className="text-green-500" />
                  <h2 className="text-2xl font-heading font-bold">Что входит в стоимость</h2>
                </div>
                <ul className="space-y-3">
                  {included.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="XCircle" size={32} className="text-orange-500" />
                  <h2 className="text-2xl font-heading font-bold">Что НЕ входит в стоимость</h2>
                </div>
                <ul className="space-y-3">
                  {notIncluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="Minus" size={20} className="text-orange-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-16 bg-gradient-to-br from-blue-50 to-cyan-50">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">Что взять с собой</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-4 flex items-center gap-2">
                    <Icon name="ShirtIcon" size={24} className="text-primary" />
                    Одежда и обувь
                  </h3>
                  <ul className="space-y-2">
                    {equipment.clothes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Icon name="Dot" size={20} className="text-primary flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-4 flex items-center gap-2">
                    <Icon name="Backpack" size={24} className="text-primary" />
                    Прочее
                  </h3>
                  <ul className="space-y-2">
                    {equipment.other.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Icon name="Dot" size={20} className="text-primary flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Готовы к незабываемому выходному?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Забронируйте тур прямо сейчас и получите 5% скидку при раннем бронировании!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => setShowBookingForm(true)}
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 font-bold text-lg px-8 py-6"
                >
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Забронировать тур
                </Button>
                <Button
                  onClick={() => window.location.href = 'tel:+79655615153'}
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/20 font-bold text-lg px-8 py-6"
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 965 561-51-53
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default TourPermWeekend;
