import { useDummyFirestoreStore } from '@/stores/dummy-firestore';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/app/_default/tests/datasources')({
  beforeLoad: () => {
    useDummyFirestoreStore.getState().subscribe();
    return {
      getTitle: () => 'Datasources',
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const data = useDummyFirestoreStore((s) => s.data);
  console.log(data);
  return <div>Hello "/_default/tests/datasources"!</div>;
}
