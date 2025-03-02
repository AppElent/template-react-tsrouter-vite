import TailwindBlackWhiteLayout from '@/layouts/tailwind-blackwhite';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/app')({
  beforeLoad: async () => ({
    getTitle: undefined,
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/_main"!
      <TailwindBlackWhiteLayout>
        <Outlet />
      </TailwindBlackWhiteLayout>
    </div>
  );
}
