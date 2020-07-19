import Link from 'next/link';

export default function () {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <p>Are you lost? Try going <Link href="/">back to the home page</Link>.</p>
    </>
  );
}
