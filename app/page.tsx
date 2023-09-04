import 'react-toastify/dist/ReactToastify.css';
import '@radix-ui/themes/styles.css';
import 'react-loading-skeleton/dist/skeleton.css';

import { UserList } from '@/_components/users';
import { Users } from '@/_interfaces/User';

async function getUsers(): Promise<Users[]> {
  const response = await fetch('http://localhost:3001/users');
  if (!response.ok) {
    throw new Error('ユーザー情報の取得に失敗しました');
  }

  return response.json();
}

export default async function Home() {
  const users = await getUsers();

  return (
    <main className="max-w-5xl mx-auto mt-16">
      <UserList users={users} />
      {/* <Heading as="h1" className="ml-1 mb-4">
        ユーザー作成
      </Heading> */}
      {/* <UserForm />
       */}
    </main>
  );
}
