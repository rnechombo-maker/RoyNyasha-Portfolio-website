import { useEffect, useRef, useState } from 'react';
import type { GalleryItem } from '@/types/site';
import { cn } from '@utils/cn';

interface GalleryAutoScrollProps {
  items: GalleryItem[];
  className?: string;
}

function GalleryCard({ item, duplicate = false }: { item: GalleryItem; duplicate?: boolean }) {
  return (
    <article
      className="group w-[200px] shrink-0 overflow-hidden rounded-[1.15rem] border border-accent/12 bg-bgSecondary/30 shadow-card sm:w-[220px]"
      aria-hidden={duplicate || undefined}
    >
      {item.imageSrc ? (
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={item.imageSrc}
            alt={duplicate ? '' : item.title}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bgPrimary via-bgPrimary/15 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
            <p className="text-[0.6rem] uppercase tracking-[0.26em] text-highlightSoft">{item.category}</p>
            <h3 className="mt-1 font-display text-lg font-semibold text-textPrimary">{item.title}</h3>
          </div>
        </div>
      ) : null}
    </article>
  );
}

export default function GalleryAutoScroll({ items, className }: GalleryAutoScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: '120px 0px', threshold: 0 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let resumeTimer: number;

    const pauseDuringScroll = () => {
      setIsPaused(true);
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => setIsPaused(false), 180);
    };

    window.addEventListener('scroll', pauseDuringScroll, { passive: true });
    window.addEventListener('wheel', pauseDuringScroll, { passive: true });
    window.addEventListener('touchmove', pauseDuringScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', pauseDuringScroll);
      window.removeEventListener('wheel', pauseDuringScroll);
      window.removeEventListener('touchmove', pauseDuringScroll);
      window.clearTimeout(resumeTimer);
    };
  }, []);

  if (items.length === 0) return null;

  const scrollDuration = Math.max(items.length * 3.5, 28);
  const animationPaused = isPaused || !isVisible;

  return (
    <div
      ref={containerRef}
      className={cn(
        'gallery-auto-scroll-shell overflow-hidden rounded-[1.75rem] border border-accent/15 bg-white/[0.03] p-3 sm:p-4',
        className
      )}
      aria-label="Photography gallery"
    >
      <div
        className={cn('gallery-auto-scroll-track flex w-max gap-3 sm:gap-4', animationPaused && 'is-paused')}
        style={{ '--gallery-scroll-duration': `${scrollDuration}s` } as React.CSSProperties}
      >
        {items.map((item) => (
          <GalleryCard key={`${item.title}-primary`} item={item} />
        ))}
        {items.map((item) => (
          <GalleryCard key={`${item.title}-duplicate`} item={item} duplicate />
        ))}
      </div>

      <div className="gallery-auto-scroll-fallback gap-3 sm:gap-4">
        {items.map((item) => (
          <GalleryCard key={`${item.title}-fallback`} item={item} />
        ))}
      </div>
    </div>
  );
}
