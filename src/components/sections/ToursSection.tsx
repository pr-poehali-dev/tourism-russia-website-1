import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Наши лучшие туры</h2>
          <p className="text-lg text-muted-foreground">Выберите своё следующее приключение</p>
        </div>
        <Tabs defaultValue="all" className="w-full mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
            <TabsTrigger value="all">Пермский край</TabsTrigger>
            <TabsTrigger value="easy">Легкие</TabsTrigger>
            <TabsTrigger value="medium">Средние</TabsTrigger>
            <TabsTrigger value="hard">Сложные</TabsTrigger>
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
                      <CardTitle className="font-heading text-2xl">{tour.title}</CardTitle>
                      <CardDescription className="text-base">{tour.description}</CardDescription>
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
                      <Button className="w-full">
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
      </div>
    </section>
  );
};

export default ToursSection;