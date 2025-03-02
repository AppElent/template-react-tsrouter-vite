import { useConfigStore } from '@/stores/config';
import { SignIn } from '@clerk/clerk-react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/app/_default/_auth/sign-in')({
  beforeLoad: () => ({ getTitle: () => 'Sign In' }),
  component: RouteComponent,
});

function RouteComponent() {
  const config = useConfigStore((state) => state.config);
  return (
    <div className="flex min-h-screen justify-center">
      <SignIn
        routing="path"
        path={config.paths.auth.login}
        signUpUrl={config.paths.auth.signup} // Optional: link to sign-up page
        fallbackRedirectUrl={config.paths.auth.redirectAfterLogin} // Redirect after sign-in
        appearance={{
          variables: {
            colorPrimary: '#4f46e5', // Tailwind indigo-600
            borderRadius: '0.5rem', // Tailwind rounded-md
          },
          elements: {
            formButtonPrimary: 'bg-indigo-600 hover:bg-indigo-700 text-white',
          },
        }}
      />
    </div>
  );
}
