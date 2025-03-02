import { requireAuth } from '@/lib/utils';
import { UserProfile } from '@clerk/clerk-react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/app/_default/profile')({
  beforeLoad: async ({ context }) => {
    console.log(context);
    await requireAuth(context);
    return {
      getTitle: () => 'Profile',
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <UserProfile />
    </div>
  );
}
