import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import UniversalBookingDialog from "@/components/booking/UniversalBookingDialog";

const TourDetails = () => {
  const navigate = useNavigate();
  const [showBookingForm, setShowBookingForm] = useState(false);

  const tourInfo = [
    { icon: "Calendar", label: "Длительность тура", value: "7 ДНЕЙ" },
    { icon: "Moon", label: "На туристических базах", value: "6 НОЧЕЙ" },
    { icon: "FootprintsIcon", label: "Тип тура", value: "КОНЬКОВЫЙ/ПЕШИЙ" },
    { icon: "Users", label: "Количество", value: "ГРУППА ОТ 8 ДО 14 ЧЕЛОВЕК" },
    { icon: "UserCheck", label: "Возраст", value: "УЧАСТНИКИ ОТ 14 ЛЕТ" },
    { icon: "MapPin", label: "Город отправления", value: "ИРКУТСК" },
  ];

  const reasons = [
    "Побывать на глубочайшем озере планеты",
    "Прокатиться на коньках по самому большому и гладкому катку в мире",
    "Своими глазами увидеть чистейший байкальский лёд с его пузырьками, трещинами и всеми оттенками синего",
    "Услышать, о чём рассказывает Байкал булькающим и звенящим голосом",
    "Полакомиться вкуснейшим байкальским омулем — вяленым, сушёным, свежим — на любой вкус",
    "Узнать, чем отличаются «буза» от «позы»",
    "Помедитировать у буддийской ступы на одиноком острове и загадать желание у главного божества Байкала",
    "Вставать по ночам и любоваться, как отражается млечный путь в зеркальной глади Байкала"
  ];

  const program = [
    {
      day: "1 день",
      description: "В 09:00 утра мы встречаемся на площади у Иркутского ж/д вокзала, загружаем вещи в микроавтобус и отправляемся к берегам самого большого пресноводного озера в мире. После 7 часов в дороге, размещаемся на турбазе в посёлке Хужир, знакомимся с участниками и, не веря своему счастью, бежим любоваться прекрасным замёрзшим озером Байкал 🙂 Прогуляемся до мыса Бурхан, к его знаменитой скале Шаманка и поужинаем вкуснейшим Байкальским омулем (свежим, копчёным или вяленым)."
    },
    {
      day: "2 день",
      description: "Сегодня мы отправимся в путешествие до самой крайней точки острова Ольхон мыса Хобой и одной из красивейших – мыса Саган-Хушун. Поедем на «буханке», УАЗ-452, которая быстро и весело довезёт нас до точки назначения. На Саган-Хушуне полазаем по огромным ледяным гротам, а около Хобоя устроим фотосессию в огромном поле с торосами – нагромождениями обломков льда. Во второй половине дня вернёмся обратно в Хужир и устроим тренировочный выход на лёд, чтобы познакомиться со снаряжением. Если вы чувствуете себя на коньках неуверенно, то не волнуйтесь – сделаем всё от нас зависящее, чтобы научить вас кататься)"
    },
    {
      day: "3 день",
      distance: "13 км",
      description: "Сегодня первый полноценный ходовой день: просыпаемся, плотно завтракаем, пакуем рюкзаки и отправляемся в посёлок Ялга. Нас ждет 13 километров на коньках по гладкому синему льду! По приезде селимся на базу отдыха и готовим обед. Во второй половине дня гуляем по окрестностям и провожаем закат!"
    },
    {
      day: "4 день",
      distance: "28 км",
      description: "Проснувшись как можно раньше, отправляемся к нашей новой цели – острову Огой, самому крупному в Малом море. Добравшись до острова, посетим его знаменитый мыс Дракон, поднимемся к одному из известнейших буддийских символов Байкала — Ступе Просветления и увидим огромные ледяные гроты. После продолжим наш путь до поселка Сарма и заночуем там на турбазе."
    },
    {
      day: "5 день",
      distance: "10 км",
      description: "Финальный переход с нашими рюкзаками! Позавтракав, отправляемся в посёлок Сахюрта. Полюбуемся скалистыми берегами, увидим небольшие островки с ледяными гротами по пути. Во второй половине дня заселимся на уютную турбазу, где проведём оставшиеся 2 дня."
    },
    {
      day: "6 день",
      distance: "14 км",
      description: "Оставляем все вещи на турбазе и через пролив Ольхонские ворота выезжаем в Большое море Байкала. Нас ждут километры гладкого льда, сотни фотографий и чувство абсолютной свободы! Прокатимся вдоль диких скалистых берегов острова Ольхон, полюбуемся знаменитыми байкальскими пузыриками. К вечеру вернёмся на турбазу и отпразднуем окончание похода посиделками в жаркой баньке!"
    },
    {
      day: "7 день",
      description: "Было здорово, но пора собираться домой. Утром мы прощаемся с Байкалом и садимся в автобус, который отвезёт нас обратно в Иркутск на ж/д вокзал. Прощай, Байкал! До новых встреч!"
    }
  ];

  const included = [
    "Все трансферы по программе на комфортном микроавтобусе только для нашей группы",
    "Работа опытного гида и его сопровождение 24 часа в сутки",
    "Проживания на базах отдыха в 3 — 4-х местных номерах",
    "Питание на базах отдыха и перекусы на льду Байкала (питание по пути из Иркутска в Хужир, и обратно, оплачивается самостоятельно)",
    "Входные билеты в Байкальский заповедник",
    "Переезд до м. Хобой и обратно на внедорожном автомобиле УАЗ-452",
    "Аренда саней-волокуш для переноски вещей",
    "Консультация по подбору снаряжения и покупке авиабилетов",
    "Страховка"
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
      "Термобельё (толстое)",
      "Куртка лёгкая ветрозащитная (желательно мембранная или горнолыжная)",
      "Куртка тёплая (температурный режим до -20)",
      "Теплая куртка на 2 размера больше, чем вы обычно носите",
      "Штаны утепленные непродуваемые",
      "Флисовая кофта",
      "Шапка непродуваемая (винблок или шапка из плотной непродуваемой ткани)",
      "Футболки 2-3 шт. (синтетические)",
      "Рубашка с длинным рукавом",
      "Штаны ходовые (быстросохнущие, ветрозащитные)",
      "Сменное бельё",
      "Носки треккинговые или махровые (2 пары)",
      "Носки шерстяные",
      "Перчатки флисовые или из виндблока",
      "Бафф теплый или шарф",
      "Балаклава или подшлемник",
      "Перчатки теплые (горнолыжные) + флисовые по желанию",
      "Купальный костюм (для бани или проруби)",
      "Тапочки или сланцы"
    ],
    gear: [
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

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 bg-white backdrop-blur border-b">
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity"
          >
            <img src="https://cdn.poehali.dev/files/11-1.png" alt="Логотип" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-black text-sm sm:text-base md:text-lg leading-tight">Жизнь с рюкзаком</span>
              <span className="text-black text-xs leading-tight">авторские туры</span>
            </div>
          </button>
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

      <div className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/files/2025-12-28_12-32-05.png)',
            backgroundPosition: 'center 25%'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 md:px-12 pb-12 md:pb-16">
            <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-3">
              Коньковый поход по зимнему Байкалу
            </h1>
            <p className="text-lg md:text-xl text-white/90">можно пешком, если нет желания на коньках</p>
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
                <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
                  Присоединяйтесь к путешествию на Байкал, чтобы:
                </h2>
                <ul className="space-y-3">
                  {reasons.map((reason, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-base md:text-lg">{reason}</span>
                    </li>
                  ))}
                </ul>
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
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">75 000 ₽</div>
                  <p className="text-muted-foreground">за человека</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Icon name="Check" className="text-green-600" size={20} />
                      В стоимость входит:
                    </h3>
                    <ul className="space-y-2">
                      {included.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-green-600 mt-1">✅</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Icon name="X" className="text-red-600" size={20} />
                      В стоимость не входит:
                    </h3>
                    <ul className="space-y-2">
                      {notIncluded.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-red-600 mt-1">❌</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">Как забронировать</h2>
                <p className="text-lg mb-4">Для бронирования места в группе нужно внести оплату в размере 10% от стоимости тура.</p>
                
                <h3 className="font-bold text-xl mt-6 mb-3">Билеты</h3>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                  <p className="font-semibold text-yellow-800 mb-2">Важно! Согласовывайте покупку билетов с организатором.</p>
                </div>
                <p className="mb-4">Стоимость перелёта Москва-Иркутск примерно 30 000 рублей туда-обратно. Обратите внимание, что в цену перелёта обязательно должен быть включён багаж.</p>
                <p className="mb-4">Встреча участников состоится в <strong>09:00 в первый день программы</strong> на площади у Иркутского ж/д вокзала. Прибытие (на поезде) можно пристроить к этому времени, на самолёте – минимум за 2 часа до отправления.</p>
                <p>Обратные билеты нужно брать <strong>не раньше 19:00</strong> в заключительный день программы.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">Что взять с собой</h2>
                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                  <p className="font-semibold text-red-800">
                    Важно! Каждый элемент в списке вещей имеет огромное значение в походе. Если ваше снаряжение не будет соответствовать этому перечню, инструктор, для сохранения вашей безопасности, может отстранить вас от маршрута или его части.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                      <Icon name="ShirtIcon" size={24} className="text-primary" />
                      Одежда
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {equipment.clothes.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                      <Icon name="Backpack" size={24} className="text-primary" />
                      Снаряжение
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {equipment.gear.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                      <Icon name="Package" size={24} className="text-primary" />
                      Упаковка вещей
                    </h3>
                    <ul className="space-y-2">
                      {equipment.packing.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                      <Icon name="HeartPulse" size={24} className="text-primary" />
                      Аптечка
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {equipment.medicine.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                      <Icon name="Sparkles" size={24} className="text-primary" />
                      Личная гигиена
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {equipment.hygiene.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                      <Icon name="FileText" size={24} className="text-primary" />
                      Документы и разное
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {equipment.documents.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-yellow-50">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <Icon name="AlertTriangle" size={32} className="text-yellow-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Внимание!</h3>
                    <p className="text-muted-foreground">
                      План похода может измениться из-за неблагоприятных погодных условий, общего физического состояния группы и других непредвиденных факторов, препятствующих прохождению маршрута.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-sm text-muted-foreground mb-2">Даты тура</div>
                    <div className="font-bold text-lg">16-22 февраля</div>
                    <div className="font-bold text-lg">6-12 марта</div>
                  </div>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-primary mb-2">75 000 ₽</div>
                    <div className="text-sm text-muted-foreground">за человека</div>
                  </div>
                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all hover:scale-105 hover:shadow-lg"
                    onClick={() => {
                      setShowBookingForm(true);
                      if (typeof window !== 'undefined' && (window as any).ym) {
                        (window as any).ym(106027453, 'reachGoal', 'booking_button_click');
                      }
                    }}
                  >
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Забронировать место
                  </Button>
                  <div className="mt-4 text-center">
                    <div className="text-sm text-muted-foreground">Предоплата всего 10%</div>
                    <div className="font-bold text-lg text-primary">7 500 ₽</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Контакты</h3>
                  <div className="space-y-3">
                    <a href="tel:+79655615153" className="flex items-center gap-3 hover:text-primary transition-colors">
                      <Icon name="Phone" size={20} />
                      <span>+7 965 561-51-53</span>
                    </a>
                    <a href="mailto:rukzaklife@mail.ru" className="flex items-center gap-3 hover:text-primary transition-colors">
                      <Icon name="Mail" size={20} />
                      <span>rukzaklife@mail.ru</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <UniversalBookingDialog
        open={showBookingForm}
        onOpenChange={setShowBookingForm}
        defaultTour="Коньковый поход по зимнему Байкалу - 75 000 ₽"
      />
    </div>
  );
};

export default TourDetails;