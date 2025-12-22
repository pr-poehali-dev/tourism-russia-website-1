import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const TourKamchatka = () => {
  const navigate = useNavigate();
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    tour: 'Камчатка - три вулкана',
    comment: ''
  });

  const tourInfo = [
    { icon: "Calendar", label: "Длительность тура", value: "9 ДНЕЙ" },
    { icon: "Moon", label: "Ночевки", value: "8 НОЧЕЙ" },
    { icon: "FootprintsIcon", label: "Тип тура", value: "ПЕШИЙ/АВТО" },
    { icon: "Signal", label: "Сложность", value: "3 ИЗ 5" },
    { icon: "Users", label: "Количество", value: "ГРУППА ОТ 8 ДО 16 ЧЕЛОВЕК" },
    { icon: "UserCheck", label: "Возраст", value: "УЧАСТНИКИ ОТ 16 ЛЕТ" },
    { icon: "MapPin", label: "Город отправления", value: "ПЕТРОПАВЛОВСК-КАМЧАТСКИЙ" },
  ];

  const program = [
    {
      day: "1 день",
      distance: "140 км на машине",
      title: "Петропавловск-Камчатский – подножие вулкана Горелый",
      description: "Сбор группы в Петропавловске-Камчатском. Начинаем наше путешествие с переезда к подножию вулкана Горелый. По пути полюбуемся камчатскими пейзажами и подготовимся к предстоящим восхождениям. Разобьем первый лагерь у подножия вулкана."
    },
    {
      day: "2 день",
      distance: "13 км, +800/-800 м",
      title: "Восхождение на вулкан Горелый",
      description: "Сегодня нас ждет первое восхождение на вулкан Горелый. Это активный вулкан с несколькими кратерами, каждый из которых уникален. Увидим разноцветные кислотные озера, фумаролы и почувствуем мощь земных недр. С вершины открываются потрясающие виды на вулканы и Тихий океан."
    },
    {
      day: "3 день",
      distance: "13 км, +300 м",
      title: "Подножие вулкана Горелый – подножие вулкана Мутновский",
      description: "Собираем лагерь и отправляемся к следующей точке нашего маршрута – вулкану Мутновскому. Переход пройдет по живописной местности с видами на вулканы. Разбиваем новый лагерь у подножия Мутновского, готовимся к завтрашнему восхождению."
    },
    {
      day: "4 день",
      distance: "15-17 км, +1000/-1000 м",
      title: "Вулкан Мутновский и каньон Опасный",
      description: "Один из самых впечатляющих дней похода! Поднимаемся на вулкан Мутновский – один из самых активных на Камчатке. Здесь увидим дымящиеся фумаролы, серные поля и невероятные марсианские пейзажи. Спустимся к каньону Опасный с его отвесными стенами и водопадом. Возвращаемся в лагерь."
    },
    {
      day: "5 день",
      distance: "13 км, +200/-300 м",
      title: "Подножие Мутновского – Дачные источники",
      description: "Переход к Дачным термальным источникам. Здесь можно будет отдохнуть и искупаться в горячих природных ваннах после напряженных восхождений. Прекрасная возможность расслабиться и восстановить силы перед финальным восхождением на Авачинский вулкан."
    },
    {
      day: "6 день",
      distance: "140 км на машине",
      title: "Дачные источники – подножие Авачинского вулкана",
      description: "Переезд к подножию Авачинского вулкана – одного из самых известных и доступных вулканов Камчатки. Это действующий вулкан, который виден из Петропавловска-Камчатского. Разбиваем лагерь и готовимся к восхождению."
    },
    {
      day: "7 день",
      distance: "24 км, +2100/-2100 м",
      title: "Восхождение на Авачинский вулкан",
      description: "Главное восхождение нашего путешествия! Авачинский вулкан высотой 2741 метр – настоящая жемчужина Камчатки. Подъем технически несложный, но требует выносливости. С вершины открывается круговая панорама: видны Корякский и Козельский вулканы, Тихий океан и Петропавловск-Камчатский. Можем заглянуть в кратер вулкана!"
    },
    {
      day: "8 день",
      distance: "60 км на машине",
      title: "Тот самый пляж на Тихом океане",
      description: "Заслуженный день отдыха! Отправляемся на побережье Тихого океана. Прогуляемся по черному вулканическому песку, увидим мыс с колонией морских птиц, возможно, встретим тюленей. Насладимся величием океана и подведем итоги нашего путешествия."
    },
    {
      day: "9 день",
      distance: "20 км на машине",
      title: "Возвращение в город",
      description: "Последний день нашего приключения. Возвращаемся в Петропавловск-Камчатский. По пути еще раз полюбуемся камчатскими пейзажами и вулканами. Прощаемся с группой. До новых встреч в походах!"
    }
  ];

  const included = [
    "Работа опытного гида и его сопровождение 24 часа в сутки",
    "Все трансферы по программе только для нашей группы",
    "Трёхразовое питание на маршруте (завтрак, обеденный перекус, ужин)",
    "Общественное снаряжение (палатки, горелки, костровое)",
    "Связь и навигация",
    "Общественная аптечка",
    "Регистрация группы в МЧС",
    "Консультация по подбору снаряжения и покупке авиабилетов",
    "Страховка"
  ];

  const notIncluded = [
    "Авиабилет до Петропавловска-Камчатского (от 30000 руб.)",
    "Прокат личного снаряжения",
    "Баня у подножия Авачинского вулкана"
  ];

  const equipment = {
    clothes: [
      "Ботинки треккинговые",
      "Сандалии/кроссовки для лагеря",
      "Термобельё",
      "Куртка ветрозащитная",
      "Дождевик",
      "Куртка тёплая пуховая",
      "Флисовая кофта",
      "Футболки 2-3 шт",
      "Рубашка с длинным рукавом",
      "Штаны ходовые",
      "Сменное бельё",
      "Носки треккинговые 2-3 пары",
      "Носки шерстяные для сна",
      "Перчатки флисовые",
      "Перчатки х/б для костра",
      "Купальник/плавки",
      "Гамаши"
    ],
    gear: [
      "Рюкзак 20-30л для радиальных выходов",
      "Ёмкость для воды",
      "Солнцезащитные очки",
      "Бафф/кепка",
      "Термос 0,5-1л",
      "Зажигалка",
      "Пенка средней толщины",
      "Спальник (t-комфорта 0,-5)",
      "КЛМН",
      "Хоба",
      "Фонарь налобный с батарейками",
      "Палки треккинговые"
    ],
    packing: [
      "Рюкзак 75-90л с накидкой от дождя",
      "Гидромешок для документов",
      "Сумки для одежды"
    ],
    firstAid: [
      "Обезболивающее",
      "Индивидуальные препараты",
      "2 эластичных бинта",
      "Ацикловир",
      "Таблетки от укачивания",
      "Капли от насморка",
      "Таблетки от горла и кашля",
      "Средства от хронических заболеваний"
    ],
    hygiene: [
      "Гигиеническая помада",
      "Солнцезащитный крем SPF 50",
      "Зубная щетка",
      "Влажные салфетки",
      "Бумажные салфетки",
      "Зубная паста",
      "Расчёска",
      "Мыло",
      "Шампунь",
      "Туалетная бумага",
      "Полотенце"
    ],
    documents: [
      "Паспорт",
      "Деньги и карточка",
      "Телефон",
      "Медицинская страховка",
      "Билеты",
      "Перекус до 500г"
    ]
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://poehali-backend.claude-code.app/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit booking');
      }

      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });

      setShowBookingForm(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        tour: 'Камчатка - три вулкана',
        comment: ''
      });
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <img
          src="https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/files/f69f3837-399c-401e-9bbc-11624839b9e9.jpg"
          alt="Камчатка - три вулкана"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <button
          onClick={() => navigate(-1)}
          className="absolute top-8 left-8 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors z-10"
        >
          <Icon name="ArrowLeft" className="w-6 h-6" />
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Камчатка — три вулкана
            </h1>
            <p className="text-2xl md:text-3xl mb-6 text-white/90">
              Мутновский, Горелый и Авачинский
            </p>
            <div className="flex flex-wrap gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Icon name="Calendar" className="w-5 h-5" />
                <span>15-23 августа 2026 года</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">83 200 ₽</span>
                <span className="text-white/80">(предоплата 8 320 ₽)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Tour Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tourInfo.map((info, index) => (
            <Card key={index} className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={info.icon as any} className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    <p className="font-semibold text-sm leading-tight">{info.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mb-16 text-center">
          <Button
            size="lg"
            className="text-lg px-8 py-6 h-auto"
            onClick={() => setShowBookingForm(true)}
          >
            Забронировать место
          </Button>
        </div>

        {/* Program */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Программа тура</h2>
          <div className="space-y-6">
            {program.map((day, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="md:w-32 flex-shrink-0">
                      <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                        <span className="font-bold text-primary">{day.day}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      {day.distance && (
                        <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                          <Icon name="Route" className="w-4 h-4" />
                          <span>{day.distance}</span>
                        </div>
                      )}
                      <h3 className="text-xl font-bold mb-3">{day.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {day.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* What's Included */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Что входит в стоимость</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Icon name="CheckCircle2" className="w-6 h-6 text-green-600" />
                  Включено
                </h3>
                <ul className="space-y-3">
                  {included.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="Check" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Icon name="XCircle" className="w-6 h-6 text-red-600" />
                  Не включено
                </h3>
                <ul className="space-y-3">
                  {notIncluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="X" className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Equipment */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Список снаряжения</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="ShirtIcon" className="w-5 h-5 text-primary" />
                  Одежда
                </h3>
                <ul className="space-y-2">
                  {equipment.clothes.map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="Backpack" className="w-5 h-5 text-primary" />
                  Снаряжение
                </h3>
                <ul className="space-y-2">
                  {equipment.gear.map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="Package" className="w-5 h-5 text-primary" />
                  Упаковка
                </h3>
                <ul className="space-y-2 mb-6">
                  {equipment.packing.map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="Pill" className="w-5 h-5 text-primary" />
                  Аптечка
                </h3>
                <ul className="space-y-2">
                  {equipment.firstAid.map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="Sparkles" className="w-5 h-5 text-primary" />
                  Личная гигиена
                </h3>
                <ul className="space-y-2">
                  {equipment.hygiene.map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="FileText" className="w-5 h-5 text-primary" />
                  Документы
                </h3>
                <ul className="space-y-2">
                  {equipment.documents.map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <div className="text-center">
          <Card className="border-2 bg-primary/5">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Готовы к приключению?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Забронируйте место в группе прямо сейчас
              </p>
              <Button
                size="lg"
                className="text-lg px-8 py-6 h-auto"
                onClick={() => setShowBookingForm(true)}
              >
                Забронировать за 8 320 ₽
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Booking Form Dialog */}
      <Dialog open={showBookingForm} onOpenChange={setShowBookingForm}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">Бронирование тура</DialogTitle>
            <DialogDescription>
              Камчатка - три вулкана, 15-23 августа 2026 года
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium mb-2 block">
                Ваше имя *
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Иван Иванов"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium mb-2 block">
                Телефон *
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+7 (999) 123-45-67"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium mb-2 block">
                Email *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="ivan@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="comment" className="text-sm font-medium mb-2 block">
                Комментарий
              </label>
              <Textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                placeholder="Дополнительная информация..."
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Отправка..." : "Отправить заявку"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TourKamchatka;
