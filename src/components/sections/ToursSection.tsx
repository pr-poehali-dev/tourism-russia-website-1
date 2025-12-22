import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface Tour {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  duration: string;
  price: string;
  difficulty: string;
  image: string;
}

const ToursSection = () => {
  const navigate = useNavigate();
  const [showBookingForm, setShowBookingForm] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    tour: '',
    comment: ''
  });

  const tours: Tour[] = [
    {
      id: 1,
      title: "Коньковый поход по зимнему Байкалу",
      subtitle: "можно пешком, если нет желания на коньках",
      description: "16-22 февраля<br>6-12 марта",
      duration: "За 7 дней мы преодолеем несколько десятков километров по льду и познакомимся с достопримечательностями острова <strong>Ольхон</strong>: мысом <strong>Хобой</strong>, скалами <strong>Три Брата</strong> и <strong>Шаманка</strong>, буддийской ступой на острове <strong>Огой</strong> и многим другим!\n\n<strong>Передвигаться будем на коньках, пешком и автомобилях повышенной проходимости. Все ночёвки запланированы на тёплых турбазах.</strong>",
      price: "75 000 ₽",
      difficulty: "Легкий",
      image: "https://cdn.poehali.dev/files/2z7a6771.jpg",
    },
    {
      id: 2,
      title: "Байкал в палатках",
      subtitle: "комфортные отапливаемые палатки",
      description: "25 февраля – 4 марта 2026 года",
      duration: "За 8 дней мы совершим путешествие вокруг острова <strong>Ольхон</strong> по льду Байкала: увидим мыс <strong>Хобой</strong>, скалу <strong>Шаманка</strong>, ледяные гроты и байкальские сокуи!\n\n<strong>Будем перемещаться пешком и на коньках, помогая себе специальными палками. Ночевать будем в отапливаемых палатках с печкой прямо на льду Байкала!</strong>",
      price: "61 000 ₽",
      difficulty: "Легкий",
      image: "https://cdn.poehali.dev/files/IMG_5107.jpg",
    },
    {
      id: 3,
      title: "Поход к горе Белухе",
      subtitle: "с конным сопровождением",
      description: "12 дней по самым красивым местам Алтая",
      duration: "За 12 дней похода увидим Аккемское озеро, Кучерлинские озера, гору <strong>Белуха</strong>, посетим озеро Горных духов, Семиозерье, огромный Аккемский ледник и уютную деревянную часовню среди величественных пейзажей.\n\n<strong>Лошади будут нести ваши личные вещи и общественное снаряжение, а мы будем ходить в треккинги с небольшим рюкзаком, гулять по кедровым лесам и наслаждаться рассветами!</strong>",
      price: "78 800 ₽",
      difficulty: "Средний",
      image: "https://cdn.poehali.dev/files/ozz-q6fkgwprn4f2igi58odrec2ov3kk0uj0u7w4k4es9c.jpg",
    },
    {
      id: 4,
      title: "Камчатка — три вулкана",
      subtitle: "Мутновский, Горелый и Авачинский",
      description: "15-23 августа 2026 года",
      duration: "За 9 дней вы поднимитесь на вулканы <strong>Мутновский</strong>, <strong>Горелый</strong> и <strong>Авачинский</strong>, увидите лавовые потоки, фумаролы, кратерные озёра и ледовые пещеры!\n\n<strong>Термальные источники «Дачные» в малой долине гейзеров, уха из свежей красной рыбки, икра и чай из трав. Идеально для тех, кто любит природу!</strong>",
      price: "83 200 ₽",
      difficulty: "Средний",
      image: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/files/f69f3837-399c-401e-9bbc-11624839b9e9.jpg",
    },
    {
      id: 5,
      title: "Путешествие за золотом Колымы",
      subtitle: "Поход вокруг озера Джека Лондона",
      description: "5-15 сентября 2026 года",
      duration: "Уникальный 11-дневный тур по одному из самых живописных уголков Магаданской области в самый разгар золотой осени. Переходы через перевалы, переправы через реки, баня на <strong>Косе Биологов</strong> и вид на массив <strong>Пила</strong>!\n\n<strong>Лодочная переправа, озера с танцующими хариусами и панорамы хребта Черского — всё это ждёт вас на Колыме!</strong>",
      price: "92 000 ₽",
      difficulty: "Сложный",
      image: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/files/ec9cfc09-8cdb-435c-b12e-2a0bae6f1bf6.jpg",
    },
    {
      id: 6,
      title: "Дагестан: Кавказская тропа по краю башен",
      subtitle: "Горы, каньоны и древние аулы",
      description: "15-22 июня 2026 года",
      duration: "За 8 дней вы увидите <strong>Сулакский каньон</strong>, бархан <strong>Сарыкум</strong>, древние аулы <strong>Чох и Гамсутль</strong>, побываете на Каспийском море и познакомитесь с гостеприимством дагестанцев!\n\n<strong>Водопады, горные озёра, национальная кухня и невероятные панорамы Кавказских гор — всё это Дагестан!</strong>",
      price: "54 900 ₽",
      difficulty: "Легкий",
      image: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/files/61d12ccc-7a24-446a-8342-96f46f102626.jpg",
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Легкий":
        return "bg-green-500";
      case "Средний":
        return "bg-yellow-500";
      case "Сложный":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const filterTours = (tab: string) => {
    if (tab === "all") return tours;
    if (tab === "baikal") return tours.filter(t => t.id === 1 || t.id === 2);
    if (tab === "altai") return tours.filter(t => t.id === 3);
    if (tab === "kamchatka") return tours.filter(t => t.id === 4);
    if (tab === "kolyma") return tours.filter(t => t.id === 5);
    if (tab === "dagestan") return tours.filter(t => t.id === 6);
    return tours;
  };

  return (
    <section id="tours" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 md:mb-4">Наши туры</h2>
          <p className="text-base md:text-lg text-muted-foreground">Выберите своё следующее приключение</p>
        </div>
        <Tabs defaultValue="baikal" className="w-full mb-12">
          <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-6 border-2 border-primary">
            <TabsTrigger value="baikal" className="text-xs sm:text-sm">Байкал</TabsTrigger>
            <TabsTrigger value="altai" className="text-xs sm:text-sm">Алтай</TabsTrigger>
            <TabsTrigger value="kamchatka" className="text-xs sm:text-sm">Камчатка</TabsTrigger>
            <TabsTrigger value="kolyma" className="text-xs sm:text-sm">Колыма</TabsTrigger>
            <TabsTrigger value="dagestan" className="text-xs sm:text-sm">Дагестан</TabsTrigger>
            <TabsTrigger value="all" className="text-xs sm:text-sm">Все</TabsTrigger>
          </TabsList>
          {["baikal", "altai", "kamchatka", "kolyma", "dagestan", "all"].map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {filterTours(tab).map((tour) => (
                  <Card key={tour.id} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="font-heading text-xl md:text-2xl">{tour.title}</CardTitle>
                      {tour.subtitle && (
                        <p className="text-sm md:text-base text-muted-foreground mt-1">{tour.subtitle}</p>
                      )}
                      <div className="flex items-start justify-between mt-2">
                        <CardDescription className="text-sm md:text-base text-left" dangerouslySetInnerHTML={{ __html: tour.description }} />
                        <div className="text-primary font-bold text-xl md:text-2xl whitespace-nowrap ml-4">
                          {tour.price}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: tour.duration.replace(/\n/g, '<br>') }} />
                      <Button 
                        variant="outline" 
                        className="w-full bg-white hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 border-2 border-primary"
                        onClick={() => {
                          if (tour.id === 1) {
                            navigate('/tour/baikal-skating');
                          } else if (tour.id === 2) {
                            navigate('/tour/baikal-tents');
                          } else if (tour.id === 3) {
                            navigate('/tour/altai-belukha');
                          } else if (tour.id === 4) {
                            navigate('/tour/kamchatka');
                          } else if (tour.id === 5) {
                            navigate('/tour/kolyma');
                          } else if (tour.id === 6) {
                            navigate('/tour/dagestan');
                          }
                        }}
                      >
                        <Icon name="ArrowRight" size={16} className="mr-2" />
                        Подробнее
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
            onClick={() => setShowBookingForm(true)}
          >
            <Icon name="Calendar" size={20} className="mr-2" />
            Забронировать тур
          </Button>
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
          <form className="space-y-4" onSubmit={async (e) => {
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
                setFormData({ name: '', phone: '', email: '', tour: '', comment: '' });
              } else {
                throw new Error('Ошибка отправки');
              }
            } catch (error) {
              toast({
                title: "Ошибка",
                description: "Не удалось отправить заявку. Попробуйте позже",
                variant: "destructive"
              });
            } finally {
              setIsSubmitting(false);
            }
          }}>
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
                placeholder="+7 999 999-99-99" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <Input 
                type="email" 
                placeholder="ivan@example.com" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Выберите тур</label>
              <Select value={formData.tour} onValueChange={(value) => setFormData({...formData, tour: value})} required>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите тур из списка" />
                </SelectTrigger>
                <SelectContent>
                  {tours.map((tour) => (
                    <SelectItem key={tour.id} value={`${tour.title} - ${tour.price}`}>
                      {tour.title} - {tour.price}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Комментарий</label>
              <Textarea 
                placeholder="Укажите желаемые даты, количество человек и другие пожелания" 
                rows={4}
                value={formData.comment}
                onChange={(e) => setFormData({...formData, comment: e.target.value})}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ToursSection;