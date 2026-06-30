import type { ReactNode } from 'react';
import GradientBlobs from '@components/background/GradientBlobs';
import Particles from '@components/background/Particles';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import AnimatedCursor from '@components/ui/AnimatedCursor';
import ScrollProgressBar from '@components/ui/ScrollProgressBar';

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-bgPrimary text-textPrimary">
      <ScrollProgressBar />
      <AnimatedCursor />
      <div className="fixed inset-0 bg-[linear-gradient(180deg,rgba(250,247,240,0.02)_0%,rgba(27,27,27,0)_16%,rgba(27,27,27,0)_72%,rgba(0,0,0,0.12)_100%)]" />
      <GradientBlobs />
      <Particles />
      <div className="relative z-10">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
