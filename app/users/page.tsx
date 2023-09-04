import 'react-toastify/dist/ReactToastify.css';
import '@radix-ui/themes/styles.css';
import 'react-loading-skeleton/dist/skeleton.css';

import { Heading } from '@radix-ui/themes';

import { UserList } from '@/_components/users';
import { Users } from '@/_interfaces/User';

async function getUsers(): Promise<Users[]> {
  const response = await fetch(`${process.env.API_DOMAIN}/users`);
  if (!response.ok) {
    throw new Error('ユーザー情報の取得に失敗しました');
  }

  return response.json();
}

export default async function Home() {
  const users = await getUsers();

  return (
    <main className="max-w-5xl mx-auto mt-16 sm:px-4">
      <Heading as="h1" mb="2" ml="1">
        ユーザー一覧
      </Heading>
      <UserList users={users} />
    </main>
  );
}
