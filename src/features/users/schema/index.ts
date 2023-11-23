import { z } from 'zod';

import { REQUIRED_INPUT_ERROR, EMAIL_ERROR } from '@/constants/errorMessage';

export const schema = z.object({
  name: z.string().min(1, REQUIRED_INPUT_ERROR),
  email: z.string().email(EMAIL_ERROR).min(1, REQUIRED_INPUT_ERROR),
});

export type UserFormType = z.infer<typeof schema>;
