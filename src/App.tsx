import { lazy, Suspense, useEffect, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import SiteShell from '@components/layout/SiteShell';
import AppLoader from '@components/ui/AppLoader';
import SeoHead from '@components/ui/SeoHead';
import { seoByRoute } from '@constants/seo';
import { useLenis } from '@hooks/useLenis';

const HomePage = lazy(() => import('@pages/HomePage'));
const ProjectsPage = lazy(() => import('@pages/ProjectsPage'));
const BeyondCodePage = lazy(() => import('@pages/BeyondCodePage'));
const ContactPage = lazy(() => import('@pages/ContactPage'));
const NotFoundPage = lazy(() => import('@pages/NotFoundPage'));

export default function App() {
  useLenis();
  const location = useLocation();

  const seoMeta = useMemo(() => seoByRoute[location.pathname] ?? seoByRoute['/'], [location.pathname]);

  useEffect(() => {
    const scrollToPosition = () => {
      if (location.hash) {
        const target = document.querySelector(location.hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const timer = window.setTimeout(scrollToPosition, 60);
    return () => window.clearTimeout(timer);
  }, [location.hash, location.pathname]);

  return (
    <SiteShell>
      <SeoHead meta={seoMeta} />
      <Suspense fallback={<AppLoader />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/beyond-code" element={<BeyondCodePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </SiteShell>
  );
}
