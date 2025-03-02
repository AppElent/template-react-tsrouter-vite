import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/app/_default/tests/libs')({
  beforeLoad: () => ({
    getTitle: () => 'Libs',
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_default/tests/libs"!</div>;
}
