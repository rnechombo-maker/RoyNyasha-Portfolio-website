import type { GalleryItem } from '@/types/site';
import { cn } from '@utils/cn';

interface GallerySwipeStripProps {
  items: GalleryItem[];
  className?: string;
}

export default function GallerySwipeStrip({ items, className }: GallerySwipeStripProps) {
  return (
    <div className={cn('gallery-swipe-strip -mx-1 flex gap-3 overflow-x-auto px-1 pb-2 pt-1 sm:gap-4', className)}>
      {items.map((item) => (
        <article
          key={`${item.title}-swipe`}
          className="group w-[76vw] max-w-[260px] shrink-0 snap-start overflow-hidden rounded-[1.15rem] border border-accent/12 bg-bgSecondary/30 shadow-card sm:w-[220px]"
        >
          {item.imageSrc ? (
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={item.imageSrc}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary via-bgPrimary/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-[0.6rem] uppercase tracking-[0.26em] text-highlightSoft">{item.category}</p>
                <h3 className="mt-1 font-display text-lg font-semibold text-textPrimary">{item.title}</h3>
              </div>
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}
