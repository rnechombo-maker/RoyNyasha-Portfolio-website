import type { GalleryItem } from '@/types/site';

interface GallerySwipeStripProps {
  items: GalleryItem[];
}

export default function GallerySwipeStrip({ items }: GallerySwipeStripProps) {
  return (
    <div className="gallery-swipe-strip -mx-1 flex gap-3 overflow-x-auto px-1 pb-2 pt-1 sm:gap-4">
      {items.map((item) => (
        <article
          key={`${item.title}-swipe`}
          className="group w-[72vw] max-w-[220px] shrink-0 snap-start overflow-hidden rounded-[1.15rem] border border-accent/12 bg-bgSecondary/30 shadow-card sm:w-[200px]"
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
