interface VideoEmbedProps {
  url: string;
  title?: string;
  className?: string;
}

export const VideoEmbed = ({ url, title = 'Видео', className = '' }: VideoEmbedProps) => {
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes('vk.com/video')) {
      return url.replace('vk.com/video', 'vk.com/video_ext.php');
    }
    if (url.includes('rutube.ru/video/')) {
      const videoId = url.split('video/')[1]?.split('/')[0];
      return `https://rutube.ru/play/embed/${videoId}`;
    }
    if (url.includes('dzen.ru/video/watch/')) {
      const videoId = url.split('watch/')[1]?.split('?')[0];
      return `https://dzen.ru/embed/${videoId}`;
    }
    return url;
  };

  const embedUrl = getEmbedUrl(url);

  return (
    <div className={`rounded-xl overflow-hidden bg-gray-100 ${className}`}>
      <div className="relative aspect-video">
        <iframe
          src={embedUrl}
          title={title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};
