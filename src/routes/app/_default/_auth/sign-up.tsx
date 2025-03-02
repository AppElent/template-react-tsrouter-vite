import { useConfigStore } from '@/stores/config';
import { SignUp } from '@clerk/clerk-react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/app/_default/_auth/sign-up')({
  component: RouteComponent,
  // context: {
  //   getTitle: () => 'Sign Up',
  // }
});

function RouteComponent() {
  const config = useConfigStore((state) => state.config);
  return (
    <div className="flex min-h-screen justify-center">
      <SignUp
        routing="path"
        path={config.paths.auth.signup}
        signInUrl={config.paths.auth.login} // Link to sign-in page
        fallbackRedirectUrl={config.paths.auth.loginRedirect} // Redirect after sign-up
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
