/**
 * Application configuration interface
 */
export interface AppConfig {
  meta: {
    /** Application title */
    title: string;
    /** Application version */
    version?: string;
    /** Copyright information */
    copyright?: string;
    /** Application URL */
    url?: string;
  };
  paths: {
    auth: {
      /** Path to login */
      login: string;
      /** Path to logout */
      logout: string;
      /** Path to signup */
      signup: string;
      /** Path to redirect after login */
      loginRedirect: string;
      /** Path to redirect after login */
      redirectAfterLogin: string;
      /** Path to redirect after logout */
      redirectAfterLogout: string;
    };
    /** Path to index */
    index: string;
    /** Flag to indicate if HTTPS redirection is enabled */
    httpsRedirect: boolean;
    /** Path to redirect from root */
    rootRedirect: string;
  };
  settings: {
    /** Log level setting */
    logLevel: 'info' | 'debug' | 'warn' | 'error';
  };
  /** Issue dialog configuration */
  issueDialog?: {
    [key: string]: any;
  };
  /** Custom configuration */
  custom?: {
    [key: string]: any;
  };
}
