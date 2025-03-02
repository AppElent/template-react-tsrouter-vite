import { config } from '@/config/config';
import { menu } from '@/config/menu';
import type { TFunction } from 'i18next';
import { create } from 'zustand';

type ConfigStore = {
  config: typeof config;
  menu: typeof menu;
  setConfig: (config: ConfigStore['config']) => void;
  setMenu: (menu: ConfigStore['menu']) => void;
  changeLanguage: (t: TFunction) => void;
};

export const useConfigStore = create<ConfigStore>((set) => ({
  config,
  menu,
  setConfig: (config: ConfigStore['config']) => set({ config }),
  setMenu: (menu: ConfigStore['menu']) => set({ menu }),
  changeLanguage: (t) => {
    const newMenu = JSON.parse(JSON.stringify(menu));
    // Change menu items that have a translation key
    newMenu.navigation.forEach(
      (item: {
        translationKey?: string;
        label: string;
        items?: { label: string; translationKey?: string; to: string }[];
      }) => {
        if (item.translationKey) {
          item.label = t(item.translationKey, { defaultValue: item.label });
        }
        if (item.items) {
          item.items.forEach((subItem) => {
            if (subItem.translationKey) {
              subItem.label = t(subItem.translationKey, { defaultValue: subItem.label });
            }
          });
        }
      }
    );
  },
}));
