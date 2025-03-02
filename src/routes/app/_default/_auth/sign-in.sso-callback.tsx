import { useAuth } from '@clerk/clerk-react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';

export const Route = createFileRoute('/app/_default/_auth/sign-in/sso-callback')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      navigate({ to: '/' }); // Redirect to home after successful SSO
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="min-h-screen flex justify-center pt-8">
      <p>Completing sign-in...</p>
    </div>
  );
}
