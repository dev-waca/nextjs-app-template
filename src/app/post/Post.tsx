import type { PostItem } from '~/services/posts';

export const Post = ({ id, userId, title }: PostItem) => {
  return (
    <div>
      <span>{id}</span>
      <span> {userId}</span>
      <span>{title}</span>
    </div>
  );
};
