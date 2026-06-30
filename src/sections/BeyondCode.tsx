import { FaInstagram } from 'react-icons/fa';
import { useEffect, useMemo, useState } from 'react';
import { ButtonAnchor, ButtonLink } from '@components/ui/Buttons';
import GalleryAutoScroll from '@components/ui/GalleryAutoScroll';
import GalleryMasonry from '@components/ui/GalleryMasonry';
import GallerySwipeStrip from '@components/ui/GallerySwipeStrip';
import SocialLinks from '@components/ui/SocialLinks';
import { SectionWrapper } from '@components/ui/SectionWrapper';
import { INSTAGRAM_PHOTOGRAPHY } from '@constants/brand';
import { creativeCategories, galleryItems } from '@constants/siteData';
import { cn } from '@utils/cn';

export default function BeyondCode({ expanded = false }: { expanded?: boolean }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(expanded ? 12 : Number.POSITIVE_INFINITY);

  const items = useMemo(() => {
    return selectedCategory === 'All' ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    setVisibleCount(expanded ? 12 : Number.POSITIVE_INFINITY);
  }, [expanded, selectedCategory]);

  const visibleItems = useMemo(() => items.slice(0, visibleCount), [items, visibleCount]);
  const previewItems = useMemo(() => items.slice(0, 12), [items]);
  const hasMoreItems = expanded && visibleItems.length < items.length;

  return (
    <SectionWrapper
      id="beyond-code"
      eyebrow="Beyond Code"
      title="Photography, videography, and digital storytelling sharpen how I build."
      description="Creative work has trained my eye for composition, mood, pacing, and detail. That same sensitivity shows up in how I design interfaces, present products, and shape digital experiences."
    >
      <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="glass-card border-highlight/20 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-highlight/30 bg-highlight/10 text-highlight">
              <FaInstagram size={22} aria-hidden />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-highlightSoft">Street Art Gallery</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-textPrimary sm:text-3xl">
                Photography & visual storytelling
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-textPrimary/72">
                A curated look at street photography, events, and cinematic visuals — the creative lens that informs how I design digital experiences.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonAnchor href={INSTAGRAM_PHOTOGRAPHY} target="_blank" rel="noreferrer">
                  View Photography
                </ButtonAnchor>
                <ButtonAnchor href={INSTAGRAM_PHOTOGRAPHY} target="_blank" rel="noreferrer" variant="secondary">
                  <FaInstagram size={16} aria-hidden /> Follow on Instagram
                </ButtonAnchor>
              </div>
            </div>
          </div>
        </div>
        {expanded ? (
          <div className="hidden lg:block">
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted">Also find me on</p>
            <SocialLinks />
          </div>
        ) : null}
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        {creativeCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={cn(
              'min-h-11 rounded-full border px-4 py-2 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight/60',
              selectedCategory === category
                ? 'border-highlight/45 bg-highlight/12 text-textPrimary'
                : 'border-accent/15 bg-white/[0.03] text-textPrimary/70 hover:border-highlight/35 hover:text-textPrimary'
            )}
            data-cursor="interactive"
          >
            {category}
          </button>
        ))}
      </div>

      {expanded ? (
        <>
          <GalleryMasonry items={visibleItems} />
          {hasMoreItems ? (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setVisibleCount((count) => count + 8)}
                data-cursor="interactive"
              >
                Load More Visuals
              </button>
            </div>
          ) : null}
        </>
      ) : (
        <>
          <GallerySwipeStrip items={previewItems} className="md:hidden" />
          <GalleryAutoScroll items={items} className="hidden md:block" />
        </>
      )}

      {!expanded ? (
        <div className="mt-10">
          <ButtonLink to="/beyond-code" variant="secondary">
            Explore Creative Work
          </ButtonLink>
        </div>
      ) : null}
    </SectionWrapper>
  );
}
