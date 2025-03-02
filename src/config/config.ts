import type { AppConfig } from '@/types/AppConfig';

/**
 * Application configuration object
 */
export const config: AppConfig = {
  meta: {
    title: 'AppElent Template',
    version: 'v0.0.1',
    url: 'www.appelent.nl',
    copyright: 'AppElent',
  },
  paths: {
    auth: {
      login: '/sign-in',
      logout: '/logout',
      signup: '/sign-up',
      loginRedirect: '/app',
      redirectAfterLogin: '/app',
      redirectAfterLogout: '/app',
    },
    index: '/app',
    httpsRedirect: !import.meta.env.DEV && window.location.hostname !== 'localhost',
    rootRedirect: '/app',
  },
  settings: {
    logLevel: (localStorage.getItem('logLevel') as AppConfig['settings']['logLevel']) || 'error',
  },
  issueDialog: {
    // The issue dialog needs functions to open and close it
  },
  custom: {
    // All custom elements are optional
  },
};
