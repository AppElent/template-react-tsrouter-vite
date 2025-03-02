import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_empty')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/_empty"!
      <Outlet />
    </div>
  );
}
