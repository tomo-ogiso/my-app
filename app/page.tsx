import 'react-toastify/dist/ReactToastify.css';
import '@radix-ui/themes/styles.css';
import 'react-loading-skeleton/dist/skeleton.css';

import Image from 'next/image';
import Imgix from 'react-imgix';

import { UserList } from '@/_components/users';

import { Users } from './_interfaces/User';

// async function getUsers(): Promise<Users[]> {
//   const response = await fetch('http://localhost:3001/users');
//   if (!response.ok) {
//     throw new Error('ユーザー情報の取得に失敗しました');
//   }

//   return response.json();
// }

export default async function Home() {
  // const users = await getUsers();
  const users: Users[] = [];

  return (
    <main className="max-w-5xl mx-auto mt-16">
      <UserList users={users} />
      {/* <Heading as="h1" className="ml-1 mb-4">
        ユーザー作成
      </Heading> */}
      {/* <UserForm />
       */}
      <Image src={'/images/pexels-anastasia-shuraeva-4100795.jpg'} alt="なんらかの画像" width={300} height={200} />
      <Imgix
        src="https://test-281330813.imgix.net/images/pexels-anastasia-shuraeva-4100795.jpg"
        // imgixParams={{ ar: '16:9' }}
        width={400}
        height={300}
      />
      <div className="max-w-[880px] flex flex-col gap-y-3">
        <Image
          src="/images/11bdd38c-f0fa-46ff-b42a-8d8b4cbf1d0f.jpg"
          alt="猫"
          width={3}
          height={2}
          layout="responsive"
          objectFit="contain"
        />
        <Imgix
          src="https://test-281330813.imgix.net/images/11bdd38c-f0fa-46ff-b42a-8d8b4cbf1d0f.jpg"
          imgixParams={{ ar: '3:2' }}
          // width={400}
          // height={300}
        />
      </div>
    </main>
  );
}
