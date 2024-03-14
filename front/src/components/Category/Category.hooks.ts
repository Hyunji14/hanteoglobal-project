import { useSuspenseQuery } from '@tanstack/react-query';

import { CategoryType } from './Category.type';
import { queryKeys } from '@/global/reactQuery';
import HeaderAPI from './Category.api';

export const useCategory = () => {
  const { data: categories } = useSuspenseQuery<CategoryType[], Error>({
    queryKey: [queryKeys.category],
    queryFn: HeaderAPI.getCategories,
  });

  return { categories };
};
