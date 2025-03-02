import { languageOptions } from '@/config/locales';
import type { TFunction } from 'i18next';
import { t } from 'i18next';
import { create } from 'zustand';

type TranslationStore = {
  t: TFunction;
  setT: (t: TranslationStore['t']) => void;
  locale: (typeof languageOptions)[keyof typeof languageOptions];
  // setLocale: (locale: string) => void;
};

export const useTranslationStore = create<TranslationStore>((set) => ({
  t,
  setT: (t: TranslationStore['t']) => set({ t }),
  locale: languageOptions['en'],
  languageOptions,
  // setLocale: (locale: string) => set({ locale: languageOptions[locale] }),
}));

export const useT = () => useTranslationStore((s) => s.t);
