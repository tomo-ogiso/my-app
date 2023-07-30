import { Heading, styled } from '@kuma-ui/core';
import { UserForm } from '@/_components/users';

export const ResponsiveBox = styled('div')`
  @media (max-width: md) {
    margin-left: 16px;
    margin-right: 16px;
  }
`;

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto mt-16">
      <ResponsiveBox>
        <Heading as="h2" ml={1} fontWeight="bold">
          ユーザー作成
        </Heading>
        <UserForm />
      </ResponsiveBox>
    </main>
  );
}
