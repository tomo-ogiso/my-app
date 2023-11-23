import { Box, Heading } from '@radix-ui/themes';

import { UserForm, UserList } from '@/features/users/components';
import { User } from '@/interfaces/User';

async function getUsers(): Promise<User[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/users`, { cache: 'no-store' });

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
      <Box mb="4">
        <UserForm />
      </Box>
      <UserList users={users} />
    </main>
  );
}
