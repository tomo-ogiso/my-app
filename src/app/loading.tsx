import { Heading } from '@radix-ui/themes';
import Skeleton from 'react-loading-skeleton';

export default function Loading() {
  return (
    <main className="max-w-5xl mx-auto mt-16">
      <Heading as="h1" className="ml-1 mb-4">
        <Skeleton width={200} />
      </Heading>
    </main>
  );
}
