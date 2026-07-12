import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'lenis/dist/lenis.css';
import Lenis from 'lenis';

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const disableLenis = pathname.startsWith('/place/');

  useEffect(() => {
    const win = window as unknown as { lenis?: Lenis };

    if (disableLenis) {
      if (win.lenis) {
        win.lenis.destroy();
        win.lenis = undefined;
      }
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    win.lenis = lenis;

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      const win = window as unknown as { lenis?: Lenis };
      win.lenis = undefined;
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [disableLenis]);

  return <>{children}</>;
};

export default SmoothScroll;
