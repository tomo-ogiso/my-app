import { FC } from 'react';

import { Table } from '@radix-ui/themes';
import Skeleton from 'react-loading-skeleton';

export const SkeletonUserList: FC = () => {
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
        {[...Array(8)].map((_, index) => (
          <Table.Row key={index}>
            <Table.Cell>
              <Skeleton />
            </Table.Cell>
            <Table.Cell>
              <Skeleton />
            </Table.Cell>
            <Table.Cell>
              <Skeleton />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};
