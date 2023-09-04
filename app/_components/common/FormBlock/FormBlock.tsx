import { FC, ReactNode } from 'react';

import { Box, Text } from '@radix-ui/themes';

type Props = {
  label: string;
  className?: string;
  children: ReactNode;
  errorMessage?: string;
};

export const FormBlock: FC<Props> = ({ label, className, children, errorMessage }) => {
  return (
    <Box className={className}>
      <Text as="p" className="mb-2">
        {label}
      </Text>
      {children}
      {errorMessage && (
        <Text as="p" color="red" className="mt-2">
          {errorMessage}
        </Text>
      )}
    </Box>
  );
};
