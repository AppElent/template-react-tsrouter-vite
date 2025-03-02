import { languageOptions } from '@/config/locales';
import { useLanguageChange } from '@/lib/i18n';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const languages = Object.entries(languageOptions).map(([code, { label, flag }]) => ({
  name: label,
  flag,
  code,
}));

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useLanguageChange();

  // Current language
  const currentLang = languages.find((lang) => lang.code === i18n.language) || languages[0];

  // Toggle dropdown
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Change language
  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div
      className="relative"
      ref={dropdownRef}
    >
      {/* Button with flag only */}
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center w-8 h-8 rounded-full bg-background hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
        aria-label="Switch language"
      >
        <span className="text-lg">{currentLang.flag}</span>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-background border border-border rounded-lg shadow-lg animate-in fade-in zoom-in-95 duration-200">
          <ul className="py-1">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-muted transition-colors ${
                    lang.code === currentLang.code ? 'bg-muted font-semibold' : ''
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
