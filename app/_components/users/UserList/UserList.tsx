import { FC } from 'react';

import { Table } from '@radix-ui/themes';
import dayjs from 'dayjs';

import { DATE } from '@/_constants/date';
import { User } from '@/_interfaces/User';

export const UserList: FC<{ users: User[] }> = ({ users }) => {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>ユーザー名</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>メールアドレス</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>更新日時</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {users.map((user) => (
          <Table.Row key={user.id}>
            <Table.RowHeaderCell>{user.name}</Table.RowHeaderCell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell>{dayjs(user.updated_at).format(DATE)}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};
