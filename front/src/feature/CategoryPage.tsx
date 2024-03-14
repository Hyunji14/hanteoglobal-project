import { useParams } from 'react-router-dom';
import { Suspense } from 'react';

import Category from '@/components/Category/Category';
import Banner from '@/components/Banner/Banner';
import { Loading } from '@/components/Loading';

export default function CategoryPage() {
  const { categoryId } = useParams();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Category categoryId={categoryId!} />
        <Banner categoryId={categoryId!} />
      </Suspense>
    </>
  );
}
