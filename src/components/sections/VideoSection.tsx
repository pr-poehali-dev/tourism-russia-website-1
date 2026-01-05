import VideoPlayer from "@/components/ui/video-player";

const VideoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Видео о наших турах
          </h2>
          <p className="text-lg text-muted-foreground">
            Посмотрите, как проходят наши путешествия
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <VideoPlayer
              src="https://cdn.poehali.dev/projects/YOUR_PROJECT_ID/bucket/videos/sample.mp4"
              poster="https://cdn.poehali.dev/files/2z7a6771.jpg"
              controls={true}
              className="aspect-video"
            />
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Чтобы добавить своё видео, загрузите файл через API или разместите его в облачном хранилище
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
