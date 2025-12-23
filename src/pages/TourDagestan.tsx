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

const TourDagestan = () => {
  const navigate = useNavigate();
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    tour: 'Дагестан: Кавказская тропа по краю башен',
    comment: ''
  });

  const tourInfo = [
    { icon: "Calendar", label: "Длительность тура", value: "8 ДНЕЙ" },
    { icon: "Moon", label: "Ночевки", value: "7 НОЧЕЙ" },
    { icon: "FootprintsIcon", label: "Тип тура", value: "ПЕШИЙ/АВТО" },
    { icon: "Signal", label: "Сложность", value: "2 ИЗ 5" },
    { icon: "Users", label: "Количество", value: "ГРУППА ОТ 8 ДО 16 ЧЕЛОВЕК" },
    { icon: "UserCheck", label: "Возраст", value: "УЧАСТНИКИ ОТ 12 ЛЕТ" },
    { icon: "MapPin", label: "Город отправления", value: "МАХАЧКАЛА" },
  ];

  const program = [
    {
      day: "1 день",
      distance: "120 км на машине",
      title: "Махачкала – Сулакский каньон",
      description: "Встречаемся в аэропорту Махачкалы в 12:00 и отправляемся к жемчужине Дагестана — Сулакскому каньону. Это один из самых глубоких каньонов в мире (1920 м), глубже знаменитого Гранд-Каньона! Прокатимся на катере по бирюзовой реке Сулак, увидим панорамы со смотровых площадок и сделаем сотни фотографий. Вечером размещаемся в гостевом доме с видом на каньон."
    },
    {
      day: "2 день",
      distance: "80 км на машине",
      title: "Бархан Сарыкум и Каспийское море",
      description: "Сегодня посетим уникальный бархан Сарыкум — самый большой песчаный бар в Евразии (высота 262 м). Здесь снимали эпизоды фильма «Белое солнце пустыни». Прогуляемся по золотым пескам, полюбуемся видами на горы. Во второй половине дня отправимся на побережье Каспийского моря, искупаемся и встретим закат на пляже. Ночуем в прибрежном отеле."
    },
    {
      day: "3 день",
      distance: "10 км пешком, 60 км на машине",
      title: "Древний аул Чох",
      description: "Отправляемся в горное село Чох — один из древнейших населенных пунктов России (более 10 000 лет). Прогуляемся по узким каменным улочкам, посетим местный музей, попробуем настоящий дагестанский хинкал и курзе у местных жителей. Познакомимся с традициями горцев и услышим удивительные истории о Кавказе. Ночуем в гостевом доме в горном селе."
    },
    {
      day: "4 день",
      distance: "12 км пешком",
      title: "Поход к аулу-призраку Гамсутль",
      description: "Сегодня пешком отправляемся к легендарному аулу-призраку Гамсутль, расположенному на вершине горы на высоте 1500 метров. Это заброшенное село с каменными домами, откуда открываются невероятные панорамы на горы и долины. Узнаем историю этого места и сделаем атмосферные фотографии. Спуск обратно и ночевка в гостевом доме."
    },
    {
      day: "5 день",
      distance: "15 км пешком, 70 км на машине",
      title: "Водопады и горные озёра",
      description: "Отправляемся к живописным Тобот-Хунзахским водопадам, которые падают с высоты 70 метров прямо в каньон. Прогуляемся по горным тропам, увидим высокогорные луга и альпийские цветы. Посетим смотровую площадку над пропастью. Во второй половине дня поедем к горному озеру Казеной-Ам — самому большому высокогорному озеру Северного Кавказа. Ночуем в отеле рядом с озером."
    },
    {
      day: "6 день",
      distance: "50 км на машине",
      title: "Дербент — древнейший город России",
      description: "Сегодня посетим Дербент — старейший город России (более 5000 лет). Прогуляемся по крепости Нарын-Кала, включенной в список ЮНЕСКО, увидим древние стены, соединяющие горы с Каспийским морем. Посетим старинные мечети, прогуляемся по узким улочкам старого города, попробуем местные сладости и вино. Ночуем в отеле в Дербенте."
    },
    {
      day: "7 день",
      distance: "100 км на машине",
      title: "Самурский лес и лезгинские танцы",
      description: "Отправляемся в уникальный Самурский лиановый лес — единственный субтропический лес в России. Прогуляемся по лесным тропам среди лиан и реликтовых деревьев. Во второй половине дня посетим аутентичную лезгинскую деревню, где увидим настоящее выступление ансамбля народных танцев. Попробуем традиционный дагестанский ужин с десятками блюд национальной кухни. Ночуем в гостевом доме."
    },
    {
      day: "8 день",
      distance: "50 км на машине",
      title: "Возвращение в Махачкалу",
      description: "Утром отправляемся обратно в Махачкалу. По пути заедем на местный рынок за сувенирами и сладостями. Посетим Центральную Джума-мечеть — одну из крупнейших в Европе. Прогуляемся по набережной Каспийского моря. К обеду доставим вас в аэропорт Махачкалы.\n\n<strong>До новых встреч на Кавказе!</strong> Советуем задержаться ещё на день-два, чтобы посетить другие уникальные места Дагестана."
    }
  ];

  const included = [
    "Работа опытного гида и его сопровождение 24 часа в сутки",
    "Все трансферы по программе на комфортном транспорте только для нашей группы",
    "Проживание в гостевых домах и отелях (2-4 местные номера)",
    "Питание: завтраки во всех отелях, ужины в национальных ресторанах (3 ужина)",
    "Экскурсии по программе с местными гидами",
    "Билеты в музеи и на смотровые площадки",
    "Катание на катере по Сулакскому каньону",
    "Выступление ансамбля народных танцев",
    "Дегустация национальных блюд"
  ];

  const notIncluded = [
    "Авиаперелет до Махачкалы и обратно",
    "Медицинская страховка",
    "Обеды и перекусы на маршруте (примерно 3000-4000 ₽)",
    "Личные расходы и сувениры",
    "Дополнительные экскурсии вне программы"
  ];

  const equipment = [
    {
      category: "Одежда",
      items: [
        "Кроссовки или треккинговые ботинки",
        "Легкая куртка или ветровка",
        "Футболки/рубашки (3-4 шт)",
        "Длинные штаны (2 шт)",
        "Шорты",
        "Головной убор от солнца",
        "Солнцезащитные очки",
        "Тёплая кофта для вечеров"
      ]
    },
    {
      category: "Снаряжение",
      items: [
        "Рюкзак 20-30 л для дневных выходов",
        "Бутылка для воды 1-1.5 л",
        "Фонарик",
        "Пауэрбанк для зарядки телефона",
        "Фотоаппарат/камера (по желанию)"
      ]
    },
    {
      category: "Гигиена и аптечка",
      items: [
        "Солнцезащитный крем SPF 50",
        "Гигиеническая помада",
        "Личная аптечка",
        "Средства личной гигиены",
        "Влажные салфетки"
      ]
    },
    {
      category: "Документы",
      items: [
        "Паспорт",
        "Медицинская страховка",
        "Авиабилеты или электронные билеты",
        "Наличные деньги и банковская карта"
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
        tour: 'Дагестан: Кавказская тропа по краю башен',
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
            <p className="text-lg md:text-xl text-white/90">Горы, каньоны и древние аулы</p>
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
                  <p>Дагестан — это земля гор, древних традиций и невероятного гостеприимства. Этот тур познакомит вас с самыми живописными и значимыми местами республики: от Сулакского каньона до древнего Дербента.</p>
                  <p>Маршрут включает посещение аулов-призраков, водопадов, горных озёр и берега Каспийского моря. Вы попробуете настоящую дагестанскую кухню, увидите народные танцы и познакомитесь с традициями горцев.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6">Программа тура</h2>
                <p className="text-muted-foreground mb-8">
                  Приглашаем вас в незабываемое путешествие по Дагестану — республике, где горы встречаются с морем, а древние традиции живут в современности.
                </p>
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
                      <h4 className="font-semibold text-lg mb-2">{day.title}</h4>
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{day.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6">Стоимость тура</h2>
                <div className="bg-primary/5 p-6 rounded-lg mb-6">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">54 900 ₽</div>
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
                          <Icon name="CircleCheck" size={16} className="text-green-600 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Icon name="X" className="text-red-600" size={20} />
                      Оплачивается отдельно:
                    </h3>
                    <ul className="space-y-2">
                      {notIncluded.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Icon name="CircleX" size={16} className="text-red-600 mt-1 flex-shrink-0" />
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
                <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6">Что взять с собой</h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                  <p className="text-sm">
                    <strong>Важно!</strong> Дагестан — республика с преимущественно мусульманским населением. Рекомендуется одежда, закрывающая плечи и колени, особенно при посещении религиозных объектов.
                  </p>
                </div>
                <div className="space-y-6">
                  {equipment.map((section, index) => (
                    <div key={index}>
                      <h3 className="font-bold text-lg mb-3">{section.category}</h3>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {section.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <Icon name="Dot" size={16} className="text-primary mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24 border-2 border-primary shadow-lg">
              <CardContent className="p-6 space-y-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Даты тура</p>
                  <p className="font-bold text-lg mb-4">15-22 июня 2026</p>
                  
                  <div className="text-3xl font-bold text-primary mb-1">54 900 ₽</div>
                  <p className="text-sm text-muted-foreground mb-6">за человека</p>
                </div>

                <Button 
                  onClick={() => setShowBookingForm(true)}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-lg transition-all hover:scale-105 hover:shadow-lg"
                  size="lg"
                >
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Забронировать место
                </Button>

                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-sm text-muted-foreground">Предоплата всего 10%</div>
                  <div className="font-bold text-lg text-primary">5 490 ₽</div>
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
                    <a href="mailto:rukzaklife@mail.ru" className="hover:text-primary transition-colors">rukzaklife@mail.ru</a>
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
            <DialogTitle className="text-2xl font-heading">Забронировать тур</DialogTitle>
            <DialogDescription>
              Заполните форму, и мы свяжемся с вами для подтверждения брони
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Имя *</label>
              <Input
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Ваше имя"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Телефон *</label>
              <Input
                required
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="+7 (999) 123-45-67"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Комментарий</label>
              <Textarea
                value={formData.comment}
                onChange={(e) => setFormData({...formData, comment: e.target.value})}
                placeholder="Ваши пожелания или вопросы"
                rows={3}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Отправка..." : "Отправить заявку"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TourDagestan;