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

const TourKolyma = () => {
  const navigate = useNavigate();
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    tour: 'Колыма - озеро Джека Лондона',
    comment: ''
  });

  const tourInfo = [
    { icon: "Calendar", label: "Длительность тура", value: "11 ДНЕЙ" },
    { icon: "Moon", label: "Ночевки", value: "10 НОЧЕЙ" },
    { icon: "FootprintsIcon", label: "Тип тура", value: "ПЕШИЙ/АВТО" },
    { icon: "Signal", label: "Сложность", value: "4 ИЗ 5" },
    { icon: "Users", label: "Количество", value: "ГРУППА ОТ 8 ДО 14 ЧЕЛОВЕК" },
    { icon: "UserCheck", label: "Возраст", value: "УЧАСТНИКИ ОТ 16 ЛЕТ" },
    { icon: "MapPin", label: "Город отправления", value: "МАГАДАН" },
  ];

  const program = [
    {
      day: "1 день",
      distance: "500 км на машине",
      title: "Магадан – река Дебин",
      description: "По Колымской трассе навстречу приключениям. Мы рекомендуем прибыть в Магадан заранее, чтобы адаптироваться к часовому поясу и отдохнуть. Встречаемся в аэропорту Магадана в 12:00 и отправляемся в путь по Колымской трассе. Нас ждет живописная дорога с остановками в интересных местах и обедом в придорожном кафе. Ночуем на берегу реки Дебин, недалеко от поселка Ягодное."
    },
    {
      day: "2 день",
      distance: "56 км на вахтовке",
      title: "К озеру Джека Лондона",
      description: "Внедорожное приключение к мечте. Утром нас ждет вахтовка Урал, которая доставит нас к озеру Джека Лондона по бездорожью и через реку Дебин. По пути мы сделаем остановки в самых живописных местах. Лагерь разобьем не на берегу озера, а выше, чтобы насладиться панорамными видами на озера и хребет Большой Аннгачак."
    },
    {
      day: "3 день",
      distance: "12 км, +300/-300 м",
      title: "Ожерелье озер: Мечта, Серой Чайки и Анемон",
      description: "Прогулка по горным озерам. Сегодня нас ждет легкий поход без рюкзаков к живописным озерам Анемон, Серой Чайки и Сказка. Мы пойдем в радиалку, любуясь красотой горных озер. Во второй половине дня у вас будет свободное время для рыбалки, отдыха и созерцания пейзажей."
    },
    {
      day: "4 день",
      distance: "9 км, +200/-100 м",
      title: "К реке Пурга",
      description: "Под рюкзаками к новым горизонтам. Сегодня мы начинаем активную часть нашего путешествия и берем рюкзаки. Мы попрощаемся с дорогой и пойдем по направлению к озеру Джека Лондона. Затем мы продолжим путь вдоль озера к реке Пурга, где сделаем остановку на обед. Река Пурга встретит нас бродом через холодную воду. Лагерь мы разобьем на живописной косе на берегу озера."
    },
    {
      day: "5 день",
      distance: "12 км, +600/-500 м",
      title: "Перевал Студеный и озеро Невидимка",
      description: "Преодолевая перевал к таинственному озеру. Нас ждет сложный переход через перевал Студеный в долину ручья Неведомый. Это один из самых красивых дней маршрута, но и один из самых сложных. Мы пройдем по курумнику, кедровому стланику и мягкому мху, а также преодолеем небольшой брод через ручей Неведомый. Лагерь мы разобьем на берегу озера Невидимка."
    },
    {
      day: "6 день",
      distance: "16 км, +400/-400 м",
      title: "К массиву Пила",
      description: "В поисках лучшего вида на Пилу. Сегодня мы оставим наш лагерь и отправимся радиально вверх по течению реки, чтобы подойти ближе к одному из самых красивых горных массивов России – Пила. Мы будем пробираться через мох, теряющиеся тропы, курумник и заболоченные участки. Возвращение в лагерь. Ужин."
    },
    {
      day: "7 день",
      distance: "7 км, +100/-400 м",
      title: "Лодочная переправа и коса Биологов",
      description: "Переправа на «Маями-бич» Колымы. Сегодня мы двигаемся дальше. Сначала мы пройдем через ручьи и заболоченные участки, а затем дойдем до среднего озера и спустимся к Джеку. Мы вызываем по рации лодку и переправляемся на противоположный берег на косу Биологов, где нас ждет желтый песок, кристально чистая вода, баня и потрясающий вид на озеро и горы."
    },
    {
      day: "8 день",
      distance: "12 км, +500/-500 м",
      title: "Дневка на Косе Биологов и восхождение на гору",
      description: "Отдых и панорамные виды. Первую половину дня мы посвятим небольшому походу на соседнюю гору, откуда открываются головокружительные панорамы хребта Черского и ожерелья голубых озер. Во второй половине дня нас ждет баня, купание в озере, костер и вкусный ужин!"
    },
    {
      day: "9 день",
      distance: "17 км, +200/-200 м",
      title: "К озеру Танцующих Хариусов",
      description: "Заключительный переход к озеру с «танцующей» рыбой. Наш заключительный пеший переход ведет нас к месту первой ночевки. Узкие тропы виляют между деревьями и кочками мха, выводя нас к уютным озерцам. На обед мы остановимся на берегу озера Танцующих Хариусов. Мы также перейдем озеро по протоке Вариантов."
    },
    {
      day: "10 день",
      distance: "58 км на вахтовке",
      title: "Возвращение к цивилизации",
      description: "Снова на вахтовке, снова в путь. Выезд рано утром. По уже знакомому бездорожью на вахтовке возвращаемся к реке Дебин на Колымскую трассу. Ставим лагерь на берегу, отдыхаем, собираем ягоды и разжигаем костер."
    },
    {
      day: "11 день",
      distance: "500 км на машине",
      title: "Магадан, снова здравствуй!",
      description: "Дорога в Магадан. Нам предстоит проехать около 500 км обратно до Магадана по Колымской трассе. Размещение в хостеле, гостинице или съемной квартире. В свободное время гуляем по городу, приводим себя в порядок. До новых встреч на Колыме!\n\nВы можете продлить свое путешествие, посетив другие достопримечательности Магаданской области."
    }
  ];

  const highlights = [
    {
      icon: "Mountain",
      title: "Невероятная природа",
      description: "Озеро Джека Лондона — это жемчужина Колымы. Огромная акватория, обрамленная живописными хребтами и тундрой, завораживает своей тишиной и мощью."
    },
    {
      icon: "Trees",
      title: "Полное погружение в дикую природу",
      description: "Никакого шума городов, только ты и природа. Переходы, переправы через реки, костры по вечерам и ощущение настоящей свободы."
    },
    {
      icon: "Heart",
      title: "Комфорт и забота",
      description: "Мы продумали маршрут так, чтобы вы наслаждались приключением без лишнего стресса: хорошие стоянки, горячая еда, надежная экипировка."
    },
    {
      icon: "Sparkles",
      title: "Разнообразие впечатлений",
      description: "Будем идти через перевалы, переправляться через реки, гулять вдоль озер и ручьев, подниматься на вершины. Каждый день — новое открытие!"
    },
    {
      icon: "Footprints",
      title: "Маршрут без перегруза",
      description: "Идем в комфортном темпе. Тур подходит тем, кто в нормальной физической форме, любит природу и готов к умеренным физическим нагрузкам."
    }
  ];

  const included = [
    "Трансфер группы из Магадана в поселок Ягодное и обратно",
    "Дополнительная заброска группы на вахтовке до озера Джека Лондона и обратно",
    "Проживание в городе в последний день маршрута",
    "3-х разовое питание на маршруте",
    "Групповое снаряжение (костровое, котлы, горелки, палатки)",
    "Работа инструкторов",
    "Оформление и оплата входных билетов в национальный парк «Черский»",
    "Страховка"
  ];

  const notIncluded = [
    "Билеты до Магадана и обратно",
    "Питание во время трансфера группы в первый и последний день путешествия",
    "Трансфер из аэропорта в Магадан или обратно",
    "Гостиница в дни прилета в Магадан и вылета из него"
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
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      
      setShowBookingForm(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        tour: 'Колыма - озеро Джека Лондона',
        comment: ''
      });
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Что-то пошло не так. Попробуйте еще раз.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <Icon name="ArrowLeft" size={20} />
            <span className="hidden sm:inline">На главную</span>
          </Button>
        </div>
      </header>

      <div className="relative h-[40vh] md:h-[60vh] overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/files/e797ea11-ed16-4e31-8d30-80278ba3334e.jpg"
          alt="Путешествие за золотом Колымы"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto">
            <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-2">Путешествие за золотом Колымы</h1>
            <p className="text-lg md:text-xl text-white/90">Поход вокруг озера Джека Лондона</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
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
                  <p>Колыма — это край золотой осени, бескрайних просторов и величественных гор. Этот тур даст вам уникальную возможность увидеть одно из самых красивых озёр России — озеро Джека Лондона, а также совершить полное кольцо вокруг него.</p>
                  <p>Маршрут включает переходы через перевалы, переправы через реки, посещение живописных озёр и баню на легендарной Косе Биологов. Вы увидите массив Пила, озёра с танцующими хариусами и насладитесь панорамами хребта Черского.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Что вас ждет в туре?</h2>
                <div className="grid gap-6">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <Icon name={highlight.icon} size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{highlight.title}</h3>
                        <p className="text-muted-foreground">{highlight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Программа тура</h2>
                <p className="text-muted-foreground mb-8">
                  Приглашаем вас в незабываемое приключение по Колымскому краю – земле с богатой историей и захватывающими пейзажами. Наш тур начинается в Магадане, откуда мы отправимся к легендарному озеру Джека Лондона.
                </p>
                <div className="space-y-6">
                  {program.map((day, index) => (
                    <div key={index} className="border-l-4 border-primary pl-6 pb-6 last:pb-0">
                      <h3 className="text-xl font-bold text-primary mb-1">{day.day}</h3>
                      {day.distance && (
                        <p className="text-sm text-muted-foreground mb-2">Дистанция: {day.distance}</p>
                      )}
                      <h4 className="font-semibold text-lg mb-2">{day.title}</h4>
                      <p className="text-muted-foreground whitespace-pre-line">{day.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Что взять с собой</h2>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 mb-6">
                  <p className="text-sm">
                    <strong>Важно!</strong> Каждый элемент в списке вещей имеет огромное значение в походе. Если ваше снаряжение не будет соответствовать этому перечню, инструктор, для сохранения вашей безопасности, может отстранить вас от маршрута или его части.
                  </p>
                </div>
                <div className="space-y-6">
                  {equipment.map((section, index) => (
                    <div key={index}>
                      <h3 className="font-bold text-lg mb-3">{section.category}</h3>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Стоимость тура</h2>
                <div className="text-4xl font-bold text-primary mb-6">92 000 ₽</div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-green-500" />
                      В стоимость входит:
                    </h3>
                    <ul className="space-y-2">
                      {included.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Icon name="Check" size={16} className="text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Icon name="X" size={20} className="text-red-500" />
                      В стоимость не входит:
                    </h3>
                    <ul className="space-y-2">
                      {notIncluded.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Icon name="X" size={16} className="text-red-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="font-bold mb-2">Как забронировать:</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Для бронирования места в группе нужно внести оплату в размере 10%.
                  </p>
                  
                  <h3 className="font-bold mb-2">Билеты:</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Мы рекомендуем прибыть в Магадан заранее, чтобы адаптироваться к часовому поясу и отдохнуть. Встречаемся в первый день похода в аэропорту Магадана в 12:00.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Обратный билет нужно брать не раньше 21:00 заключительного дня или лучше на следующий день после похода.
                  </p>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500">
                  <p className="text-sm">
                    <strong>Внимание!</strong> План похода может измениться из-за неблагоприятных погодных условий, общего физического состояния группы и других непредвиденных факторов, препятствующих прохождению маршрута.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <aside className="lg:col-span-1">
            <Card className="lg:sticky lg:top-24">
              <CardContent className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Стоимость тура</div>
                  <div className="text-4xl font-bold text-primary mb-4">92 000 ₽</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} className="text-muted-foreground" />
                      <span className="text-muted-foreground">5-15 сентября 2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Moon" size={16} className="text-muted-foreground" />
                      <span className="text-muted-foreground">11 дней</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={16} className="text-muted-foreground" />
                      <span className="text-muted-foreground">Магадан</span>
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
                  <div className="font-bold text-lg text-primary">9 200 ₽</div>
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
                    <a href="mailto:info@example.com" className="hover:text-primary transition-colors">rukzaklife@mail.ru</a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>

      <Dialog open={showBookingForm} onOpenChange={setShowBookingForm}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Забронировать тур</DialogTitle>
            <DialogDescription>
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Input
                type="tel"
                placeholder="Телефон"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <Input
                value={formData.tour}
                readOnly
                className="bg-muted"
              />
            </div>
            <div>
              <Textarea
                placeholder="Комментарий (необязательно)"
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                rows={3}
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

export default TourKolyma;