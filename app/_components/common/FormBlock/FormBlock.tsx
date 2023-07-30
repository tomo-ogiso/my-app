import { Box, Text } from '@kuma-ui/core';
import { FC, ReactNode } from 'react';

type Props = {
  label: string;
  className?: string;
  children: ReactNode;
  errorMessage?: string;
};

export const FormBlock: FC<Props> = ({ label, className, children, errorMessage }) => {
  return (
    <Box className={className}>
      <Text as="label" fontWeight="bold" display="block" mb={8}>
        {label}
      </Text>
      {children}
      {errorMessage && (
        <Text color="red" mt={8}>
          {errorMessage}
        </Text>
      )}
    </Box>
  );
};
