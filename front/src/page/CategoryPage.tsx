import { useParams } from 'react-router-dom';
import { Suspense } from 'react';

import Category from '@/components/Category/Category';
import Banner from '@/components/Banner/Banner';
import Contents from '@/components/Contents/Contents';
import { Loading } from '@/components/Loading/Loading';

export default function CategoryPage() {
  const { categoryId } = useParams();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Category categoryId={categoryId!} />
        <Banner categoryId={categoryId!} />
        <Contents categoryId={categoryId!} />
      </Suspense>
    </>
  );
}
