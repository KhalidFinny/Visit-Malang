interface ButtonProps {
  onClick: () => void;
  children: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Button({ onClick, children, className = "", style }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer hover:opacity-90 active:scale-[0.97] ${className}`}
      style={style}
    >
      {children}
    </button>
  );
}
