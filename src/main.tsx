import { createRouter, RouterProvider } from '@tanstack/react-router';
import { StrictMode, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

import '@/lib/i18n'; // Initialize i18n
import { useThemeStore } from '@/stores/theme';
import { ClerkProvider, useAuth } from '@clerk/clerk-react';
import { dark } from '@clerk/themes';
import { LoadingPage } from './components/loading-page.tsx';
import { CLERK_PUBLIC_API_KEY } from './config/clerk.ts';
import reportWebVitals from './reportWebVitals.ts';
import { useDummyFirestoreStore } from './stores/dummy-firestore.ts';
import './styles.css';

// Define your context type
export interface RouterContext {
  auth: ReturnType<typeof useAuth>;
  getTitle?: () => string;
}

// Create a new router instance
const router = createRouter({
  routeTree,
  context: { auth: undefined } as unknown as RouterContext,
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

if (!CLERK_PUBLIC_API_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env.local file');
}

function OuterApp() {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    setTheme(theme);
  }, []);

  // Clean up subscriptions when components ummounts
  useEffect(() => {
    const unsubscribe = () => {
      useDummyFirestoreStore.getState().unsubscribe?.();
    };

    return unsubscribe;
  }, []);

  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLIC_API_KEY}
      afterSignOutUrl="/"
      appearance={{
        baseTheme: theme === 'dark' ? dark : undefined,
      }}
    >
      <InnerApp />
    </ClerkProvider>
  );
}

function InnerApp() {
  const auth = useAuth(); // Clerk's hook to get auth state
  if (!auth.isLoaded) {
    return <LoadingPage message="Loading.." />; // Wait for Clerk to load
  }
  return (
    <RouterProvider
      router={router}
      context={{ auth }}
    />
  );
}

// Render the app
const rootElement = document.getElementById('app')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <OuterApp />
    </StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
