import { Heading } from '@radix-ui/themes';
import Skeleton from 'react-loading-skeleton';

import { SkeletonUserList } from '@/features/users/components';

export default function Loading() {
  return (
    <main className="max-w-5xl mx-auto mt-16 sm:px-4">
      <Heading as="h1" mb="2" ml="1">
        <Skeleton width={200} height={30} />
      </Heading>
      <SkeletonUserList />
    </main>
  );
}
