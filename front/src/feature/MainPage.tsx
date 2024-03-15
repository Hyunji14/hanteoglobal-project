import Category from '@/components/Category/Category';
import ChartPage from './chart/ChartPage';

export default function MainPage() {
  return (
    <>
      <Category categoryId='chart' />
      <ChartPage />
    </>
  );
}
