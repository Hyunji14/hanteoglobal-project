import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { queryKeys } from '@/global/reactQuery';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import ContentsAPI from './Contents.api';

export const useContents = (categoryId: string) => {
  const results = useSuspenseInfiniteQuery({
    queryKey: [queryKeys.contents, categoryId],
    queryFn: ({ pageParam }) =>
      ContentsAPI.getContents({ cursor: pageParam, limit: 5, categoryId }),
    initialPageParam: 0,
    getNextPageParam: ({ list, nextCursor }) => {
      if (list?.length === 0) return null;
      return nextCursor;
    },
  });

  const { setTarget } = useIntersectionObserver({
    onIntersect: results.fetchNextPage,
    shouldBeBlocked: !results.hasNextPage || results.isError,
  });

  return { ...results, setTarget };
};
