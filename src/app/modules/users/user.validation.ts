import { z } from 'zod';
// Req validation
// Body --> object
// data --> object

const createUserZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'role is required',
    }),
    password: z.string().optional(),
  }),
});

export const UserValidation = {
  createUserZodSchema,
};
