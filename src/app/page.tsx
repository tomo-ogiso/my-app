import { Box } from '@radix-ui/themes';
import Link from 'next/link';

import { pagesPath } from '@/utils/$path';

export default async function Home() {
  return (
    <main className="max-w-5xl mx-auto mt-16">
      <div className="max-w-[880px]">
        <Box className="flex justify-center">
          <Link href={pagesPath.users.$url()}>ユーザー一覧</Link>
          ここにユーザー情報を表示する
        </Box>
      </div>
    </main>
  );
}