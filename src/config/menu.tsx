import { Handshake } from 'lucide-react';

type MenuItem = {
  label: string;
  translationKey?: string;
  items?: {
    label: string;
    translationKey?: string;
    icon?: React.ComponentType<{ className?: string }>;
    to: string;
  }[];
};

export type Menu = {
  dropdown: {
    key: string;
    label: string;
  }[];
  dropdownSelected: string;
  search: {
    placeholder: string;
  };
  navigation: MenuItem[];
};

export const menu: Menu = {
  dropdown: [{ key: '1.0', label: 'v1' }],
  dropdownSelected: '1.0',
  search: {
    placeholder: 'Search',
  },
  navigation: [
    {
      label: 'Home',
      items: [
        {
          label: 'About',
          to: '/app/about',
        },
        {
          label: 'Terms',
          to: '/terms',
          icon: Handshake,
        },
      ],
    },
    {
      label: 'Auth',
      items: [
        {
          label: 'Login',
          to: '/app/sign-in',
        },
        {
          label: 'Signup',
          to: '/app/sign-up',
        },
      ],
    },
    {
      label: 'Tests',
      items: [
        {
          label: 'Libs',
          to: '/app/tests/libs',
        },
        {
          label: 'Datasources',
          to: '/app/tests/datasources',
        },
      ],
    },
  ],
};
