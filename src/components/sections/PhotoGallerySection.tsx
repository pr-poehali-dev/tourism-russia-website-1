import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
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
import InputMask from "react-input-mask";

interface GalleryImage {
  url: string;
  alt: string;
}

interface PhotoGallery {
  id: string;
  title: string;
  coverImage: string;
  images: GalleryImage[];
}

const PhotoGallerySection = () => {
  const [selectedGallery, setSelectedGallery] = React.useState<PhotoGallery | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
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

  const photoGalleries: PhotoGallery[] = [
    {
      id: "baikal-skating",
      title: "Коньковый поход по Байкалу",
      coverImage: "https://cdn.poehali.dev/files/photo_2025-12-23_10-01-44.jpg",
      images: [
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-01-44.jpg", alt: "Группа туристов на льду Байкала с санями" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_09-55-33.jpg", alt: "Буддийские столбы на Байкале" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_09-55-39.jpg", alt: "Скала Огой на Байкале" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_09-56-04.jpg", alt: "Ледяной грот на Байкале" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_09-56-15.jpg", alt: "Закат над зимним Байкалом" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_09-56-26.jpg", alt: "Встреча рассвета на льду" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_09-56-33.jpg", alt: "Группа в ледяном гроте с сосульками" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_09-56-39.jpg", alt: "Турист в ледяной пещере Байкала" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_09-56-41.jpg", alt: "Девушка с байкальским льдом" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-01-26.jpg", alt: "Сердце из ягод на прозрачном льду" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-01-29.jpg", alt: "Акробатика на прозрачном льду Байкала" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-01-33.jpg", alt: "Гид с рюкзаком на фоне Байкала" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-01-36.jpg", alt: "Туристка в красном на коньках" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-01-39.jpg", alt: "Туристка в бирюзовом у берега Байкала" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-01-41.jpg", alt: "Прыжок с санями на прозрачном льду" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-01-47.jpg", alt: "Веселая группа у деревянного домика" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-01-50.jpg", alt: "Туристка в ледяном гроте с сосульками" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-01-53.jpg", alt: "Группа на прозрачном льду с заснеженными горами" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-01-56.jpg", alt: "Турист на ледяных торосах Байкала" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-01-59.jpg", alt: "Отдых группы на льду с санями" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-02-02.jpg", alt: "Группа на крыльце деревянной базы" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-02-06.jpg", alt: "Туристы изучают узоры прозрачного льда" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-02-10.jpg", alt: "Караван с санями по ледяной дороге" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-02-13.jpg", alt: "Гид на зеркальном льду с группой вдали" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-02-16.jpg", alt: "Группа у скалистого берега на льду" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-02-19.jpg", alt: "Обед на льду с любопытной лисой" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-02-33.jpg", alt: "Селфи группы на прозрачном льду" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-02-36.jpg", alt: "Веселые трюки на прозрачном льду" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-02-39.jpg", alt: "Отдых в ледяном гроте" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-02-41.jpg", alt: "Заледеневший турист на морозе" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-02-44.jpg", alt: "Вся группа у турбазы на крыльце" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-02-48.jpg", alt: "Веселая забава на идеально гладком льду" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-05-01.jpg", alt: "Командное фото на синем льду" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-05-36.jpg", alt: "Групповое фото с отражением во льду" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-05-42.jpg", alt: "Команда на фоне бескрайнего льда Байкала" },
      ],
    },
    {
      id: "baikal-tents",
      title: "Байкал в палатках",
      coverImage: "https://cdn.poehali.dev/files/photo_2025-12-23_10-13-45.jpg",
      images: [
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-13-45.jpg", alt: "Палатка на льду Байкала на закате" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-13-41.jpg", alt: "Ночной лагерь с палатками под звездным небом" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-13-42.jpg", alt: "Светящиеся палатки на ночном льду Байкала" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-13-51.jpg", alt: "Велосипедисты в деревне по дороге на Байкал" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-13-55.jpg", alt: "Туристы на велосипедах в весеннем селе" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-00.jpg", alt: "Двое велосипедистов в яркой экипировке" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-03.jpg", alt: "Отдых на прозрачном льду Байкала" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-06.jpg", alt: "На фоне ледяных гротов Байкала" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-10.jpg", alt: "У ледяной скалы на льду озера" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-12.jpg", alt: "Команда на льду Байкала в ярких куртках" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-16.jpg", alt: "Фотограф на фоне ледяных скал Байкала" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-19.jpg", alt: "Сборы группы на солнечном льду" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-23.jpg", alt: "Коньки на прозрачном льду - вид сверху" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-26.jpg", alt: "С санями по гладкому льду Байкала" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-30.jpg", alt: "Желтая палатка на фоне скал и озера" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-34.jpg", alt: "Утренний завтрак у палатки на льду" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-37.jpg", alt: "Готовка еды на закате у желтой палатки" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-40.jpg", alt: "Костер на льду Байкала в сумерках" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-44.jpg", alt: "Двое туристов с санями на прозрачном льду" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-48.jpg", alt: "Путь по зеркальному льду Байкала с рюкзаком" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-50.jpg", alt: "Группа с санями в пути по льду" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-54.jpg", alt: "Остановка на маршруте у скал" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-14-57.jpg", alt: "Двое идут по узорчатому льду с санями" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-15-01.jpg", alt: "Подъем по заснеженному склону в лесу" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-15-08.jpg", alt: "Туристы на перевале среди сосен" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-15-13.jpg", alt: "Селфи троих друзей на снегу" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-15-19.jpg", alt: "Отдых группы на склоне с видом на озеро" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-15-22.jpg", alt: "Веселая компания на снежном склоне" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-15-25.jpg", alt: "Закат над лагерем на льду Байкала" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-15-29.jpg", alt: "Кусочек льда на фоне заката" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-15-33.jpg", alt: "Отдых на прозрачном льду у скал" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-15-39.jpg", alt: "Отражение в маске на льду" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-15-42.jpg", alt: "Одинокий путник с санями по льду" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-15-46.jpg", alt: "У костра в ночи на Байкале" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-15-47.jpg", alt: "Силуэт палатки на рассвете" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-15-50.jpg", alt: "Обед группы у костра на скалистом берегу" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-15-53.jpg", alt: "Отдых на белоснежном льду с санями" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-15-56.jpg", alt: "Туристы отдыхают на солнечном льду Байкала" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_10-16-00.jpg", alt: "Утренний чай группы на каменистом берегу" },
      ],
    },
    {
      id: "altai-belukha",
      title: "Поход к горе Белухе",
      coverImage: "https://cdn.poehali.dev/files/photo_2025-12-23_11-31-38.jpg",
      images: [
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-31-38.jpg", alt: "Группа туристов на горной тропе Алтая" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-30-08.jpg", alt: "Вид на бирюзовое озеро с горами" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-30-12.jpg", alt: "Отдых группы на зеленых альпийских лугах" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-30-30.jpg", alt: "Вьючные лошади в сосновом лесу" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-30-34.jpg", alt: "Караван с лошадьми на высокогорном перевале" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-30-38.jpg", alt: "Переправа через горный ручей" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-30-42.jpg", alt: "Гид рассказывает о каменных пирамидах" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-30-44.jpg", alt: "Вечер у костра в горах" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-30-48.jpg", alt: "Группа на фоне горного озера" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-31-46.jpg", alt: "Бирюзовое озеро с отражением гор" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-31-50.jpg", alt: "Река молочного цвета в хвойной долине" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-31-57.jpg", alt: "Турист на берегу озера с горными вершинами" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-32-01.jpg", alt: "Лагерь на берегу реки среди зеленых холмов" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-32-05.jpg", alt: "Спокойная гладь озера с затопленными деревьями" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-32-09.jpg", alt: "Каменистый берег горного озера" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-32-13.jpg", alt: "Инструктаж группы в хвойном лесу" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-32-19.jpg", alt: "Панорама озера в пасмурный день" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-32-23.jpg", alt: "Вся группа на вершине горы" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-32-28.jpg", alt: "Селфи на вершине с видом на долину" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-32-31.jpg", alt: "Гид на фоне горного озера и вершин" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-32-37.jpg", alt: "Вид на гору Белуху с долины реки" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-32-44.jpg", alt: "Деревянная часовня на фоне ледников Белухи" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-32-49.jpg", alt: "Турист на каменистом плато перед ледником" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-32-54.jpg", alt: "Три туристки у горного озера босиком" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-32-58.jpg", alt: "Привал группы на зеленом холме" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-33-05.jpg", alt: "Переход через горную реку с видом на Белуху" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-33-08.jpg", alt: "Переправа через горный ручей по деревянному мостику" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-33-12.jpg", alt: "Вечер у костра всей группой в тумане" },
      ],
    },
    {
      id: "kamchatka",
      title: "Камчатка — три вулкана",
      coverImage: "https://cdn.poehali.dev/files/photo_2025-12-23_11-41-12.jpg",
      images: [
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-41-12.jpg", alt: "Селфи на вершине вулкана над облаками" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-36-29.jpg", alt: "Туристка на фоне горных хребтов Камчатки" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-36-30.jpg", alt: "Гид с треккинговыми палками на закате" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-36-32 (2).jpg", alt: "На вершине холма с панорамой Камчатки" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-36-32 (3).jpg", alt: "Турист на склоне вулканической долины" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-36-32 (4).jpg", alt: "Одинокая береза на склоне холма с туристом" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-36-32.jpg", alt: "Отдых на вершине с панорамой Камчатки" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-39-58.jpg", alt: "Группа у высокого водопада в каньоне" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-40-03.jpg", alt: "Красная палатка на фоне вулкана в тумане" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-40-10.jpg", alt: "Лагерь в ущелье с паром от горячих источников" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-40-16.jpg", alt: "Пара туристов жарят зефир на вершине вулкана" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-40-22.jpg", alt: "Большая группа туристов с гидом на фоне леса" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-40-30.jpg", alt: "Гид у костра с бутербродом в руках" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-40-37.jpg", alt: "Группа у высокого водопада в скалах на закате" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-40-45.jpg", alt: "Команда на снежнике перед водопадом" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-40-50.jpg", alt: "Две туристки в тумане улыбаются" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-40-59.jpg", alt: "Вся команда на вулканическом плато над облаками" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-41-07.jpg", alt: "Красный вулканический хребет над облаками с вулканом вдали" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-41-15.jpg", alt: "Заснеженный вулкан на закате" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-41-18.jpg", alt: "Группа на вершине вулкана с паром и видом на другой вулкан" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-41-19.jpg", alt: "Группа идет по дымящемуся вулканическому хребту" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-41-29.jpg", alt: "Кратерное озеро с бирюзовой водой внутри вулкана" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-41-36.jpg", alt: "Турист в желтой куртке на фоне кратерного озера" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-41-41.jpg", alt: "Пятеро друзей на краю кратера с видом на озеро" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-41-48.jpg", alt: "Турист с палками на склоне вулкана" },
      ],
    },
    {
      id: "kolyma",
      title: "Путешествие за золотом Колымы",
      coverImage: "https://cdn.poehali.dev/files/photo_2025-12-23_11-45-08.jpg",
      images: [
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-45-08.jpg", alt: "Селфи группы на вершине с геодезическим знаком" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-44-56.jpg", alt: "Утренний туман над замерзшим озером и горами" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-44-57.jpg", alt: "Светящаяся палатка в темноте ночи" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-45-04.jpg", alt: "Группа на песчаном берегу озера с горами" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-45-14.jpg", alt: "Четверо у деревянного знака на вершине" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-46-30 (2).jpg", alt: "Песчаный берег озера с лиственницами на закате" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-46-30.jpg", alt: "Заснеженные пики гор на фоне синего неба" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-46-31.jpg", alt: "Озеро с горным хребтом и лучами солнца сквозь облака" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-46-32 (2).jpg", alt: "Группа туристов на каменистой вершине с панорамой Колымы" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-46-32 (3).jpg", alt: "Панорама горных пиков над озером и лесами лиственниц" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-46-32 (4).jpg", alt: "Живописное озеро в окружении гор и осенних лиственниц" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-46-32 (5).jpg", alt: "Туристка в розовом пуховике у лагеря на берегу озера" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-46-32 (6).jpg", alt: "Светящиеся палатки под звездным небом с гирляндами" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-46-32 (7).jpg", alt: "Силуэт рыбака на фоне гор и озера" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-46-32 (8).jpg", alt: "Гид на песчаном берегу озера с видом на горы" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-46-32 (9).jpg", alt: "Рыбак в тумане на озере с отражением" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-46-32.jpg", alt: "Двое друзей на каменистой вершине с видом на озера" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-46-33.jpg", alt: "Селфи двух туристов на фоне озера и гор Колымы" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-46-34.jpg", alt: "Турист отдыхает на каменистой вершине с рюкзаком" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-46-45.jpg", alt: "Осенняя лиственница на фоне озера с отражением облаков" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-46-53.jpg", alt: "Каменистый берег озера с осенними лиственницами и горами" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-47-01.jpg", alt: "Перекус на вершине с панорамой Колымы" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-47-03.jpg", alt: "Двое туристов у костра ночью с палатками на фоне" },
      ],
    },
    {
      id: "dagestan",
      title: "Дагестан: Кавказская тропа",
      coverImage: "https://cdn.poehali.dev/files/photo_2025-12-23_11-26-36.jpg",
      images: [
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-26-36.jpg", alt: "Турист с маком в волосах на фоне зеленой долины Дагестана" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-26-44.jpg", alt: "Закат над горами Дагестана с желтыми цветами на переднем плане" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-26-49.jpg", alt: "Река в зеленой долине между гор на закате" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-26-56.jpg", alt: "Глубокое горное ущелье с рекой в Дагестане" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-27-06.jpg", alt: "Турист на краю скалы над глубоким каньоном" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-27-10.jpg", alt: "Туристка в красной шапке на вершине с панорамой долины" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-27-13.jpg", alt: "Вид на реку Сулак в глубоком ущелье с солнцем в облаках" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-27-18.jpg", alt: "Туристка в салатовом пуховике на горном плато" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-27-25.jpg", alt: "Сурок на краю обрыва у дагестанского села" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-27-27.jpg", alt: "Туристка в розовой куртке на фоне гор Дагестана" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-27-30.jpg", alt: "Турист на скале спиной к камере с видом на заснеженные горы" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-27-35.jpg", alt: "Двое туристов на краю обрыва с панорамой долины" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-27-40.jpg", alt: "Лошади на пастбище через цветущие ветки яблони" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-27-48.jpg", alt: "Туристка в красной флиске с большим рюкзаком среди цветущих яблонь" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-27-51.jpg", alt: "Турист в салатовой шапке на фоне гор Дагестана с ручьем в долине" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-27-56.jpg", alt: "Мальчик и женщина с треккинговыми палками на горном плато" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-28-00.jpg", alt: "Селфи группы туристов на склоне в Дагестане" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-28-06.jpg", alt: "Группа из четырех человек на перевале с панорамой гор" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-28-11.jpg", alt: "Весеннее ущелье с ручьем и цветущими деревьями в Дагестане" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-28-13.jpg", alt: "Светящаяся палатка ночью на фоне горного села Дагестана" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-28-18.jpg", alt: "Закат в лагере с силуэтом туриста и палаткой" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-28-29.jpg", alt: "Туристка с рюкзаком на лесной тропе в Дагестане" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-28-36.jpg", alt: "Группа туристов на привале с панорамой гор Дагестана" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-28-42.jpg", alt: "Селфи группы на солнечном склоне с видом на село в долине" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-28-44.jpg", alt: "Турист отдыхает у костра ночью в горах Дагестана" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-28-52.jpg", alt: "Турист с большим рюкзаком переходит каменистое русло реки" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-29-04.jpg", alt: "Трое друзей на горной тропе с панорамой Дагестана" },
        { url: "https://cdn.poehali.dev/files/photo_2025-12-23_11-29-15.jpg", alt: "Древняя каменная арка с туристами в красном у входа" },
      ],
    },
  ];

  const openGallery = (gallery: PhotoGallery) => {
    setSelectedGallery(gallery);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (!selectedGallery) return;
    setCurrentImageIndex((prev) => 
      prev === selectedGallery.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!selectedGallery) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedGallery.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 md:mb-4">Фотогалерея</h2>
            <p className="text-base md:text-lg text-muted-foreground">Путешествия в фотографиях</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photoGalleries.map((gallery) => (
              <Card
                key={gallery.id}
                className="cursor-pointer group overflow-hidden hover:shadow-xl transition-all duration-300"
                onClick={() => openGallery(gallery)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={gallery.coverImage}
                    alt={gallery.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-heading font-bold text-xl text-white mb-1">
                      {gallery.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <Icon name="Images" size={16} />
                      <span>{gallery.images.length} фото</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 hover:scale-105 hover:shadow-lg transition-all duration-300"
              onClick={() => setShowBookingForm(true)}
            >Оставить заявку на тур и получить сертификат на 5 000р🎁</Button>
          </div>
        </div>
      </section>

      <DialogPrimitive.Root open={selectedGallery !== null} onOpenChange={closeGallery}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/95" />
          <DialogPrimitive.Content className="fixed left-0 top-0 z-50 w-screen h-screen flex flex-col bg-black">
            {selectedGallery && selectedGallery.images.length > 0 && (
              <>
                <VisuallyHidden>
                  <DialogPrimitive.Title>{selectedGallery.title}</DialogPrimitive.Title>
                </VisuallyHidden>
                
                <button
                  onClick={closeGallery}
                  className="absolute top-4 right-4 z-50 bg-white hover:bg-gray-100 p-2 rounded-full transition-all shadow-lg"
                  aria-label="Закрыть галерею"
                >
                  <Icon name="X" size={24} className="text-black" />
                </button>

                <div className="flex-1 flex items-center justify-center px-20 py-4 relative" style={{ maxHeight: 'calc(100vh - 200px)' }}>
                  <img
                    key={currentImageIndex}
                    src={selectedGallery.images[currentImageIndex].url}
                    alt={selectedGallery.images[currentImageIndex].alt}
                    className="max-w-full max-h-full object-contain"
                  />
                  
                  {selectedGallery.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-full transition-all shadow-lg z-20"
                        aria-label="Предыдущее фото"
                      >
                        <Icon name="ChevronLeft" size={36} className="text-black" />
                      </button>
                      
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-full transition-all shadow-lg z-20"
                        aria-label="Следующее фото"
                      >
                        <Icon name="ChevronRight" size={36} className="text-black" />
                      </button>
                    </>
                  )}
                </div>

                <div className="bg-gray-900 border-t border-gray-800 flex-shrink-0 max-h-[200px]">
                  <div className="px-4 py-3">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-heading font-bold text-base text-white">
                        {selectedGallery.title}
                      </h3>
                      <span className="text-gray-300 text-sm font-medium">
                        {currentImageIndex + 1} / {selectedGallery.images.length}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 overflow-x-auto overflow-y-hidden px-4 pb-3 h-[88px]">
                    {selectedGallery.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`flex-shrink-0 w-20 h-20 rounded overflow-hidden border-2 transition-all ${
                          idx === currentImageIndex
                            ? "border-white ring-2 ring-white scale-105"
                            : "border-gray-600 opacity-60 hover:opacity-100 hover:border-gray-400"
                        }`}
                      >
                        <img
                          src={img.url}
                          alt={img.alt}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>

      <Dialog open={showBookingForm} onOpenChange={setShowBookingForm}>
        <DialogContent className="max-w-md w-[95vw] sm:w-full max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-2xl font-heading leading-tight">
              Забронировать тур
            </DialogTitle>
            <DialogDescription className="text-sm">
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
                console.log('✅ Форма бронирования из галереи отправлена');
                if (typeof window !== 'undefined' && (window as any).ym) {
                  console.log('✅ Отправка цели в Метрику: booking_submit');
                  (window as any).ym(106027453, 'reachGoal', 'booking_submit');
                } else {
                  console.warn('⚠️ Яндекс.Метрика не загружена при отправке формы из галереи');
                }
                
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
              <InputMask
                mask="+7 (999) 999-99-99"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              >
                {(inputProps: any) => (
                  <Input 
                    {...inputProps}
                    type="tel" 
                    placeholder="+7 (999) 123-45-67" 
                    required
                  />
                )}
              </InputMask>
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
                  <SelectItem value="Коньковый поход по зимнему Байкалу - 75 000 ₽">Коньковый поход по зимнему Байкалу - 75 000 ₽</SelectItem>
                  <SelectItem value="Байкал в палатках - 61 000 ₽">Байкал в палатках - 61 000 ₽</SelectItem>
                  <SelectItem value="Поход к горе Белухе - 78 800 ₽">Поход к горе Белухе - 78 800 ₽</SelectItem>
                  <SelectItem value="Камчатка — три вулкана - 83 200 ₽">Камчатка — три вулкана - 83 200 ₽</SelectItem>
                  <SelectItem value="Путешествие за золотом Колымы - 92 000 ₽">Путешествие за золотом Колымы - 92 000 ₽</SelectItem>
                  <SelectItem value="Дагестан: Кавказская тропа по краю башен - 54 900 ₽">Дагестан: Кавказская тропа по краю башен - 54 900 ₽</SelectItem>
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
              className="w-full"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PhotoGallerySection;