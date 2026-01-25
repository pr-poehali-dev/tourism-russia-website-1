import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import BenefitsVariant1 from "@/components/sections/BenefitsVariant1";
import BenefitsVariant2 from "@/components/sections/BenefitsVariant2";
import BenefitsVariant3 from "@/components/sections/BenefitsVariant3";

const BenefitsPreview = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Выберите вариант оформления</h1>
          <Button onClick={() => navigate('/')} variant="outline">
            Вернуться на главную
          </Button>
        </div>
      </div>

      <div className="space-y-16 py-8">
        <div className="bg-white border-b-8 border-blue-500 pb-8">
          <div className="container mx-auto px-4 py-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h2 className="text-3xl font-bold mb-3">Вариант 1: Крупные карточки 2 колонки</h2>
              <p className="text-lg text-gray-700">Большие фото 300px, текст поверх изображения, сетка 2 колонки, градиентный фон</p>
            </div>
          </div>
          <BenefitsVariant1 />
        </div>

        <div className="bg-white border-b-8 border-green-500 pb-8">
          <div className="container mx-auto px-4 py-6">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h2 className="text-3xl font-bold mb-3">Вариант 2: Минималистичный список</h2>
              <p className="text-lg text-gray-700">Вертикальный зигзаг, фото справа/слева, много белого пространства, крупный шрифт</p>
            </div>
          </div>
          <BenefitsVariant2 />
        </div>

        <div className="bg-black border-b-8 border-purple-500 pb-8">
          <div className="container mx-auto px-4 py-6">
            <div className="bg-purple-900 border-l-4 border-purple-500 p-6 mb-8">
              <h2 className="text-3xl font-bold mb-3 text-white">Вариант 3: Карусель на весь экран</h2>
              <p className="text-lg text-purple-100">Огромное фото на фоне, по одному преимуществу, стрелки переключения, точки навигации</p>
            </div>
          </div>
          <BenefitsVariant3 />
        </div>
      </div>

      <div className="bg-white border-t sticky bottom-0 shadow-lg">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-lg text-gray-600 mb-4">Выберите понравившийся вариант и скажите мне!</p>
          <Button onClick={() => navigate('/')} size="lg">
            Вернуться на главную
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BenefitsPreview;
