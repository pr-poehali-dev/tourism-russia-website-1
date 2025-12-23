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

const TourAltai = () => {
  const navigate = useNavigate();
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    tour: 'Поход к Белухе с конным сопровождением',
    comment: ''
  });

  const tourInfo = [
    { icon: "Calendar", label: "Длительность тура", value: "12 ДНЕЙ" },
    { icon: "Moon", label: "Ночевки", value: "11 НОЧЕЙ" },
    { icon: "FootprintsIcon", label: "Тип тура", value: "ПЕШИЙ" },
    { icon: "Signal", label: "Сложность", value: "3 ИЗ 5" },
    { icon: "Users", label: "Количество", value: "ГРУППА ОТ 8 ДО 14 ЧЕЛОВЕК" },
    { icon: "UserCheck", label: "Возраст", value: "УЧАСТНИКИ ОТ 14 ЛЕТ" },
    { icon: "MapPin", label: "Город отправления", value: "ГОРНО-АЛТАЙСК" },
  ];

  const program = [
    {
      day: "1 день",
      distance: "380 км на авто",
      title: "Горно-Алтайск – село Тюнгур",
      description: "Сбор группы в аэропорту г. Горно-Алтайск. Собравшись все вместе, отправляемся в горную часть Алтая. Сегодня нас ждет весьма длинный переезд. По пути обязательно сделаем остановку на обед в одном из придорожных кафе. К вечеру приедем в село Тюнгур, где и разобьем наш палаточный лагерь."
    },
    {
      day: "2 день",
      distance: "18,5 км",
      title: "Подъем по долине реки Кучерла",
      description: "Сегодня мы впервые увидим алтайских лошадок, которые будут переносить наши личные вещи и общественные продукты. Грузим рюкзаки на лошадок, с собой берем только вещи, которые будут необходимы во время радиалки. Ближайшие два дня идем вверх по долине реки Кучерла, по красивым кедровым лесам. Тропа плавно набирает высоту. К концу первого дня в лесу остановимся на ночлег."
    },
    {
      day: "3 день",
      distance: "18,5 км",
      title: "Озеро Кучерла",
      description: "Завтракаем, собираем наш лагерь и выдвигаемся. Сегодня выйдем к нижнему озеру Кучерла и увидим огромное Кучерлинское озеро. В этот день нас ждет отличная смотровая площадка, с которой видно почти все озеро. В этом месте расположим наш лагерь на 2 ночи. Вечером любители баньки смогут себя побаловать. Здорово, что в таких далеких от цивилизации местах, есть возможность попариться в бане."
    },
    {
      day: "4 день",
      distance: "19,5 км",
      title: "Радиальный выход на озеро Зеленое",
      description: "Озера недалеко от нашего лагеря носит название Зеленое. Сегодня совершим треккинг к этиму озеру, чтобы проверить, точно ли у него такой цвет! А еще его обрамляют вершины покрытые ледниками. В общем, красиво невероятно;) Заодно с одного нового ракурса посмотрим на большое Кучерлинское озеро и вновь убедимся, насколько оно огромное."
    },
    {
      day: "5 день",
      distance: "14,3 км",
      title: "Река Текелюшка",
      description: "Покидаем красивое Кучерлинское озеро. Собираем лагерь и движемся в сторону перевала Кара-Тюрек. За один день перевалить в Аккемскую долину непросто, поэтому сегодня пройдем половину пути. Дойдем до начала подъема и в кедровом лесу остановимся на ночлег. Если останутся силы собрать дров – у нас обязательно будет вечерний костерок."
    },
    {
      day: "6 день",
      distance: "14,3 км",
      title: "Река Текелюшка - перевал Кара-Тюрек - Аккемское озеро",
      description: "Сегодня самый сложный день похода. Нам предстоит подняться на перевал Кара-Тюрек и спуститься в соседнюю долину. Один из бонусов перевала – волшебный вид на Белуху. Именно с этой точки гора предстает в невероятном ракурсе! На спуске пойдем по большим камням, как по ступеням. Далее тропа пройдет по редкому лесу, мимо метеостанции. В этот день достигнем одну из наших желанных целей – потрясающе красивое горное озеро Аккем! На его берегу разобьем лагерь на ближайшие 4 ночи."
    },
    {
      day: "7 день",
      distance: "8,5 км",
      title: "Долина реки Ярлу, камень Рериха",
      description: "Знаменитый художник Николай Рерих отдыхал в этих местах, рисовал свои картины и, как и мы с вами, отправлялся на треккинги по прекрасным долинам Алтая. Особенно его сердцу запала долина реки Ярлу, именно здесь он почувствовал огромное место силы. Долина и вправду необычная: по пути встретятся не только классические скалы песочного и серого цвета, но и породы розового и фиолетового цветов. Одна из ключевых локаций, куда мы держим путь – камень Рериха."
    },
    {
      day: "8 день",
      distance: "13,2 км",
      title: "Аккемский ледник, часовня Архангела Михаила",
      description: "Подходим ближе к самой загадочной и желанной горе этих мест – священной Белухе. Многие ученые считают, что Белуха – невероятно мощный излучатель земной энергии в космос и самое энергетически сильное место на Алтае. Кроме того, это еще и просто невероятно красивая гора, которую ледяным покрывалом укутываем Аккемский ледник! Наш путь к Аккемскому леднику Алтая пройдет мимо живописной локации – деревянной часовни Архангела Михаила."
    },
    {
      day: "9 день",
      distance: "12,7 км",
      title: "Озеро горных Духов",
      description: "Сегодня у нас по плану новая локация – озеро Горных Духов. Сначала по уже привычной тропе подойдем к часовне Архангела Михаила. Потом предстоит подъем по курумнику – большим камням. Поднявшись по курумнику, выходим в широкую долину. Пройдя ее, выходим к Озеру Горных духов. Оно находится в очень уютном ущелье, закрытом горами. Когда нет ветра, здесь живет потрясающая Тишина…"
    },
    {
      day: "10 день",
      distance: "12,8 км",
      title: "Поход в долину Семи озер",
      description: "Выйдем из лагеря и отправимся в ущелье направо, тропа будет подниматься вдоль ручья круто вверх. Полюбуемся на ледники, которые с этого места стали еще ближе. Выйдя в долину, обойдем все семь озер, которые порадуют своими голубыми и зелеными цветами. Есть предание, что, если загадать желание и искупаться в каждом из семи озер Алтая – то желание непременно сбудется!"
    },
    {
      day: "11 день",
      distance: "23 км",
      title: "Долина реки Аккем - пос. Тюнгур",
      description: "Собираем лагерь и двигаемся налегке вдоль реки Аккем, по склону хребта, поросшего кедром и лиственницей. Справа порой будут обрывы и покажется горная река Аккем. По пути иногда будем переходить по камешкам небольшие ручейки. К концу ходового дня придем на стоянку «Три березы». Здесь загружаем в транспорт и едем через перевал Кузуяк, а затем спустимся в селение Тюнгур."
    },
    {
      day: "12 день",
      title: "Переезд из с. Тюнгур в г. Горно-Алтайск",
      description: "Сегодня едем в Горно-Алтайск. По пути сделаем остановку на Семинском перевале, чтобы купить сувениров. 20:00-22:00 – прибытие в г. Горно-Алтайск. Наш поход на Алтай завершен. До новых встреч в походах, друзья!"
    }
  ];

  const included = [
    "Работа опытного гида и его сопровождение 24 часа в сутки",
    "Трансфер: Горно-Алтайск – село Тюнгур на частном микроавтобусе",
    "Отличное трёхразовое питание на маршруте",
    "Оплата платных стоянок",
    "Общественное снаряжение (палатки, горелки, костровое)",
    "Связь и навигация",
    "Общественная аптечка",
    "Регистрация группы в МЧС",
    "Консультация по подбору снаряжения и покупке авиабилетов",
    "Страховка"
  ];

  const notIncluded = [
    "Авиабилет до Горно-Алтайска и обратно",
    "Траты вне программы"
  ];

  const equipment = {
    clothes: [
      "Ботинки треккинговые (с фиксацией голеностопа и толстой подошвой)",
      "Сандалии или кроссовки для лагеря (максимально лёгкие)",
      "Термобельё тонкое ходовое",
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
    ],
    gear: [
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
    ],
    packing: [
      "Гидромешок для документов",
      "Несколько сумок для одежды и предметов гигиены",
      "Рюкзак, сумка или чемодан (вещи в походе пойдут упакованными в гермомешки на лошадях)"
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
      "Билеты или маршрутные квитанции",
      "До 500 гр. карманного перекуса (орехи, конфеты, сухофрукты, шоколад)"
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
          tour: 'Поход к Белухе с конным сопровождением',
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
          src="https://cdn.poehali.dev/files/photo_2025-12-23_11-31-38.jpg"
          alt="Поход к Белухе"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto">
            <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-2">Поход к горе Белухе</h1>
            <p className="text-lg md:text-xl text-white/90">с конным сопровождением</p>
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
                  <p>На этом маршруте нас будут сопровождать лошади, которые возьмут на себя часть снаряжения, что позволит вам сосредоточиться на тропе и окружающих пейзажах. Этот тур подойдет тем, кто ищет ярких впечатлений и хочет приблизиться к легендарной вершине Алтая.</p>
                  <p>Это путешествие для тех, кто готов испытать свои силы и ощутить настоящий дух приключений. Белуха — высочайшая точка Сибири, и добраться сюда не так просто, но оно того стоит!</p>
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
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">78 800 ₽</div>
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
                    <p>Для бронирования места в группе нужно внести оплату в размере 30%.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-2 text-foreground">Билеты</h3>
                    <p className="mb-2"><strong>Важно!</strong> Согласовывайте покупку билетов с инструктором.</p>
                    <p className="mb-2">Встреча участников состоится в первый день похода в 10:00 (московское время + 4 часа) в аэропорту г. Горно-Алтайск.</p>
                    <p>Обратный билет нужно брать не раньше 21:00 заключительного дня похода.</p>
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
                  <div className="text-4xl font-bold text-primary mb-4">78 800 ₽</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} className="text-muted-foreground" />
                      <span className="text-muted-foreground">5-16 июля 2026 года</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} className="text-muted-foreground" />
                      <span className="text-muted-foreground">12 дней / 11 ночей</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={16} className="text-muted-foreground" />
                      <span className="text-muted-foreground">Горно-Алтайск</span>
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
                  <div className="text-sm text-muted-foreground">Предоплата всего 30%</div>
                  <div className="font-bold text-lg text-primary">23 640 ₽</div>
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

export default TourAltai;