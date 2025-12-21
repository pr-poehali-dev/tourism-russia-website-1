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
      title: "мыс Хобой – мыс Шунтэ правый, 17 км",
      description: "Идём по льду или едем на коньках (как повезёт, потому что лед не везде ровный и гладкий) вдоль острова Ольхон. Готовим, вкусно едим и ночуем в палатках."
    },
    {
      day: "4 день",
      title: "мыс Шунтэ правый – мыс Хара Хуштун, 19 км",
      description: "Продолжаем передвигаться по льду. Помним, что вещи мы не тащим на себе. Это делают наши сани-волокуши. Вам остается только смотреть по сторонам и наслаждаться красотами. Вечером вкусный ужин под аккомпанемент собственных песен и гул Байкала. Ночуем и сладко спим в палатках."
    },
    {
      day: "5 день",
      title: "мыс Хуштун – мыс Ухан, 16 км",
      description: "И опять по льду. Мы с вами уже тертые калачи. Двигаемся по льду на коньках или без (как повезет). Любуемся байкальскими красотами и делаем яркие фотки на льду. Ужим и сон по расписанию (ночуем в палатках). К гулу мы уже привыкшие, поэтому вторим уму дружным храпом."
    },
    {
      day: "6 день",
      title: "мыс Ухан, 19 км",
      description: "Нет точной точки, до которой надо дойти. Вот такой вот день, да! Обсудим с вами, как далеко захотим зайти в этом деле! Просто прикинем по километражу, где будет удобнее встать."
    },
    {
      day: "7 день",
      title: "Сахюрта, 20 км",
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
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <Icon name="ArrowLeft" size={20} />
            <span className="hidden sm:inline">Назад к турам</span>
          </Button>
          <h1 className="text-lg md:text-xl font-bold text-primary">Байкал в палатках</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tourInfo.map((item, idx) => (
                  <Card key={idx} className="border-2 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name={item.icon} size={24} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        <p className="font-semibold text-sm">{item.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary flex items-center gap-3">
                <Icon name="Map" size={28} />
                Программа тура
              </h2>
              <div className="space-y-6">
                {program.map((day, idx) => (
                  <Card key={idx} className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2">{day.day}</h3>
                      <p className="text-sm font-semibold text-gray-600 mb-3">{day.title}</p>
                      <p className="text-gray-700 leading-relaxed">{day.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary flex items-center gap-3">
                <Icon name="DollarSign" size={28} />
                Стоимость тура
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-2 border-green-500">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-700">
                      <Icon name="Check" size={24} />
                      Включено в стоимость
                    </h3>
                    <ul className="space-y-2">
                      {included.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="Plus" size={16} className="text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-orange-500">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-700">
                      <Icon name="X" size={24} />
                      Не включено в стоимость
                    </h3>
                    <ul className="space-y-2">
                      {notIncluded.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="Minus" size={16} className="text-orange-600 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-primary/5 border-2 border-primary mb-8">
                <CardContent className="p-6 text-center">
                  <p className="text-3xl font-bold text-primary mb-2">61 000 ₽</p>
                  <p className="text-muted-foreground">за человека</p>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-blue-900">Как забронировать</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    Для бронирования места в группе нужно внести оплату в размере 10% от стоимости тура.
                  </p>
                  <h3 className="font-bold text-lg mb-3 text-blue-900">Билеты</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Важно!</strong> Согласовывайте покупку билетов с гидами.
                  </p>
                  <p className="text-sm text-gray-700 mb-2">
                    Стоимость перелёта Москва-Иркутск примерно 30 000 рублей туда-обратно. Обратите внимание, что в цену перелёта обязательно должен быть включён багаж.
                  </p>
                  <p className="text-sm text-gray-700 mb-2">
                    Встреча участников состоится в 09:00 в первый день программы на площади у Иркутского ж/д вокзала. Прибытие (на поезде) можно пристроить к этому времени, на самолёте – минимум за 2 часа до отправления. В Иркутск также можно прилететь за день до начала путешествия, чтобы погулять по городу, докупить недостающее снаряжение и хорошо выспаться перед отправлением на Байкал.
                  </p>
                  <p className="text-sm text-gray-700">
                    Обратные билеты нужно брать не раньше 19:00 в заключительный день программы.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary flex items-center gap-3">
                <Icon name="Backpack" size={28} />
                Что взять с собой
              </h2>
              
              <Card className="bg-yellow-50 border-yellow-200 mb-6">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Icon name="AlertTriangle" size={24} className="text-yellow-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">
                      <p className="font-semibold mb-2 text-yellow-900">Важно!</p>
                      <p>Каждый элемент в списке вещей имеет огромное значение в походе. Если ваше снаряжение не будет соответствовать этому перечню, инструктор, для сохранения вашей безопасности, может отстранить вас от маршрута или его части.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <Icon name="Shirt" size={20} className="text-primary" />
                      Одежда
                    </h3>
                    <ul className="space-y-2">
                      {equipment.clothes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="Dot" size={16} className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <Icon name="Wrench" size={20} className="text-primary" />
                      Снаряжение
                    </h3>
                    <ul className="space-y-2">
                      {equipment.gear.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="Dot" size={16} className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <Icon name="Package" size={20} className="text-primary" />
                      Упаковка вещей
                    </h3>
                    <ul className="space-y-2">
                      {equipment.packing.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="Dot" size={16} className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <Icon name="HeartPulse" size={20} className="text-primary" />
                      Аптечка
                    </h3>
                    <ul className="space-y-2">
                      {equipment.medicine.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="Dot" size={16} className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <Icon name="Sparkles" size={20} className="text-primary" />
                      Личная гигиена
                    </h3>
                    <ul className="space-y-2">
                      {equipment.hygiene.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="Dot" size={16} className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <Icon name="FileText" size={20} className="text-primary" />
                      Документы и разное
                    </h3>
                    <ul className="space-y-2">
                      {equipment.documents.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="Dot" size={16} className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-orange-50 border-orange-200 mt-6">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Icon name="AlertCircle" size={24} className="text-orange-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">
                      <p className="font-semibold mb-2 text-orange-900">Внимание!</p>
                      <p>План похода может измениться из-за неблагоприятных погодных условий, общего физического состояния группы и других непредвиденных факторов, препятствующих прохождению маршрута.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="space-y-6 lg:sticky lg:top-24">
              <Card className="border-2 border-primary shadow-lg">
                <CardContent className="p-6 space-y-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary mb-2">61 000 ₽</p>
                    <p className="text-muted-foreground text-sm">за человека</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Icon name="Calendar" size={20} className="text-primary" />
                      Дата заезда
                    </h3>
                    <p className="text-sm">25 февраля – 4 марта 2026 года</p>
                  </div>

                  <Button 
                    onClick={() => setShowBookingForm(true)}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-lg"
                    size="lg"
                  >
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Забронировать место
                  </Button>

                  <div className="border-t pt-4">
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Icon name="Phone" size={20} className="text-primary" />
                      Контакты
                    </h3>
                    <div className="space-y-2 text-sm">
                      <a href="tel:+79149345678" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Icon name="Phone" size={16} />
                        +7 (914) 934-56-78
                      </a>
                      <a href="mailto:info@baykal-tours.ru" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Icon name="Mail" size={16} />
                        info@baykal-tours.ru
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Icon name="Info" size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-700">
                      <p className="font-semibold mb-2 text-blue-900">Важная информация</p>
                      <p>Для бронирования необходима предоплата 10% от стоимости тура.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Dialog open={showBookingForm} onOpenChange={setShowBookingForm}>
        <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Забронировать тур</DialogTitle>
            <DialogDescription>
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Ваше имя *</label>
              <Input
                placeholder="Иван Иванов"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Телефон *</label>
              <Input
                type="tel"
                placeholder="+7 (999) 123-45-67"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Email *</label>
              <Input
                type="email"
                placeholder="example@mail.ru"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Комментарий</label>
              <Textarea
                placeholder="Дополнительная информация или вопросы..."
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                rows={4}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                  Отправка...
                </>
              ) : (
                <>
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </>
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TourTents;
