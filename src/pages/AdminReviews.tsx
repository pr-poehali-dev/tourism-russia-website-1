import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const AdminReviews = () => {
  const [selectedReviewIndex, setSelectedReviewIndex] = useState<number | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const reviews = [
    { name: "Инна Литковская", tour: "Камчатка", videoUrl: "https://youtu.be/sJ_FEqm1aZo" },
    { name: "Катерина Лин-о", tour: "Камчатка 2020г" },
    { name: "Александр С.", tour: "Колыма 2025г" },
    { name: "Елизавета С.", tour: "Гора Пабаку 2023г" },
    { name: "Анна Мочалова", tour: "Камчатка 2020г" },
    { name: "Кристина Литвиненко", tour: "Камчатка 2024г" },
    { name: "Екатерина Хлопкова", tour: "Дагестан" },
    { name: "Татьяна Степанова", tour: "Байкал 2020г" },
    { name: "Инна Литковская", tour: "Камчатка" },
  ];

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 100 * 1024 * 1024) {
        toast({
          title: "Ошибка",
          description: "Файл слишком большой. Максимум 100 МБ",
          variant: "destructive"
        });
        return;
      }
      setVideoFile(file);
    }
  };

  const handleUpload = async () => {
    if (!videoFile || selectedReviewIndex === null) return;

    setIsUploading(true);

    try {
      const reader = new FileReader();
      reader.readAsDataURL(videoFile);
      
      reader.onload = async () => {
        const base64Data = reader.result?.toString().split(',')[1];
        
        const response = await fetch('https://functions.poehali.dev/cfaa0145-bbf0-491c-b152-853dff5e5382', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            video: base64Data,
            filename: videoFile.name
          })
        });

        if (response.ok) {
          const data = await response.json();
          setVideoUrl(data.url);
          
          toast({
            title: "Успешно!",
            description: "Видео загружено. Скопируйте URL и добавьте в код отзыва.",
          });
        } else {
          throw new Error('Upload failed');
        }
      };
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось загрузить видео",
        variant: "destructive"
      });
    } finally {
      setIsUploading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Скопировано!",
      description: "URL видео скопирован в буфер обмена",
    });
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-heading font-bold mb-2">Управление видео в отзывах</h1>
          <p className="text-muted-foreground">Загрузите видео для отзыва и получите ссылку для добавления в код</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Выберите отзыв</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-[500px] overflow-y-auto">
                {reviews.map((review, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedReviewIndex(index)}
                    className={`w-full p-3 rounded-lg border text-left transition-colors ${
                      selectedReviewIndex === index
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'hover:bg-muted border-border'
                    }`}
                  >
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm opacity-80">{review.tour}</div>
                    {review.videoUrl && (
                      <div className="text-xs mt-1 flex items-center gap-1">
                        <Icon name="Youtube" size={12} />
                        YouTube видео есть
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Загрузка видео</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedReviewIndex !== null ? (
                <>
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="font-semibold text-lg">{reviews[selectedReviewIndex].name}</div>
                    <div className="text-sm text-muted-foreground">{reviews[selectedReviewIndex].tour}</div>
                  </div>

                  <div>
                    <Label htmlFor="video">Выберите видео файл (макс. 100 МБ)</Label>
                    <Input
                      id="video"
                      type="file"
                      accept="video/*"
                      ref={fileInputRef}
                      onChange={handleFileSelect}
                      className="mt-2"
                    />
                  </div>

                  {videoFile && (
                    <div className="p-3 bg-muted rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon name="Video" size={20} />
                        <div>
                          <div className="font-medium">{videoFile.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {(videoFile.size / 1024 / 1024).toFixed(2)} МБ
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setVideoFile(null)}
                      >
                        <Icon name="X" size={16} />
                      </Button>
                    </div>
                  )}

                  <Button
                    onClick={handleUpload}
                    disabled={!videoFile || isUploading}
                    className="w-full"
                    size="lg"
                  >
                    {isUploading ? (
                      <>
                        <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                        Загрузка...
                      </>
                    ) : (
                      <>
                        <Icon name="Upload" size={20} className="mr-2" />
                        Загрузить видео
                      </>
                    )}
                  </Button>

                  {videoUrl && (
                    <div className="space-y-3">
                      <div className="p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
                        <div className="flex items-start gap-2 mb-2">
                          <Icon name="CheckCircle2" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-semibold text-green-900 dark:text-green-100">
                              Видео успешно загружено!
                            </div>
                            <div className="text-sm text-green-700 dark:text-green-300 mt-1">
                              Добавьте поле <code className="bg-green-100 dark:bg-green-900 px-1 py-0.5 rounded">videoFile</code> в отзыв:
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-3 p-3 bg-slate-900 rounded-lg overflow-x-auto">
                          <pre className="text-xs text-slate-100">
{`{
  name: "${reviews[selectedReviewIndex].name}",
  tour: "${reviews[selectedReviewIndex].tour}",
  rating: 5,
  text: "...",
  videoFile: "${videoUrl}",
  ...
}`}
                          </pre>
                        </div>

                        <Button
                          onClick={() => copyToClipboard(videoUrl)}
                          variant="outline"
                          className="w-full mt-3"
                          size="sm"
                        >
                          <Icon name="Copy" size={16} className="mr-2" />
                          Скопировать URL
                        </Button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Icon name="ArrowLeft" size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Выберите отзыв из списка слева</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
          <div className="flex items-start gap-3">
            <Icon name="Info" size={24} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Инструкция по использованию
              </h3>
              <ol className="text-sm text-blue-800 dark:text-blue-200 space-y-1 list-decimal list-inside">
                <li>Выберите отзыв из списка слева</li>
                <li>Загрузите видео файл (до 100 МБ)</li>
                <li>Нажмите "Загрузить видео"</li>
                <li>Скопируйте полученный URL</li>
                <li>Добавьте поле <code className="bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">videoFile</code> с этим URL в код отзыва в файле ReviewsSection.tsx</li>
                <li>Видео будет отображаться прямо на странице отзыва</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminReviews;
