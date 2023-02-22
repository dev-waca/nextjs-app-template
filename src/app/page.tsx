import Link from 'next/link';

export default function RootPage() {
  return (
    <div>
      <Link href={'/post'}>Go to post page</Link>
    </div>
  );
}
