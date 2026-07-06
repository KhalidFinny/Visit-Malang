import { useEffect } from 'react';
import Lenis from 'lenis';



const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    const win = window as unknown as { lenis?: Lenis };
    win.lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      const win = window as unknown as { lenis?: Lenis };
      win.lenis = undefined;
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
