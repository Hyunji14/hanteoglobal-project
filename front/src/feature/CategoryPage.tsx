import Category from '@/components/Category/Category';
import { useParams } from 'react-router-dom';

export default function CategoryPage() {
  const { categoryId } = useParams();

  return (
    <>
      <Category categoryId={categoryId!} />
    </>
  );
}
