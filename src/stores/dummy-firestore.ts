import { db } from '@/config/firebase';
import FirestoreDataSource from '@/lib/data-sources/data-sources/FirestoreDataSource';
import { dummyYupSchema, type Dummy } from '@/schemas/dummy/dummy';
import { create } from 'zustand';

type DummyFirestoreStore = {
  data: Dummy[] | null;
  datasource: FirestoreDataSource<Dummy, Dummy[]>;
  //   setData: (data: string) => void;
  subscribe: () => void;
  unsubscribe?: () => void;
};

const dummyFirestore = new FirestoreDataSource<Dummy>(
  {
    target: 'dummy',
    targetMode: 'collection',
    subscribe: true,
    YupValidationSchema: dummyYupSchema,
    //mockOptions: { schema: iss },
  },
  { db }
);

export const useDummyFirestoreStore = create<DummyFirestoreStore>((set, get) => ({
  data: dummyFirestore.defaultValue,
  datasource: dummyFirestore,
  subscribe: () => {
    if (!get().unsubscribe) {
      console.log('SUBSCRIBING');
      const unsubscribe = dummyFirestore.subscribe((data) => set({ data }));
      set({ unsubscribe });
    } else {
      console.log('ALREADY SUBSCRIBED');
    }
  },
}));
