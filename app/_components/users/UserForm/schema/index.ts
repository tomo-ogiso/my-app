import { z } from 'zod';
import { REQUIRED_INPUT_ERROR, EMAIL_ERROR } from '@/_constants/errorMessage';

export const schema = z.object({
  name: z.string().trim().nonempty(REQUIRED_INPUT_ERROR),
  email: z.string().trim().email(EMAIL_ERROR).nonempty(REQUIRED_INPUT_ERROR),
});

export type UserFormType = z.infer<typeof schema>;
