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
                    <div key={index} className="border-l-4 border-primary pl-6 py-2">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-heading font-bold text-xl">{day.day}</h3>
                        {day.distance && (
                          <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                            {day.distance}
                          </span>
                        )}
                      </div>
                      <h4 className="font-semibold text-base mb-2">{day.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{day.description}</p>
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
                <ul className="space-y-3 text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Для бронирования места нужно внести предоплату в размере <strong>10% от стоимости тура (4 560 ₽)</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Остальная сумма оплачивается гиду в день начала тура.</span>
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
            <div className="sticky top-24 space-y-6">
              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-sm text-muted-foreground mb-2">Даты тура</div>
                    <div className="font-bold text-lg">1-7 мая 2026 г</div>
                  </div>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-primary mb-2">45 600 ₽</div>
                    <div className="text-sm text-muted-foreground">за человека</div>
                  </div>
                  <button
                    className="relative inline-flex items-center justify-center bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 hover:from-orange-600 hover:via-orange-500 hover:to-orange-600 text-white font-bold text-base px-6 py-3 rounded-lg transition-all hover:scale-105 shadow-lg overflow-hidden mx-auto"
                    onClick={() => setShowBookingForm(true)}
                  >
                    <span className="relative z-10 whitespace-nowrap">
                      Забронировать место
                    </span>
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent shine-effect"></span>
                  </button>
                  <div className="mt-4 text-center">
                    <div className="text-sm text-muted-foreground">Предоплата всего 10%</div>
                    <div className="font-bold text-lg text-primary">4 560 ₽</div>
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
        tourName="Дагестан: Кавказская тропа по краю башен"
        tourDates="1-7 мая 2026 г"
        tourPrice="45 600 ₽"
      />
    </div>
  );
};

export default TourDagestan;