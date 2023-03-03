'use client';

import { Post } from '~/app/post/Post';
import { usePosts } from '~/services/posts';

export const PostList = () => {
  const { data } = usePosts('get-posts');

  return (
    <div>
      {data?.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};
