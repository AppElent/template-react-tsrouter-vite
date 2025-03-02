import { requireAuth } from '@/lib/utils';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/app/_default/test/about')({
  beforeLoad: async ({ context }) => {
    requireAuth(context);
    return {
      getTitle: () => 'About',
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/test/about"!</div>;
}
