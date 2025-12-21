import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

interface TourInfoItem {
  icon: string;
  label: string;
  value: string;
}

interface ProgramDay {
  day: string;
  distance?: string;
  description: string;
}

interface Equipment {
  clothes: string[];
  gear: string[];
  packing: string[];
  medicine: string[];
  hygiene: string[];
  documents: string[];
}

interface TourMainContentProps {
  tourInfo: TourInfoItem[];
  reasons: string[];
  program: ProgramDay[];
  included: string[];
  notIncluded: string[];
  equipment: Equipment;
}

const TourMainContent = ({ tourInfo, reasons, program, included, notIncluded, equipment }: TourMainContentProps) => {
  return (
    <div className="space-y-12">
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tourInfo.map((item, idx) => (
            <Card key={idx} className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name={item.icon} size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-semibold text-sm">{item.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary flex items-center gap-3">
          <Icon name="Heart" size={28} />
          Зачем ехать на зимний Байкал?
        </h2>
        <ul className="space-y-3">
          {reasons.map((reason, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
              <span className="text-gray-700">{reason}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary flex items-center gap-3">
          <Icon name="Map" size={28} />
          Программа тура
        </h2>
        <div className="space-y-6">
          {program.map((day, idx) => (
            <Card key={idx} className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                  <h3 className="text-xl font-bold text-primary">{day.day}</h3>
                  {day.distance && (
                    <span className="text-sm bg-primary/10 px-3 py-1 rounded-full text-primary font-medium w-fit">
                      {day.distance}
                    </span>
                  )}
                </div>
                <p className="text-gray-700 leading-relaxed">{day.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary flex items-center gap-3">
          <Icon name="DollarSign" size={28} />
          Стоимость тура
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-2 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-700">
                <Icon name="Check" size={24} />
                Включено в стоимость
              </h3>
              <ul className="space-y-2">
                {included.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Icon name="Plus" size={16} className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-700">
                <Icon name="X" size={24} />
                Не включено в стоимость
              </h3>
              <ul className="space-y-2">
                {notIncluded.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Icon name="Minus" size={16} className="text-orange-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary/5 border-2 border-primary">
          <CardContent className="p-6 text-center">
            <p className="text-3xl font-bold text-primary mb-2">59 000 ₽</p>
            <p className="text-muted-foreground">за человека</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary flex items-center gap-3">
          <Icon name="Backpack" size={28} />
          Список снаряжения
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Icon name="Shirt" size={20} className="text-primary" />
                Одежда
              </h3>
              <ul className="space-y-2">
                {equipment.clothes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Icon name="Dot" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Icon name="Wrench" size={20} className="text-primary" />
                Снаряжение
              </h3>
              <ul className="space-y-2">
                {equipment.gear.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Icon name="Dot" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Icon name="Package" size={20} className="text-primary" />
                Упаковка
              </h3>
              <ul className="space-y-2">
                {equipment.packing.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Icon name="Dot" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Icon name="HeartPulse" size={20} className="text-primary" />
                Аптечка
              </h3>
              <ul className="space-y-2">
                {equipment.medicine.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Icon name="Dot" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Icon name="Sparkles" size={20} className="text-primary" />
                Гигиена
              </h3>
              <ul className="space-y-2">
                {equipment.hygiene.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Icon name="Dot" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Icon name="FileText" size={20} className="text-primary" />
                Документы и прочее
              </h3>
              <ul className="space-y-2">
                {equipment.documents.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Icon name="Dot" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default TourMainContent;
