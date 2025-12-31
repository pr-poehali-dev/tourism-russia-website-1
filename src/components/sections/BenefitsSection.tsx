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
    { 
      icon: "Users", 
      title: "Тёплая, почти семейная атмосфера", 
      description: "Мы создаём дружескую обстановку, где каждый участник чувствует себя частью команды. Вечерние посиделки у костра, общие песни и истории делают путешествие незабываемым." 
    },
    { 
      icon: "Shield", 
      title: "Гиды, которым можно доверять на все 100%", 
      description: "Работаем без посредников и туроператоров. Все общение от заявки или звонка до последнего дня похода только с нами, Антоном и Эмилем. Мы знаем все предоставляемые туры и походы как свои пять пальцев, но каждый раз испытываем новые эмоции от общения с людьми и природы." 
    },
    { 
      icon: "Heart", 
      title: "Индивидуальный подход к каждому", 
      description: "Небольшие группы 8-16 человек для комфортных путешествий и общения с природой. Мы учитываем физическую подготовку и пожелания каждого участника. Никого не оставим позади, всегда поможем и поддержим." 
    },
    { 
      icon: "ShieldCheck", 
      title: "Безопасность", 
      description: "Мы заключаем договор на оказание наших услуг и оформляем медицинскую страховку на каждого участника группы. Проверенное оборудование, качественное снаряжение и наш огромный опыт помогут вам получить незабываемые эмоции." 
    },
  ];

  return (
    <>
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              То, что делает наши туры особенными
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-start gap-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={benefit.icon} size={32} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={selectedBenefit !== null} onOpenChange={() => setSelectedBenefit(null)}>
        <DialogContent className="max-w-2xl w-[95vw] sm:w-full max-h-[90vh] overflow-y-auto">
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