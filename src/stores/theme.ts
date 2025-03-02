import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Mode = 'light' | 'dark' | 'system';

type ThemeStore = {
  theme: Mode;
  setTheme: (theme: Mode) => void;
};

const setMode = (theme: Mode) => {
  const root = window.document.documentElement;

  root.classList.remove('light', 'dark');

  if (theme === 'system') {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';

    root.classList.add(systemTheme);
    return;
  }

  root.classList.add(theme);
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'light', // Default value
      setTheme: (theme: Mode) => {
        set({ theme });
        setMode(theme); // Apply theme (e.g., toggle CSS classes)
      },
    }),
    {
      name: 'theme', // Key in localStorage
      partialize: (state) => ({ theme: state.theme }), // Only persist theme
    }
  )
);
