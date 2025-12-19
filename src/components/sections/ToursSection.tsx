import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
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

interface Tour {
  id: number;
  title: string;
  description: string;
  duration: string;
  price: string;
  difficulty: string;
  image: string;
}

const ToursSection = () => {
  const [showBookingForm, setShowBookingForm] = React.useState(false);

  const tours: Tour[] = [
    {
      id: 1,
      title: "Золотое Кольцо",
      description: "8 древних городов за 7 дней",
      duration: "7 дней",
      price: "45 000 ₽",
      difficulty: "Легкий",
      image: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/files/1d1b6b17-c299-4be3-bbe7-08c4f7b7d05d.jpg",
    },
    {
      id: 2,
      title: "Байкал зимой",
      description: "Прозрачный лёд и снежные пики",
      duration: "10 дней",
      price: "89 000 ₽",
      difficulty: "Средний",
      image: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/files/b25ede9a-bb7c-4b9c-9e2b-b0baa7ac497b.jpg",
    },
    {
      id: 3,
      title: "Осенний Алтай",
      description: "Золотые леса и горные вершины",
      duration: "6 дней",
      price: "52 000 ₽",
      difficulty: "Средний",
      image: "https://cdn.poehali.dev/projects/8e902b9d-d84f-4d31-8776-8a9de0dee401/files/852468b8-1916-478c-b088-c33868a24865.jpg",
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

  const filterTours = (difficulty: string) => {
    if (difficulty === "all") return tours;
    if (difficulty === "easy") return tours.filter(t => t.difficulty === "Легкий");
    if (difficulty === "medium") return tours.filter(t => t.difficulty === "Средний");
    if (difficulty === "hard") return tours.filter(t => t.difficulty === "Сложный");
    return tours;
  };

  return (
    <section id="tours" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 md:mb-4">Наши туры</h2>
          <p className="text-base md:text-lg text-muted-foreground">Выберите своё следующее приключение</p>
        </div>
        <Tabs defaultValue="all" className="w-full mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 sm:grid-cols-4 border-2 border-primary">
            <TabsTrigger value="all" className="text-xs sm:text-sm">Все</TabsTrigger>
            <TabsTrigger value="easy" className="text-xs sm:text-sm">Байкал</TabsTrigger>
            <TabsTrigger value="medium" className="text-xs sm:text-sm">Камчатка</TabsTrigger>
            <TabsTrigger value="hard" className="text-xs sm:text-sm">Урал</TabsTrigger>
          </TabsList>
          {["all", "easy", "medium", "hard"].map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filterTours(tab).map((tour) => (
                  <Card key={tour.id} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <Badge className={`absolute top-4 right-4 ${getDifficultyColor(tour.difficulty)}`}>
                        {tour.difficulty}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="font-heading text-xl md:text-2xl">{tour.title}</CardTitle>
                      <CardDescription className="text-sm md:text-base">{tour.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Icon name="Calendar" size={16} />
                          <span>{tour.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-primary font-bold text-lg">
                          <Icon name="DollarSign" size={18} />
                          <span>{tour.price}</span>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full bg-white hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 border-2 border-primary"
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
          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Ваше имя</label>
              <Input placeholder="Иван Иванов" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Телефон</label>
              <Input type="tel" placeholder="+7 999 999-99-99" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <Input type="email" placeholder="ivan@example.com" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Выберите тур</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите тур из списка" />
                </SelectTrigger>
                <SelectContent>
                  {tours.map((tour) => (
                    <SelectItem key={tour.id} value={tour.id.toString()}>
                      {tour.title} - {tour.price}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Комментарий</label>
              <Textarea placeholder="Укажите желаемые даты, количество человек и другие пожелания" rows={4} />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              size="lg"
            >
              Отправить заявку
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ToursSection;