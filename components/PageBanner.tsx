import Image from "next/image";

interface PageBannerProps {
  badge?: string;
  title: string;
  description: string;
  imageUrl?: string;
}

export default function PageBanner({ badge, title, description, imageUrl }: PageBannerProps) {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
      {imageUrl && (
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            priority
            unoptimized
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-primary/40 to-primary-dark/55"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-primary/20"></div>
        </div>
      )}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          {badge && (
            <div className="inline-block mb-3 sm:mb-4 fade-in">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/25 backdrop-blur-sm text-white rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide border border-white/30 shadow-lg">
                {badge}
              </span>
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-3 sm:mb-4 px-2 fade-in-delay-1 drop-shadow-lg">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-95 max-w-3xl mx-auto px-4 fade-in-delay-2 drop-shadow-md leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

