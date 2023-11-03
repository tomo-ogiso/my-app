import 'react-toastify/dist/ReactToastify.css';
import '@radix-ui/themes/styles.css';
import 'react-loading-skeleton/dist/skeleton.css';

import { Box } from '@radix-ui/themes';
import Link from 'next/link';

import { pagesPath } from '@/_utils/$path';

export default async function Home() {
  return (
    <main className="max-w-5xl mx-auto mt-16">
      <div className="max-w-[880px]">
        <Box className="flex justify-center">
          <Link href={pagesPath.users.$url()} legacyBehavior>
            <a>ユーザー一覧</a>あ
          </Link>
        </Box>
      </div>
    </main>
  );
}
