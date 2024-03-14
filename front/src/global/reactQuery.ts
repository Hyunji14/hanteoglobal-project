import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

export const queryKeys = {
  category: 'CATEGORY',
  banner: 'BANNER',
  contents: 'CONTENT',
};
