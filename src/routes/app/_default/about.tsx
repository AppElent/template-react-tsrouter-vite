import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/app/_default/about')({
  beforeLoad: () => ({ getTitle: () => 'About' }),
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_default/about"!</div>;
}
