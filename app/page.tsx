import 'react-toastify/dist/ReactToastify.css';
import '@radix-ui/themes/styles.css';
import 'react-loading-skeleton/dist/skeleton.css';

import { Box, Text } from '@radix-ui/themes';
import Image from 'next/image';
import Imgix from 'react-imgix';

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
      <div className="max-w-[880px] grid grid-cols-2 gap-3">
        <Box className="border-[skyBlue] border-b-2 border-solid">
          <Text as="p" className="text-center font-semibold">
            next/image
          </Text>
        </Box>
        <Box className="border-[skyBlue] border-b-2 border-solid">
          <Text as="p" className="text-center font-semibold">
            imgix
          </Text>
        </Box>
        <Image
          src="/images/image.jpg"
          alt="猫"
          width={3}
          height={2}
          loading="lazy"
          layout="responsive"
          objectFit="contain"
        />
        <Imgix
          src="https://test-281330813.imgix.net/images/image.jpg"
          imgixParams={{ ar: '3:2' }}
          // width={400}
          // height={300}
        />
        <Image
          src="/images/image2.jpg"
          alt="猫"
          width={3}
          height={2}
          loading="lazy"
          layout="responsive"
          objectFit="contain"
        />
        <Imgix
          src="https://test-281330813.imgix.net/images/image2.jpg"
          imgixParams={{ ar: '3:2' }}
          // width={400}
          // height={300}
        />
        <Image
          src="/images/image3.jpg"
          alt="猫"
          width={3}
          height={2}
          loading="lazy"
          layout="responsive"
          objectFit="contain"
        />
        <Imgix
          src="https://test-281330813.imgix.net/images/image3.jpg"
          imgixParams={{ ar: '3:2' }}
          // width={400}
          // height={300}
        />
        <Image
          src="/images/image4.jpg"
          alt="猫"
          width={3}
          height={2}
          loading="lazy"
          layout="responsive"
          objectFit="contain"
        />
        <Imgix
          src="https://test-281330813.imgix.net/images/image4.jpg"
          imgixParams={{ ar: '3:2' }}
          // width={400}
          // height={300}
        />
        <Image
          src="/images/image5.jpg"
          alt="猫"
          width={3}
          height={2}
          loading="lazy"
          layout="responsive"
          objectFit="contain"
        />
        <Imgix
          src="https://test-281330813.imgix.net/images/image5.jpg"
          imgixParams={{ ar: '3:2' }}
          // width={400}
          // height={300}
        />
        <Image
          src="/images/image6.jpg"
          alt="猫"
          width={3}
          height={2}
          loading="lazy"
          layout="responsive"
          objectFit="contain"
        />
        <Imgix
          src="https://test-281330813.imgix.net/images/image6.jpg"
          imgixParams={{ ar: '3:2' }}
          // width={400}
          // height={300}
        />
        <Image
          src="/images/image7.jpg"
          alt="猫"
          width={3}
          height={2}
          loading="lazy"
          layout="responsive"
          objectFit="contain"
        />
        <Imgix
          src="https://test-281330813.imgix.net/images/image7.jpg"
          imgixParams={{ ar: '3:2' }}
          // width={400}
          // height={300}
        />
        <Image
          src="/images/image.jpg"
          alt="猫"
          width={3}
          height={2}
          loading="lazy"
          layout="responsive"
          objectFit="contain"
        />
        <Imgix
          src="https://test-281330813.imgix.net/images/image.jpg"
          imgixParams={{ ar: '3:2' }}
          // width={400}
          // height={300}
        />
        <Image
          src="/images/image2.jpg"
          alt="猫"
          width={3}
          height={2}
          loading="lazy"
          layout="responsive"
          objectFit="contain"
        />
        <Imgix
          src="https://test-281330813.imgix.net/images/image2.jpg"
          imgixParams={{ ar: '3:2' }}
          // width={400}
          // height={300}
        />
        <Image
          src="/images/image3.jpg"
          alt="猫"
          width={3}
          height={2}
          loading="lazy"
          layout="responsive"
          objectFit="contain"
        />
        <Imgix
          src="https://test-281330813.imgix.net/images/image3.jpg"
          imgixParams={{ ar: '3:2' }}
          // width={400}
          // height={300}
        />
        <Image
          src="/images/image4.jpg"
          alt="猫"
          width={3}
          height={2}
          loading="lazy"
          layout="responsive"
          objectFit="contain"
        />
        <Imgix
          src="https://test-281330813.imgix.net/images/image4.jpg"
          imgixParams={{ ar: '3:2' }}
          // width={400}
          // height={300}
        />
        <Image
          src="/images/image5.jpg"
          alt="猫"
          width={3}
          height={2}
          loading="lazy"
          layout="responsive"
          objectFit="contain"
        />
        <Imgix
          src="https://test-281330813.imgix.net/images/image5.jpg"
          imgixParams={{ ar: '3:2' }}
          // width={400}
          // height={300}
        />
        <Image
          src="/images/image6.jpg"
          alt="猫"
          width={3}
          height={2}
          loading="lazy"
          layout="responsive"
          objectFit="contain"
        />
        <Imgix
          src="https://test-281330813.imgix.net/images/image6.jpg"
          imgixParams={{ ar: '3:2' }}
          // width={400}
          // height={300}
        />
        <Image
          src="/images/image7.jpg"
          alt="猫"
          width={3}
          height={2}
          loading="lazy"
          layout="responsive"
          objectFit="contain"
        />
        <Imgix
          src="https://test-281330813.imgix.net/images/image7.jpg"
          imgixParams={{ ar: '3:2' }}
          // width={400}
          // height={300}
        />
        <Image
          src="/images/image.jpg"
          alt="猫"
          width={3}
          height={2}
          loading="lazy"
          layout="responsive"
          objectFit="contain"
        />
        <Imgix
          src="https://test-281330813.imgix.net/images/image.jpg"
          imgixParams={{ ar: '3:2' }}
          // width={400}
          // height={300}
        />
        <Image
          src="/images/image2.jpg"
          alt="猫"
          width={3}
          height={2}
          loading="lazy"
          layout="responsive"
          objectFit="contain"
        />
        <Imgix
          src="https://test-281330813.imgix.net/images/image2.jpg"
          imgixParams={{ ar: '3:2' }}
          // width={400}
          // height={300}
        />
        <Image
          src="/images/image3.jpg"
          alt="猫"
          width={3}
          height={2}
          loading="lazy"
          layout="responsive"
          objectFit="contain"
        />
        <Imgix
          src="https://test-281330813.imgix.net/images/image3.jpg"
          imgixParams={{ ar: '3:2' }}
          // width={400}
          // height={300}
        />
        <Image
          src="/images/image4.jpg"
          alt="猫"
          width={3}
          height={2}
          loading="lazy"
          layout="responsive"
          objectFit="contain"
        />
        <Imgix
          src="https://test-281330813.imgix.net/images/image4.jpg"
          imgixParams={{ ar: '3:2' }}
          // width={400}
          // height={300}
        />
        <Image
          src="/images/image5.jpg"
          alt="猫"
          width={3}
          height={2}
          loading="lazy"
          layout="responsive"
          objectFit="contain"
        />
        <Imgix
          src="https://test-281330813.imgix.net/images/image5.jpg"
          imgixParams={{ ar: '3:2' }}
          // width={400}
          // height={300}
        />
        <Image
          src="/images/image6.jpg"
          alt="猫"
          width={3}
          height={2}
          loading="lazy"
          layout="responsive"
          objectFit="contain"
        />
        <Imgix
          src="https://test-281330813.imgix.net/images/image6.jpg"
          imgixParams={{ ar: '3:2' }}
          // width={400}
          // height={300}
        />
        <Image
          src="/images/image7.jpg"
          alt="猫"
          width={3}
          height={2}
          loading="lazy"
          layout="responsive"
          objectFit="contain"
        />
        <Imgix
          src="https://test-281330813.imgix.net/images/image7.jpg"
          imgixParams={{ ar: '3:2' }}
          // width={400}
          // height={300}
        />
      </div>
    </main>
  );
}
