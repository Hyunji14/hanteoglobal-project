export const PATH = {
  main: '/',
  category: (categoryId: string) => `/${categoryId}`,
} as const;
