import { Input } from '@chakra-ui/react';
import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

export type InputProps = {
  placeholder?: string;
  className?: string;
  variant?: string;
};

export type RhfInputProps<T extends FieldValues> = InputProps & UseControllerProps<T>;

export const RhfInput = <T extends FieldValues>(props: RhfInputProps<T>) => {
  const { name, control, placeholder, className, variant } = props;
  const {
    field: { ref, ...rest },
    formState: { errors },
  } = useController<T>({ name, control });

  return (
    <Input
      ref={ref}
      className={`bg-white ${className} ${errors[name] && 'border-red border border-solid'}`}
      placeholder={placeholder}
      variant={variant}
      {...rest}
    />
  );
};
