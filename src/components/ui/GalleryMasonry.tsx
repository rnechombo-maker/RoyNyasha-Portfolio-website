import type { GalleryItem } from '@/types/site';
import { cn } from '@utils/cn';

interface GalleryMasonryProps {
  items: GalleryItem[];
  className?: string;
}

export default function GalleryMasonry({ items, className }: GalleryMasonryProps) {
  return (
    <div
      className={cn(
        'columns-1 gap-4 min-[425px]:columns-2 md:columns-3 lg:columns-4',
        className
      )}
    >
      {items.map((item) => (
        <article
          key={`${item.title}-${item.category}`}
          className="gallery-masonry-item group gallery-card mb-4 break-inside-avoid overflow-hidden rounded-[1.25rem] border border-accent/12 bg-bgSecondary/30 shadow-card"
        >
          {item.imageSrc ? (
            <div className="relative overflow-hidden">
              <img
                src={item.imageSrc}
                alt={item.title}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bgPrimary via-bgPrimary/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-highlightSoft">{item.category}</p>
                <h3 className="mt-1.5 font-display text-xl font-semibold text-textPrimary sm:text-2xl">{item.title}</h3>
                <p className="gallery-caption mt-2 text-sm leading-6 text-textPrimary/78">{item.description}</p>
              </div>
            </div>
          ) : (
            <div className="flex min-h-[200px] flex-col justify-end p-5">
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-highlightSoft">{item.category}</p>
              <h3 className="mt-1.5 font-display text-xl font-semibold text-textPrimary">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-textPrimary/68">{item.description}</p>
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
