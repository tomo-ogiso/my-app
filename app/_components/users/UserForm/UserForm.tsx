'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button } from '@kuma-ui/core';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { createUser } from '@/_api/createUser';
import { FormBlock, RhfInput } from '@/_components/common';
import { schema, UserFormType } from './schema';
import 'react-toastify/dist/ReactToastify.css';

export const UserForm: FC = () => {
  const {
    handleSubmit,
    control,
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

  return (
    <Box bgColor="whitesmoke" p={12} borderRadius={8}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormBlock label="名前" errorMessage={errors.name?.message} className="mb-4 w-80">
          <RhfInput name="name" control={control} placeholder="名前" />
        </FormBlock>
        <FormBlock label="メールアドレス" errorMessage={errors.email?.message} className="mb-4 w-80">
          <RhfInput name="email" control={control} placeholder="メールアドレス" />
        </FormBlock>
        <Box>
          <Button
            type="submit"
            width={180}
            bgColor="#242424"
            borderRadius={8}
            py={12}
            px={16}
            color="#fff"
            transition="all"
            _hover={{ opacity: 0.8 }}
          >
            送信
          </Button>
        </Box>
      </form>
    </Box>
  );
};
