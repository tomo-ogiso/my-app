'use client';

import { FC, useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Box, TextField } from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { createUser } from '@/_api/createUser';
import { FormBlock } from '@/_components/common';
import { User } from '@/_interfaces/User';
import { Button } from '@/components/ui/button';

import { schema, UserFormType } from './schema';

export const UserForm: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserFormType>({
    mode: 'onChange',
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '' },
  });

  const onSubmit = async (data: UserFormType) => {
    try {
      await createUser(data);
      toast.success('保存しました', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } catch {
      console.log('error');
    }
  };

  useEffect(() => {
    const getUsers = async (): Promise<User[]> => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/users`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data: User[] = await res.json();

        return data;
      } catch {
        console.log('error');
        return [];
      }
    };

    getUsers().then((res) => console.log(res));
  }, []);

  return (
    <Box className="bg-slate-100 rounded-lg" p="3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormBlock label="名前" errorMessage={errors.name?.message} className="mb-4 w-80">
          <TextField.Input placeholder="名前" radius="medium" {...register('name')} />
        </FormBlock>
        <FormBlock label="メールアドレス" errorMessage={errors.email?.message} className="mb-4 w-80">
          <TextField.Input placeholder="メールアドレス" radius="medium" {...register('email')} />
        </FormBlock>
        <Button type="submit" className="w-40">
          送信
        </Button>
        <div />
      </form>
    </Box>
  );
};
