import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

const BenefitsSection = () => {
  const [selectedBenefit, setSelectedBenefit] = React.useState<number | null>(null);

  const benefits: Benefit[] = [
    { icon: "Shield", title: "Безопасность", description: "Проверенные маршруты и опытные гиды" },
    { icon: "Users", title: "Малые группы", description: "До 12 человек для комфорта каждого" },
    { icon: "Award", title: "15 лет опыта", description: "Более 5000 довольных туристов" },
    { icon: "Video", title: "Видео", description: "Интересные моменты из путешествий" },
  ];

  return (
    <>
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 md:mb-4">Почему мы?</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы создаём незабываемые путешествия по России уже 15 лет
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="text-center border-2 border-primary cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-slide-up group" 
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedBenefit(index)}
              >
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 group-hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors duration-300">
                    <Icon name={benefit.icon} size={32} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <CardTitle className="font-heading text-base md:text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm md:text-base group-hover:text-primary-foreground/90 transition-colors duration-300">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={selectedBenefit !== null} onOpenChange={() => setSelectedBenefit(null)}>
        <DialogContent className="max-w-2xl">
          {selectedBenefit !== null && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={benefits[selectedBenefit].icon} size={32} className="text-primary" />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl font-heading">
                      {benefits[selectedBenefit].title}
                    </DialogTitle>
                    <DialogDescription className="text-base">
                      {benefits[selectedBenefit].description}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>
              <div className="space-y-4">
                {selectedBenefit === 0 && (
                  <div className="space-y-3">
                    <p className="text-muted-foreground">
                      Ваша безопасность - наш главный приоритет. Мы гарантируем:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Проверенные и безопасные маршруты</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Сертифицированные гиды с медицинской подготовкой</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Полное снаряжение и аптечка первой помощи</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Связь и GPS-трекинг во время походов</span>
                      </li>
                    </ul>
                  </div>
                )}
                {selectedBenefit === 1 && (
                  <div className="space-y-3">
                    <p className="text-muted-foreground">
                      Малые группы обеспечивают максимальный комфорт:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>До 12 человек - внимание каждому участнику</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Индивидуальный подход к темпу движения</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Дружеская атмосфера и новые знакомства</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Возможность задать любые вопросы гиду</span>
                      </li>
                    </ul>
                  </div>
                )}
                {selectedBenefit === 2 && (
                  <div className="space-y-3">
                    <p className="text-muted-foreground">
                      15 лет успешной работы и довольные клиенты:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Более 5000 туристов выбрали наши туры</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Средняя оценка 4.9 из 5 звезд</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>80% клиентов возвращаются снова</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Партнерство с ведущими турклубами России</span>
                      </li>
                    </ul>
                  </div>
                )}
                {selectedBenefit === 3 && (
                  <div className="space-y-3">
                    <p className="text-muted-foreground">
                      Смотрите видео с наших походов и экспедиций:
                    </p>
                    <div className="bg-muted rounded-lg p-6 text-center">
                      <Icon name="Youtube" size={48} className="text-primary mx-auto mb-3" />
                      <p className="text-sm text-muted-foreground mb-4">
                        Интересные моменты, впечатления участников и красота природы
                      </p>
                      <Button asChild className="w-full">
                        <a href="https://youtube.com/@antturist" target="_blank" rel="noopener noreferrer">
                          <Icon name="Youtube" size={18} className="mr-2" />
                          Смотреть на YouTube
                        </a>
                      </Button>
                    </div>
                  </div>
                )}
                <Button className="w-full mt-4" size="lg" onClick={() => setSelectedBenefit(null)}>
                  Закрыть
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BenefitsSection;
