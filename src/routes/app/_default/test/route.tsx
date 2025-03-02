import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/app/_default/test')({
  beforeLoad: () => ({
    getTitle: () => 'Test',
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/test/"!</div>;
}
