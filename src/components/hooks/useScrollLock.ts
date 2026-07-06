import { useEffect } from "react";

export function useScrollLock(isOpen: boolean) {
  useEffect(() => {
    if (!isOpen) return;

    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Find if target is inside a scrollable container in the modal
      const scrollContainer = target.closest(".overflow-y-auto, .overflow-auto, .modal-scrollable-content, [data-lenis-prevent]") as HTMLElement | null;
      if (!scrollContainer) {
        // Not inside any scrollable element -> prevent background scroll completely
        e.preventDefault();
        return;
      }

      // Inside a scrollable container: prevent scroll chaining when reaching top or bottom boundary
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
      const isAtTop = scrollTop <= 0 && e.deltaY < 0;
      const isAtBottom = Math.abs(scrollTop + clientHeight - scrollHeight) <= 2 && e.deltaY > 0;

      if (isAtTop || isAtBottom) {
        e.preventDefault();
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const scrollContainer = target.closest(".overflow-y-auto, .overflow-auto, .modal-scrollable-content, [data-lenis-prevent]") as HTMLElement | null;
      if (!scrollContainer) {
        e.preventDefault();
      }
    };

    // Add non-passive event listeners to intercept wheel and touchmove events
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    const win = window as unknown as { lenis?: { stop: () => void; start: () => void } };
    win.lenis?.stop();

    // Lock body and html overflow styles
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouchMove);
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      const win = window as unknown as { lenis?: { stop: () => void; start: () => void } };
      win.lenis?.start();
    };
  }, [isOpen]);
}
