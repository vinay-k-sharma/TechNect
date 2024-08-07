import { z } from 'zod';

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'More than 3 characters required' })
      .max(30, { message: 'Less than 30 characters are allowed' }),
    email: z.string().email(),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' }),
    confirm_password: z.string().min(6, {
      message: 'Confirm Password must be at least 6 characters long',
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Password's must match",
    path: ['confirm_password'],
  });

export const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' }),
});
