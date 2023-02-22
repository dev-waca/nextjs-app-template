import type { PropsWithChildren } from 'react';
import { Suspense } from 'react';

import Link from 'next/link';

import Loading from '~/app/post/loading';

export default function PostLayout({ children }: PropsWithChildren) {
  return (
    <main>
      <header>
        <h1>Post Page</h1>
        <nav>
          <ul>
            <li>
              <Link href={'/'}>Go to main page</Link>
            </li>
            <li>
              <Link href={'/edit'}>Go to create</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </main>
  );
}
