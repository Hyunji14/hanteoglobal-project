import { Suspense } from 'react';

import Category from '@/components/Category/Category';
import Banner from '@/components/Banner/Banner';
import Contents from '@/components/Contents/Contents';
import { Loading } from '@/components/Loading/Loading';

export default function MainPage() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Category categoryId='chart' />
        <Banner categoryId='chart' />
        <Contents categoryId='chart' />
      </Suspense>
    </>
  );
}
