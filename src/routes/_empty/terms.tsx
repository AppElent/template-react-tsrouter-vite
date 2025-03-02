import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_empty/terms')({
  beforeLoad: () => ({ getTitle: () => 'Terms' }),
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_default/terms"!</div>;
}
