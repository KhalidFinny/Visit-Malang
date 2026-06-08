import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'en', label: 'English', abbr: 'EN' },
  { code: 'id', label: 'Indonesian', abbr: 'ID' },
  { code: 'zh', label: 'Chinese', abbr: '中文' },
  { code: 'ja', label: 'Japanese', abbr: '日本語' },
  { code: 'ko', label: 'Korean', abbr: '한국어' },
  { code: 'fr', label: 'French', abbr: 'FR' },
  { code: 'nl', label: 'Dutch', abbr: 'NL' },
  { code: 'de', label: 'German', abbr: 'DE' },
  { code: 'ru', label: 'Russian', abbr: 'RU' },
  { code: 'es', label: 'Spanish', abbr: 'ES' },
];

// Map code to a short emoji-like badge or just 2-letter
function shortCode(code: string): string {
  const map: Record<string, string> = {
    en: 'EN', id: 'ID', zh: '中', ja: '日', ko: '韓',
    fr: 'FR', nl: 'NL', de: 'DE', ru: 'RU', es: 'ES',
  };
  return map[code] || code.toUpperCase();
}

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find(l => l.code === (i18n.language?.split('-')[0] || 'en')) || LANGUAGES[0];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl text-[13px] font-semibold tracking-wide
          bg-white/70 backdrop-blur-md border border-black/8
          text-[#1a1a1a]/60 hover:text-[#1a1a1a] hover:bg-white/90
          shadow-sm hover:shadow-md
          transition-all duration-200 ease-out"
      >
        <span className="text-[11px] font-bold tracking-wider">{currentLang.label}</span>
        <svg
          width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute top-full right-0 mt-2 py-2 w-48 rounded-2xl
            bg-white/90 backdrop-blur-xl border border-black/8
            shadow-xl shadow-black/5
            overflow-hidden z-[9999]"
        >
          {LANGUAGES.map((lang) => {
            const isActive = lang.code === currentLang.code;
            return (
              <button
                key={lang.code}
                onClick={() => {
                  i18n.changeLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-[13px] transition-all duration-150 text-left
                  ${isActive
                    ? 'bg-black/5 text-[#1a1a1a] font-semibold'
                    : 'text-[#1a1a1a]/55 hover:text-[#1a1a1a] hover:bg-black/[0.03]'
                  }`}
              >
                <span className="w-8 h-6 flex items-center justify-center text-[10px] font-bold tracking-wider rounded bg-black/5 text-[#1a1a1a]/50 shrink-0">
                  {shortCode(lang.code)}
                </span>
                <span className="flex-1 font-medium">{lang.label}</span>
                <span className="text-[11px] text-[#1a1a1a]/35">{lang.abbr}</span>
                {isActive && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="shrink-0 text-[#1a1a1a]/40">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
