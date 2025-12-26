import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import UniversalBookingDialog from "@/components/booking/UniversalBookingDialog";

const TourKamchatka = () => {
  const navigate = useNavigate();
  const [showBookingForm, setShowBookingForm] = useState(false);

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
      description: "Утром встречаемся в городе (о месте и времени встречи сообщим за несколько дней до начала тура), садимся в транспорт и едем к подножию вулкана Горелый. Наш путь пролегает через перевал Вилючинский, с которого при хорошей погоде открываются умопомрачительные виды камчатских пейзажей. Если позволит время, съездим в большую лавовую пещеру, в которой однажды проводился концерт симфонического оркестра. Вечером установим лагерь у подножия вулкана Горелый на берегу горного ручья. В этом лагере будем стоять две ночи."
    },
    {
      day: "2 день",
      distance: "13 км, +800/-800 м",
      title: "Восхождение на вулкан Горелый",
      description: "В этот день запланирован радиальный выход на вершину вулкана Горелый, высота которого 1829 м над уровнем моря. Пройдем вокруг двух основных кратеров и увидим фумаролы, пышащие газом. Спустимся к кратерному озеру. Самые смелые могут в нем искупаться. Смелость нужна, потому что вода в нём ледяная, и даже в конце лета в воде могут плавать льдины. Вечером возвращаемся в лагерь."
    },
    {
      day: "3 день",
      distance: "13 км, +300 м",
      title: "Подножие вулкана Горелый – подножие вулкана Мутновский",
      description: "В этот день первый из двух переходов с рюкзаками. Мы переносим наш лагерь через лавовые поля и лунные пейзажи к подножию вулкана Мутновский. Во второй половине дня встаём лагерем на берегу горного ручья. После установки лагеря пойдем смотреть ледовые пещеры (их наличие зависит от погоды в этом году)."
    },
    {
      day: "4 день",
      distance: "15-17 км, +1000/-1000 м",
      title: "Вулкан Мутновский и каньон Опасный",
      description: "В этот день у нас радиальный выход на вулкан Мутновский. Мы не достигнем вершины, потому что это целое альпинистское мероприятие. Поднимемся на край кратера, посмотрим сверху на фумаролы. После этого спустимся в каньон Опасный и посмотрим на один из самых высоких водопадов Камчатки, который подчеркивает всю масштабность этих геологических образований. После посещения каньона сходим к водопаду у домика вулканолога Вакина. Вечером вернемся в лагерь."
    },
    {
      day: "5 день",
      distance: "13 км, +200/-300 м",
      title: "Подножие Мутновского – Дачные источники",
      description: "Сегодня второй и последний наш переход с большими рюкзаками. Мы переносим наш лагерь к Мутновской ГеоЭС к термальным источникам «Дачные». Во второй половине дня мы поставим наш лагерь недалеко от малой долины гейзеров и пойдём отмокать в термальные источники. Это отличный отдых после нескольких насыщенных походных дней."
    },
    {
      day: "6 день",
      distance: "140 км на машине",
      title: "Дачные источники – подножие Авачинского вулкана",
      description: "Сегодня мы переезжаем к Авачинскому вулкану. В этот день появится связь и можно будет сообщить родственникам, что у нас всё в порядке. Заедем в магазин за продуктами и питьевой водой. Вечером приезжаем под Авачинский вулкан и ставим лагерь на две ночи."
    },
    {
      day: "7 день",
      distance: "24 км, +2100/-2100 м",
      title: "Восхождение на Авачинский вулкан",
      description: "Кульминация нашего путешествия – восхождение на вершину Авачинского вулкана (2741 м). Просыпаемся рано утром и после завтрака идём на вершину. Идти туда 6-7 часов и обратно спускаться 4-5 часов. Это восхождение не для слабаков, но мы уже натренировались в предыдущие дни, и оно не должно вызвать у нас серьёзных трудностей. Вечером возвращаемся в лагерь и идём в баню."
    },
    {
      day: "8 день",
      distance: "60 км на машине",
      title: "Тот самый пляж на Тихом океане",
      description: "После завтрака переезжаем на Халактырский пляж и встаем там лагерем на одну ночь. По пути заедем на обед в Петропавловск-Камчатский и закупимся продуктами. На ужин приготовим на костре уху из красной рыбы и поедим икру."
    },
    {
      day: "9 день",
      distance: "20 км на машине",
      title: "Возвращение в город",
      description: "Встречаем рассвет на Халактырском пляже и к обеду возвращаемся в Петропавловск-Камчатский. На этом наше путешествие заканчивается.\n\n<strong>P.S.</strong> Очень советую задержаться на Камчатке ещё на один день, чтобы принять участие в водной прогулке по океану с посещением Авачинской бухты, скал Три Брата и острова Старичков. Здесь можно увидеть морских котиков, китов и даже касаток. А ещё полакомиться ухой и свежими крабами прямо на палубе!"
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
    ]
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://functions.poehali.dev/a929cb91-0eec-4a5d-8515-46159925b0a2', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {

        
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время",
        });
        setShowBookingForm(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          tour: 'Камчатка - три вулкана',
          comment: ''
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже",
        variant: "destructive"
      });
    }
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
          src="https://cdn.poehali.dev/files/photo_2025-12-23_11-41-12.jpg"
          alt="Камчатка - три вулкана"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto">
            <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-2">Камчатка — три вулкана</h1>
            <p className="text-lg md:text-xl text-white/90">Мутновский, Горелый и Авачинский</p>
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
                
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>Камчатка — это край действующих вулканов, дымящихся фумарол и невероятных природных явлений. Этот тур даст вам уникальную возможность взойти на три самых известных вулкана полуострова и увидеть марсианские пейзажи, кислотные озера и термальные источники.</p>
                  <p>Маршрут включает восхождения на вулканы Горелый и Мутновский с их разноцветными кратерами, посещение каньона Опасный с высочайшим водопадом Камчатки, а также финальный подъем на знаменитый Авачинский вулкан высотой 2741 метр.</p>
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
                      <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: day.description }} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6">Стоимость тура</h2>
                <div className="bg-primary/5 p-6 rounded-lg mb-6">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">83 200 ₽</div>
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
                    <h3 className="font-bold text-base mb-2 text-foreground">Даты проведения</h3>
                    <p>Тур проводится с 15 по 23 августа 2026 года (9 дней / 8 ночей).</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-2 text-foreground">Как забронировать</h3>
                    <p>Для бронирования места в группе необходимо внести предоплату 8 320 ₽ (10% от стоимости).</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-2 text-foreground">Билеты</h3>
                    <p className="mb-2"><strong>Важно!</strong> Согласовывайте покупку билетов с инструктором.</p>
                    <p>Встреча участников состоится в первый день похода утром в Петропавловске-Камчатском.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6">Что взять с собой</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Icon name="ShirtIcon" size={20} className="text-primary" />
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
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Icon name="Backpack" size={20} className="text-primary" />
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
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Icon name="Package" size={20} className="text-primary" />
                      Упаковка и прочее
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
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Icon name="Pill" size={20} className="text-primary" />
                      Аптечка
                    </h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {equipment.firstAid.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <aside className="lg:col-span-1">
            <Card className="lg:sticky lg:top-24">
              <CardContent className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Стоимость тура</div>
                  <div className="text-4xl font-bold text-primary mb-4">83 200 ₽</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} className="text-muted-foreground" />
                      <span className="text-muted-foreground">15-23 августа 2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Moon" size={16} className="text-muted-foreground" />
                      <span className="text-muted-foreground">9 дней / 8 ночей</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={16} className="text-muted-foreground" />
                      <span className="text-muted-foreground">Петропавловск-Камчатский</span>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={() => {
                    setShowBookingForm(true);
                    if (typeof window !== 'undefined' && (window as any).ym) {
                      (window as any).ym(106027453, 'reachGoal', 'booking_button_click');
                    }
                  }}
                  className="w-full transition-all hover:scale-105 hover:shadow-lg"
                  size="lg"
                >
                  Забронировать тур
                </Button>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Предоплата всего 10%</div>
                  <div className="font-bold text-lg text-primary">8 320 ₽</div>
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
          </aside>
        </div>
      </div>

      <UniversalBookingDialog
        open={showBookingForm}
        onOpenChange={setShowBookingForm}
        defaultTour="Камчатка — три вулкана - 83 200 ₽"
      />
    </div>
  );
};

export default TourKamchatka;