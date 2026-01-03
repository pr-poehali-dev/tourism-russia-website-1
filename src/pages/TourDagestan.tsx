import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import UniversalBookingDialog from "@/components/booking/UniversalBookingDialog";

const TourDagestan = () => {
  const navigate = useNavigate();
  const [showBookingForm, setShowBookingForm] = useState(false);

  const tourInfo = [
    { icon: "Calendar", label: "Длительность тура", value: "7 ДНЕЙ" },
    { icon: "Moon", label: "Ночевки", value: "6 НОЧЕЙ в палатках" },
    { icon: "FootprintsIcon", label: "Тип тура", value: "ПЕШИЙ" },
    { icon: "Signal", label: "Сложность", value: "3 ИЗ 5 — подходит новичкам" },
    { icon: "Users", label: "Количество", value: "ГРУППА ОТ 8 ДО 14 ЧЕЛОВЕК" },
    { icon: "UserCheck", label: "Возраст", value: "УЧАСТНИКИ ОТ 14 ЛЕТ" },
    { icon: "MapPin", label: "Город отправления", value: "МАХАЧКАЛА" },
  ];

  const program = [
    {
      day: "1 день",
      distance: "На авто: 150 км. Пешком: 15 км. Перепад высот: -650 м",
      title: "Махачкала - Гуниб. Гунибская крепость и гора Маяк",
      description: "Утром встречаемся на ЖД вокзале Махачкалы и едем в село Гуниб. Там на территории природного парка Верхний Гуниб поставим наш палаточный лагерь и прогуляемся на гору Маяк. Это высшая точка Гунибского плато. Вечером посидим у костра и приготовим сытный и вкусный ужин."
    },
    {
      day: "2 день",
      distance: "Пешком: 16 км. Перепад высот: -900 м",
      title: "Гуниб - Карадахская теснина",
      description: "После завтрака снимаем наш лагерь, надеваем на себя рюкзаки и идем вниз. Сегодня нам надо будет сбросить 900 м по вертикали. Пройдем через царский тоннель в Карадахскую теснину. Вечером, на выходе из теснины, поставим наш лагерь."
    },
    {
      day: "3 день",
      distance: "Пешком: 18 км. Перепад высот: +700 м",
      title: "Карадахская теснина - Гоготль",
      description: "После завтрака собираем лагерь и идем к селу Гоготль. Название села значит «среди камней». Там ставим лагерь на две ночи."
    },
    {
      day: "4 день",
      distance: "Пешком: 13 км. Перепад высот: +900 м; -900 м",
      title: "Седло гора",
      description: "После завтрака идем на гору Седло. Но на вершину не поднимаемся, у нас просто радиальный выход. Просто гуляем. Открывается красивая панорама на гору Маяк, Богохский хребет, Хунзахское плато. Красивое видовое место, делаем фотки и наслаждаемся видами. Тут везде летают орлы, но к тому моменту, когда мы их там увидим, это будет для нас не в диковинку, если что! Отдыхаем и вкусно ужинаем."
    },
    {
      day: "5 день",
      distance: "Пешком: 16 км. Перепад высот: +400 м",
      title: "Гоготль - Зиуриб",
      description: "Продолжаем наш путь по Кавказской тропе через горы, села и даже немного через леса. Переходим из села Гоготль в село Зиуриб. Средняя высота 1500 м над уровнем моря (где мы будем ходить). Ставим лагерь, ужинаем и укладываемся спать."
    },
    {
      day: "6 день",
      distance: "Пешком: 20 км. Перепад высот: +300 м; -600 м",
      title: "Зиуриб - Гоор",
      description: "Из Зиуриба в Гоор через село Кахиб по альпийским лугам и сосновым лесам. Самый длинный день. В Гооре нас ждет офигенный закат, замутим бомбический ужин!"
    },
    {
      day: "7 день",
      distance: "На авто 150 км",
      title: "Сулакский каньон и возвращение в Махачкалу",
      description: "После завтрака выезжаем в город. На обратном пути мы заедем на смотровую площадку Сулакского каньона, в котором летают орлы, на фоне синей ленты реки текущей в глубоком ущелье. Это самая посещаемая локация в Дагестане!"
    }
  ];

  const equipment = [
    {
      category: "Одежда",
      items: [
        "Ботинки треккинговые (с фиксацией голеностопа и толстой подошвой)",
        "Сандалии или кроссовки для лагеря (максимально лёгкие)",
        "Термобельё (средней толщины)",
        "Куртка лёгкая ветрозащитная (желательно мембрана)",
        "Дождевик",
        "Куртка тёплая (желательно пуховая)",
        "Флисовая кофта",
        "Футболки 2-3 шт. (синтетические)",
        "Рубашка с длинным рукавом",
        "Штаны ходовые (быстросохнущие, ветрозащитные)",
        "Сменное бельё",
        "Носки треккинговые 2-3 пары",
        "Носки шерстяные для сна",
        "Перчатки флисовые или из виндблока",
        "Перчатки х/б для работы с костром",
        "Купальник/плавки",
        "Гамаши"
      ]
    },
    {
      category: "Снаряжение",
      items: [
        "Рюкзак объемом 20-30 л для радиальных выходов",
        "Ёмкость для воды (лучше пластиковая бутылка)",
        "Солнцезащитные очки",
        "Бафф (бандана) или кепка",
        "Термос объёмом 0,5-1 литр на человека",
        "Зажигалка",
        "Пенка средней толщины",
        "Спальник (с t-комфорта 0,-5)",
        "КЛМН (кружка, ложка, миска, нож)",
        "Хоба (поджопник)",
        "Фонарь налобный с запасным комплектом батареек",
        "Палки треккинговые"
      ]
    },
    {
      category: "Упаковка вещей",
      items: [
        "Рюкзак (75-90 л) с накидкой от дождя",
        "Гидромешок для документов",
        "Несколько сумок для одежды и предметов гигиены"
      ]
    },
    {
      category: "Аптечка",
      items: [
        "Обезболивающее",
        "Индивидуальные препараты",
        "2 эластичных бинта",
        "Ацикловир",
        "Таблетки от укачивания",
        "Капли от насморка",
        "Таблетки от горла и кашля",
        "Средства от хронических заболеваний"
      ]
    },
    {
      category: "Личная гигиена",
      items: [
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
      ]
    },
    {
      category: "Документы и разное",
      items: [
        "Паспорт",
        "Деньги (и карточка)",
        "Телефон",
        "Медицинская страховка",
        "Билеты или маршрутные квитанции",
        "До 500 гр. карманного перекуса (подойдут орехи, конфеты, сухофрукты, шоколад)"
      ]
    }
  ];

  const included = [
    "Работа опытного гида и его сопровождение 24 часа в сутки",
    "Все трансферы по программе только для нашей группы",
    "Трёхразовое питание на маршруте (завтрак, обеденный перекус, ужин), приготовленное на костре или горелках",
    "Общественное снаряжение (палатки, горелки, костровое)",
    "Связь и навигация",
    "Общественная аптечка",
    "Регистрация группы в МЧС",
    "Консультация по подбору снаряжения и покупке авиабилетов",
    "Страховка"
  ];

  const notIncluded = [
    "Авиаперелет до Махачкалы и обратно",
    "Личное снаряжение (рюкзак, спальник, коврик и т.д.)",
    "Личные расходы"
  ];

  return (
    <div className="min-h-screen">
      <header className="bg-white border-b sticky top-0 z-50">
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
          src="https://cdn.poehali.dev/files/photo_2025-12-23_11-28-42.jpg"
          alt="Дагестан: Кавказская тропа по краю башен"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto">
            <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-2">Дагестан: Кавказская тропа по краю башен</h1>
            <p className="text-lg md:text-xl text-white/90">1-7 мая 2026 г</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">О путешествии</h2>
                <p className="text-base md:text-lg leading-relaxed">
                  Путешествие по Дагестану — это возможность оживить отпуск, окунувшись в удивительный мир гор, древних аулов и красивейшей природы. Если вы хотите, чтобы отпуск запомнился надолго, погнали в Дагестан! Будем напитываться шикарными видами, кавказскими традициями и дегустировать местную еду у гостеприимных жителей.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6">Программа тура</h2>
                <div className="space-y-6">
                  {program.map((day, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4 py-2">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        <h3 className="font-heading font-bold text-lg md:text-xl">{day.day}</h3>
                        <span className="text-sm text-muted-foreground">{day.distance}</span>
                      </div>
                      <h4 className="font-semibold text-base mb-2">{day.title}</h4>
                      <p className="text-sm md:text-base text-muted-foreground">{day.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6">Что взять с собой</h2>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
                  <p className="text-sm font-semibold text-amber-900">
                    <Icon name="AlertTriangle" size={20} className="inline mr-2" />
                    Важно! Каждый элемент в списке вещей имеет огромное значение в походе. Если ваше снаряжение не будет соответствовать этому перечню, инструктор, для сохранения вашей безопасности, может отстранить вас от маршрута или его части.
                  </p>
                </div>
                <div className="space-y-6">
                  {equipment.map((section, index) => (
                    <div key={index}>
                      <h3 className="font-heading font-bold text-lg md:text-xl mb-3">{section.category}</h3>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm md:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                  <p className="text-sm text-blue-900">
                    <Icon name="Info" size={20} className="inline mr-2" />
                    <strong>Внимание!</strong> План похода может измениться из-за неблагоприятных погодных условий, общего физического состояния группы и других непредвиденных факторов, препятствующих прохождению маршрута.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6">Что включено в стоимость</h2>
                <div className="space-y-3 mb-8">
                  {included.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Icon name="CheckCircle" size={24} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
                <h3 className="font-heading font-bold text-xl mb-4">Не включено в стоимость</h3>
                <div className="space-y-3">
                  {notIncluded.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Icon name="X" size={24} className="text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">Как забронировать</h2>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 rounded-lg p-6 mb-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="bg-primary text-primary-foreground rounded-full p-2">
                      <Icon name="Wallet" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Предоплата для бронирования</h3>
                      <p className="text-3xl font-bold text-primary">13 680 ₽</p>
                      <p className="text-sm text-muted-foreground mt-1">30% от стоимости тура</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="CheckCircle" size={16} className="text-green-600" />
                      <span>Остаток <strong>31 920 ₽</strong> оплачивается гиду в первый день похода</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Shield" size={16} className="text-blue-600" />
                      <span>Ваше место гарантировано после внесения предоплаты</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3 text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Нажмите кнопку «Забронировать тур» и заполните форму</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Мы свяжемся с вами для подтверждения и отправим реквизиты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>После оплаты предоплаты вы получите подтверждение бронирования</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">Билеты</h2>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
                  <p className="text-sm font-semibold text-amber-900">
                    <Icon name="AlertTriangle" size={20} className="inline mr-2" />
                    Важно! Согласовывайте покупку билетов с гидом:
                  </p>
                </div>
                <ul className="space-y-3 text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <Icon name="Clock" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Выезд из Махачкалы запланирован на <strong>9:00 первого дня</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Clock" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Обратный отъезд можно планировать <strong>после 19:00 заключительного дня</strong>.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl md:text-4xl font-bold">45 600 ₽</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Стоимость тура на человека</p>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <p className="text-sm font-semibold text-green-900 mb-2">
                      <Icon name="Info" size={18} className="inline mr-2" />
                      Для бронирования
                    </p>
                    <p className="text-sm text-green-800">
                      Предоплата: <strong>13 680 ₽</strong> (30%)
                    </p>
                    <p className="text-xs text-green-700 mt-1">
                      Остаток оплачивается гиду в первый день
                    </p>
                  </div>

                  <div className="space-y-4">
                    {tourInfo.map((info, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Icon name={info.icon as any} size={20} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wide">{info.label}</p>
                          <p className="text-sm font-medium mt-0.5">{info.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="w-full rounded-full text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3"
                    size="lg"
                    onClick={() => setShowBookingForm(true)}
                  >
                    Забронировать тур
                  </Button>

                  <div className="pt-4 border-t">
                    <p className="text-xs text-muted-foreground mb-3">Остались вопросы? Свяжитесь с нами:</p>
                    <div className="space-y-2">
                      <a href="https://t.me/zhiznisrukzakom" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                        <Icon name="Send" size={18} />
                        <span>Telegram</span>
                      </a>
                      <a href="https://wa.me/79265543880" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                        <Icon name="Phone" size={18} />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <UniversalBookingDialog
        open={showBookingForm}
        onOpenChange={setShowBookingForm}
        tourName="Дагестан: Кавказская тропа по краю башен"
        tourDates="1-7 мая 2026 г"
        tourPrice="45 600 ₽"
      />
    </div>
  );
};

export default TourDagestan;