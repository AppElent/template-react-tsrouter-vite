import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/app/_default/tests')({
  beforeLoad: () => ({
    getTitle: () => 'Tests',
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/_default/tests"! OUTLET
      <Outlet />
    </div>
  );
}
