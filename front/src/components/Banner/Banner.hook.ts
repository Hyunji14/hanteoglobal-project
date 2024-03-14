import { useSuspenseQuery } from '@tanstack/react-query';

import { BannerType } from './Banner.type';
import { queryKeys } from '@/global/reactQuery';
import BannerAPI from './Banner.api';

export const useBanner = (categoryId: string) => {
  const { data: banners } = useSuspenseQuery<BannerType[], Error>({
    queryKey: [queryKeys.banner, categoryId],
    queryFn: () => BannerAPI.getBanners(categoryId),
  });

  return { banners };
};
