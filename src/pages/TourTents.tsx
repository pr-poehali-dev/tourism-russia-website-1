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

const TourTents = () => {
  const navigate = useNavigate();
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    tour: 'Байкал в палатках',
    comment: ''
  });

  const tourInfo = [
    { icon: "Calendar", label: "Длительность тура", value: "8 ДНЕЙ" },
    { icon: "Moon", label: "В теплых палатках", value: "7 НОЧЕЙ" },
    { icon: "FootprintsIcon", label: "Тип тура", value: "КОНЬКОВЫЙ" },
    { icon: "Users", label: "Количество", value: "ГРУППА ОТ 8 ДО 14 ЧЕЛОВЕК" },
    { icon: "UserCheck", label: "Возраст", value: "УЧАСТНИКИ ОТ 14 ЛЕТ" },
    { icon: "MapPin", label: "Город отправления", value: "ИРКУТСК" },
  ];

  const program = [
    {
      day: "1 день",
      title: "Иркутск – Хужир, 290 км на автобусе",
      description: "В 09:00 утра мы встречаемся на площади у Иркутского ж/д вокзала, загружаем вещи в микроавтобус и отправляемся к берегам самого большого пресноводного озера в мире. После 7 часов в дороге, размещаемся на турбазе в посёлке Хужир, знакомимся с участниками и, не веря своему счастью, бежим любоваться прекрасным озером Байкал. Прогуляемся до мыса Бурхан, к его знаменитой скале Шаманка и поужинаем вкуснейшим Байкальским омулем (свежим, копчёным или вяленым)."
    },
    {
      day: "2 день",
      title: "Хужир – мыс Хобой, 42 км на буханке",
      description: "Сегодня мы отправимся в путешествие до самой крайней точки острова Ольхон мыса Хобой. Поедем на «буханке», УАЗ-452. По пути заедем на несколько точек, полюбуемся сокуями и ледовыми гротами. Потом пообедаем на Хобое, заглянем за Мыс, там мы поставим лагерь. Я проведу тренировку на коньках – научу даже тех, кто думает, что не умеет кататься. Потом приготовим ужин и первый раз заночуем на льду Байкала. Предупреждаем: в первую ночь на льду многие спят очень плохо, потому что Байкал – разговорчивый, особенно во сне."
    },
    {
      day: "3 день",
      distance: "17 км",
      title: "мыс Хобой – мыс Шунтэ правый",
      description: "Идём по льду или едем на коньках (как повезёт, потому что лед не везде ровный и гладкий) вдоль острова Ольхон. Готовим, вкусно едим и ночуем в палатках."
    },
    {
      day: "4 день",
      distance: "19 км",
      title: "мыс Шунтэ правый – мыс Хара Хуштун",
      description: "Продолжаем передвигаться по льду. Помним, что вещи мы не тащим на себе. Это делают наши сани-волокуши. Вам остается только смотреть по сторонам и наслаждаться красотами. Вечером вкусный ужин под аккомпанемент собственных песен и гул Байкала. Ночуем и сладко спим в палатках."
    },
    {
      day: "5 день",
      distance: "16 км",
      title: "мыс Хуштун – мыс Ухан",
      description: "И опять по льду. Мы с вами уже тертые калачи. Двигаемся по льду на коньках или без (как повезет). Любуемся байкальскими красотами и делаем яркие фотки на льду. Ужим и сон по расписанию (ночуем в палатках). К гулу мы уже привыкшие, поэтому вторим уму дружным храпом."
    },
    {
      day: "6 день",
      distance: "19 км",
      title: "мыс Ухан",
      description: "Нет точной точки, до которой надо дойти. Вот такой вот день, да! Обсудим с вами, как далеко захотим зайти в этом деле! Просто прикинем по километражу, где будет удобнее встать."
    },
    {
      day: "7 день",
      distance: "20 км",
      title: "Сахюрта",
      description: "В этот день возвращаемся в цивилизацию. Представляете! Уже, да! Уснуть будет непросто, без ставшего родным голоса волшебного Байкала. Но что делать! Ужинаем и ночуем в с. Сахюрта на базе отдыха."
    },
    {
      day: "8 день",
      title: "Сахюрта – Иркутск, 250 км на автобусе",
      description: "Было здорово, но пора собираться домой. Утром мы прощаемся с Байкалом и загрузимся в автобус, который отвезёт нас обратно в Иркутск на ж/д вокзал. Прощай, Байкал! До новых встреч!"
    }
  ];

  const included = [
    "Все трансферы по программе на комфортном микроавтобусе только для нашей группы",
    "Работа опытного гида и его сопровождение 24 часа в сутки",
    "Проживания на базах отдыха в 3 — 4-х местных номерах в первую и последнюю ночь тура",
    "Завтраки, ужины и перекусы на льду Байкала в пеше-коньковой части маршрута приготовленное на кострах или газовых горелках (питание по пути из Иркутска в Хужир, и обратно, оплачивается самостоятельно)",
    "Входные билеты в Байкальский заповедник",
    "Переезд до м. Хобой на внедорожном автомобиле УАЗ-452",
    "Аренда саней-волокуш для переноски вещей",
    "Консультация по подбору снаряжения и покупке авиабилетов",
    "Страховка",
    "Проживание в отапливаемой палатке на льду Байкала на активной части маршрута"
  ];

  const notIncluded = [
    "Билеты на поезд/самолет до Иркутска",
    "Баня (1000-1500 руб./чел.)",
    "Возможная переправа на катере «Хивус» (в случае закрытия ледовой переправы для автомобилей, 1500 руб.)",
    "Личное снаряжение",
    "Коньки (можно взять свои или напрокат в Иркутске, 500-1000 руб/день)"
  ];

  const equipment = {
    clothes: [
      "Ботинки треккинговые зимние с утеплителем",
      "Термобельё толстое для сна",
      "Термобелье тонкое ходовое",
      "Куртка лёгкая ветрозащитная (желательно мембранная или горнолыжная)",
      "Куртка тёплая (температурный режим до -20) если горнолыжную куртку брать, то это не надо",
      "Теплая куртка на 2 размера больше, чем вы обычно носите",
      "Штаны утепленные непродуваемые",
      "Флисовая кофта 2 шт",
      "Шапка непродуваемая (винблок или шапка из плотной непродуваемой ткани)",
      "Сменное бельё",
      "Носки треккинговые или махровые (2 пары)",
      "Носки шерстяные для сна",
      "Перчатки флисовые или из виндблока",
      "Бафф теплый или шарф",
      "Балаклава или подшлемник",
      "Перчатки теплые (горнолыжные) + флисовые",
      "Купальный костюм (для бани или проруби)",
      "Тапочки или сланцы"
    ],
    gear: [
      "Спальный мешок (температура комфорта от -5 до – 10 градусов)",
      "Коврик туристический 2 шт толщиной минимум 1 см каждый",
      "Защитные наколенники",
      "Шлем (лучше всего горнолыжный с боковой защитой)",
      "Гамаши",
      "Ледоступы (рыбацкие шипы)",
      "Ёмкость для воды (лучше пластиковая бутылка)",
      "Очки (от ветра), можно горнолыжные",
      "Термос объёмом 0,5-1 литр на человека",
      "КЛМН (кружка, ложка, миска, нож)",
      "Хоба (поджопник)",
      "Фонарь налобный с запасным комплектом батареек"
    ],
    packing: [
      "Рюкзак (65-85л)",
      "Небольшой рюкзак для радиальных выходов",
      "Гидромешок для документов",
      "Несколько сумок для одежды и предметов гигиены"
    ],
    medicine: [
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
      "Солнцезащитный крем (SPF 50)",
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
      "Деньги (и карточка)",
      "Телефон",
      "Медицинская страховка",
      "Билеты или маршрутные квитанции",
      "До 500 гр. карманного перекуса (подойдут орехи, конфеты, сухофрукты, шоколад)"
    ]
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });

    setShowBookingForm(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      tour: 'Байкал в палатках',
      comment: ''
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 bg-white backdrop-blur border-b">
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-start gap-2 md:gap-3">
            <img src="https://cdn.poehali.dev/files/11-1.png" alt="Логотип" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-black text-sm sm:text-base md:text-lg leading-tight">Жизнь с рюкзаком</span>
              <span className="text-black text-xs leading-tight">авторские туры</span>
            </div>
          </div>
          <Button
            variant="ghost"
            onClick={() => navigate('/#tours')}
            className="flex items-center gap-2"
          >
            <Icon name="ArrowLeft" size={20} />
            <span className="hidden sm:inline">На главную</span>
          </Button>
        </div>
      </header>

      <div className="relative h-[40vh] md:h-[60vh] overflow-hidden">
        <img
          src="https://cdn.poehali.dev/files/IMG_5107.jpg"
          alt="Байкал в палатках"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto">
            <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-2">
              Байкал в палатках
            </h1>
            <p className="text-lg md:text-xl text-white/90">комфортные отапливаемые палатки</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6">О путешествии</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {tourInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <Icon name={info.icon as any} size={24} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-bold text-sm text-muted-foreground mb-1">{info.label}</div>
                        <div className="font-semibold">{info.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6">Программа тура</h2>
                <div className="space-y-6">
                  {program.map((day, index) => (
                    <div key={index} className="border-l-4 border-primary pl-6 py-2">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-heading font-bold text-xl">{day.day}</h3>
                        {day.distance && (
                          <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                            Дистанция: {day.distance}
                          </span>
                        )}
                      </div>
                      {day.title && <p className="text-sm font-semibold text-muted-foreground mb-2">{day.title}</p>}
                      <p className="text-muted-foreground leading-relaxed">{day.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6">Стоимость тура</h2>
                <div className="bg-primary/5 p-6 rounded-lg mb-6">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">61 000 ₽</div>
                  <p className="text-muted-foreground">за человека</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Icon name="Check" className="text-green-600" size={20} />
                      В стоимость входит:
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {included.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Icon name="X" className="text-red-600" size={20} />
                      Не входит в стоимость:
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {notIncluded.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="X" size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t text-sm text-muted-foreground">
                  <div>
                    <h3 className="font-bold text-base mb-2 text-foreground">Как забронировать</h3>
                    <p>Для бронирования места в группе нужно внести оплату в размере 10% от стоимости тура.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-2 text-foreground">Билеты</h3>
                    <p className="mb-2"><strong>Важно!</strong> Согласовывайте покупку билетов с гидами.</p>
                    <p className="mb-2">Стоимость перелёта Москва-Иркутск примерно 30 000 рублей туда-обратно. Обратите внимание, что в цену перелёта обязательно должен быть включён багаж.</p>
                    <p className="mb-2">Встреча участников состоится в 09:00 в первый день программы на площади у Иркутского ж/д вокзала.</p>
                    <p>Обратные билеты нужно брать не раньше 19:00 в заключительный день программы.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6">Что взять с собой</h2>
              
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Icon name="AlertTriangle" size={20} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-muted-foreground">
                      <p className="font-semibold mb-1 text-foreground">Важно!</p>
                      <p>Каждый элемент в списке вещей имеет огромное значение в походе.</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-base mb-3 flex items-center gap-2">
                      <Icon name="Shirt" size={18} className="text-primary" />
                      Одежда
                    </h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {equipment.clothes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3 flex items-center gap-2">
                      <Icon name="Wrench" size={18} className="text-primary" />
                      Снаряжение
                    </h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {equipment.gear.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3 flex items-center gap-2">
                      <Icon name="Package" size={18} className="text-primary" />
                      Упаковка вещей
                    </h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {equipment.packing.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3 flex items-center gap-2">
                      <Icon name="HeartPulse" size={18} className="text-primary" />
                      Аптечка
                    </h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {equipment.medicine.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3 flex items-center gap-2">
                      <Icon name="Sparkles" size={18} className="text-primary" />
                      Личная гигиена
                    </h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {equipment.hygiene.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3 flex items-center gap-2">
                      <Icon name="FileText" size={18} className="text-primary" />
                      Документы и разное
                    </h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {equipment.documents.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mt-6">
                  <div className="flex items-start gap-3">
                    <Icon name="AlertCircle" size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-muted-foreground">
                      <p className="font-semibold mb-1 text-foreground">Внимание!</p>
                      <p>План похода может измениться из-за неблагоприятных погодных условий.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="lg:sticky lg:top-24">
              <CardContent className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Стоимость тура</div>
                  <div className="text-4xl font-bold text-primary mb-4">61 000 ₽</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} className="text-muted-foreground" />
                      <span className="text-muted-foreground">8 дней / 7 ночей</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={16} className="text-muted-foreground" />
                      <span className="text-muted-foreground">25 февраля – 4 марта 2026 года</span>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={() => setShowBookingForm(true)}
                  className="w-full transition-all hover:scale-105 hover:shadow-lg"
                  size="lg"
                >
                  Забронировать тур
                </Button>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Предоплата всего 10%</div>
                  <div className="font-bold text-lg text-primary">6 100 ₽</div>
                </div>

                <div className="border-t pt-6 space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={18} className="text-primary" />
                    <a href="tel:+79655615153" className="hover:text-primary transition-colors">
                      +7 965 561-51-53
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={18} className="text-primary" />
                    <a href="mailto:rukzaklife@mail.ru" className="hover:text-primary transition-colors">
                      rukzaklife@mail.ru
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Dialog open={showBookingForm} onOpenChange={setShowBookingForm}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading">
              Забронировать тур
            </DialogTitle>
            <DialogDescription>
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-medium mb-2 block">Ваше имя</label>
              <Input 
                placeholder="Иван Иванов" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Телефон</label>
              <Input 
                type="tel" 
                placeholder="+7 (999) 123-45-67" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <Input 
                type="email" 
                placeholder="example@mail.ru" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Комментарий (необязательно)</label>
              <Textarea 
                placeholder="Расскажите о ваших пожеланиях..." 
                className="min-h-[80px]"
                value={formData.comment}
                onChange={(e) => setFormData({...formData, comment: e.target.value})}
              />
            </div>
            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TourTents;