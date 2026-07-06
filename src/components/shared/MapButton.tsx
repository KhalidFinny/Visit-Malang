import type { MapButtonProps } from './types';

/**
 * Flat, no-gimmick map button. No shadows, no backdrop blur, no 3D.
 * Just clean typography on a flat surface with a subtle border.
 */
export default function MapButton({
  children,
  variant = 'flat',
  className = '',
  ...props
}: MapButtonProps) {
  const base = [
    'inline-flex items-center gap-2',
    'text-[13px] font-black uppercase tracking-widest',
    'border',
    'transition-colors duration-150',
    'active:bg-black/5',
    // no shadows, no backdrop blur, no scale transforms
  ].join(' ');

  const variants: Record<string, string> = {
    primary: 'bg-premium-black text-white border-premium-black hover:bg-premium-black/90',
    ghost: 'bg-transparent text-premium-black/60 border-transparent hover:text-premium-black hover:bg-black/5',
    flat: 'bg-white text-premium-black/70 border-black/10 hover:bg-black/[0.03] hover:text-premium-black',
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
