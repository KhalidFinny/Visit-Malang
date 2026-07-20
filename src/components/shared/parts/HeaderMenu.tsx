import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCompass,
  faEnvelope,
  faGlobe,
  faChevronDown,
  faCheck,
  faSliders,
} from '@fortawesome/free-solid-svg-icons';
import type { HeaderMenuProps } from '../types';

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

export default function HeaderMenu({
  onOpenPassport,
  onOpenPostcard,
}: HeaderMenuProps) {
  const { i18n } = useTranslation();
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const toolsRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  const currentLangCode = i18n.language?.split('-')[0] || 'en';
  const currentLang = LANGUAGES.find((l) => l.code === currentLangCode) || LANGUAGES[0];

  // Close dropdowns on click outside or ESC key
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (isToolsOpen && toolsRef.current && !toolsRef.current.contains(target)) {
        setIsToolsOpen(false);
      }
      if (isLangOpen && langRef.current && !langRef.current.contains(target)) {
        setIsLangOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setIsToolsOpen(false);
        setIsLangOpen(false);
      }
    }

    if (isToolsOpen || isLangOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isToolsOpen, isLangOpen]);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsLangOpen(false);
  };

  return (
    <div className="fixed top-3 inset-x-3 sm:top-4 sm:right-4 sm:left-auto z-[9999] flex items-center justify-between sm:justify-end sm:gap-2">
      {/* ════════════════════════════════════════════════════════════
          1. INTERACTIVE TOOLS DROPDOWN
      ════════════════════════════════════════════════════════════ */}
      <div ref={toolsRef} className="relative">
        <button
          onClick={() => {
            setIsToolsOpen((prev) => !prev);
            setIsLangOpen(false);
          }}
          className={`px-3.5 py-2.5 sm:px-4 sm:py-2.5 backdrop-blur-md border rounded-full shadow-lg flex items-center gap-2 transition-all cursor-pointer select-none text-sm font-bold uppercase tracking-wider ${
            isToolsOpen
              ? 'bg-black text-white border-black'
              : 'bg-white/90 hover:bg-white text-black border-black/12'
          }`}
          aria-expanded={isToolsOpen}
        >
          <FontAwesomeIcon icon={faSliders} className="text-sm text-[#7a9e64]" />
          <span className="hidden sm:inline">Exploration Tools</span>
          <span className="sm:hidden">Tools</span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`text-sm opacity-60 transition-transform duration-300 ${
              isToolsOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        <AnimatePresence>
          {isToolsOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              data-lenis-prevent="true"
              className="absolute left-0 sm:right-0 sm:left-auto top-full mt-2 w-[290px] sm:w-[320px] bg-white border border-black/12 rounded-3xl p-4 shadow-2xl text-black select-none overflow-y-auto max-h-[70vh] [overscroll-behavior:contain] scrollbar-none"
            >
              <div className="mb-3">
                <span className="text-sm font-black uppercase tracking-widest text-black/45">
                  Interactive Features
                </span>
              </div>

              <div className="space-y-1.5">
                <button
                  onClick={() => {
                    setIsToolsOpen(false);
                    onOpenPassport();
                  }}
                  className="w-full p-3 rounded-2xl bg-black/[0.03] hover:bg-black/10 border border-black/5 flex items-center justify-between text-left transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#7a9e64]/15 text-[#7a9e64] flex items-center justify-center text-sm group-hover:scale-110 transition-transform">
                      <FontAwesomeIcon icon={faCompass} />
                    </div>
                    <div>
                      <span className="text-sm font-black uppercase tracking-wider block leading-tight text-black">
                        Stamp Passport
                      </span>
                      <span className="text-sm text-black/45 font-medium block mt-0.5">
                        GPS & Photo Landmark Stamps
                      </span>
                    </div>
                  </div>
                </button>


                <button
                  onClick={() => {
                    setIsToolsOpen(false);
                    onOpenPostcard();
                  }}
                  className="w-full p-3 rounded-2xl bg-black/[0.03] hover:bg-black/10 border border-black/5 flex items-center justify-between text-left transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/15 text-amber-600 flex items-center justify-center text-sm group-hover:scale-110 transition-transform">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div>
                      <span className="text-sm font-black uppercase tracking-wider block leading-tight text-black">
                        Postcard Maker
                      </span>
                      <span className="text-sm text-black/45 font-medium block mt-0.5">
                        Custom Visual Souvenirs
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ════════════════════════════════════════════════════════════
          2. STANDALONE GUIDE TRANSLATION DROPDOWN
      ════════════════════════════════════════════════════════════ */}
      <div ref={langRef} className="relative">
        <button
          onClick={() => {
            setIsLangOpen((prev) => !prev);
            setIsToolsOpen(false);
          }}
          className={`px-3.5 py-2.5 sm:px-4 sm:py-2.5 backdrop-blur-md border rounded-full shadow-lg flex items-center gap-2 transition-all cursor-pointer select-none text-sm font-bold uppercase tracking-wider ${
            isLangOpen
              ? 'bg-black text-white border-black'
              : 'bg-white/90 hover:bg-white text-black border-black/12'
          }`}
          aria-expanded={isLangOpen}
        >
          <FontAwesomeIcon icon={faGlobe} className="text-sm text-[#7a9e64]" />
          <span className="font-mono font-black text-sm">{currentLang.abbr}</span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`text-sm opacity-60 transition-transform duration-300 ${
              isLangOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        <AnimatePresence>
          {isLangOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              data-lenis-prevent="true"
              className="absolute right-0 top-full mt-2 w-[280px] sm:w-[310px] bg-white border border-black/12 rounded-3xl p-4 shadow-2xl text-black select-none overflow-y-auto max-h-[70vh] [overscroll-behavior:contain] scrollbar-none"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-black uppercase tracking-widest text-[#7a9e64]">
                  🌐 Guide Language
                </span>
                <span className="text-sm font-mono font-bold text-black/50">
                  {currentLang.label}
                </span>
              </div>
              <p className="text-sm text-black/45 font-medium leading-normal mb-3">
                Translate all maps, history timelines, and travel advisor details instantly.
              </p>

              <div className="grid grid-cols-2 gap-1.5 max-h-[160px] overflow-y-auto pr-1">
                {LANGUAGES.map((lang) => {
                  const isSelected = lang.code === currentLangCode;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`px-3 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-black text-white font-bold'
                          : 'bg-black/[0.02] border border-black/5 text-black/75 hover:bg-black/8 hover:text-black'
                      }`}
                    >
                      <span className="truncate">{lang.label}</span>
                      {isSelected && (
                        <FontAwesomeIcon icon={faCheck} className="text-sm text-[#7a9e64]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
