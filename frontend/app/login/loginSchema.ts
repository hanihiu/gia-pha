import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(8),
  remember: z.coerce.boolean().optional(),
});

export type LoginValues = z.infer<typeof loginSchema>;

export const loginFieldNames = loginSchema.keyof().enum;
