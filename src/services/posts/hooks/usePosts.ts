import { useQuery } from '@tanstack/react-query';

import { getPostsApi } from '~/services/posts';

export const usePosts = (...key: string[]) => {
  return useQuery([...key], getPostsApi);
};
