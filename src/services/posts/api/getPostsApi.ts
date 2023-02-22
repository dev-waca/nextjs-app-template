import api from '~/libs/api';
import type { PostItem } from '~/services/posts';

export const getPostsApi = async () => {
  const { data } = await api.get<PostItem[]>('/posts');
  return data;
};
