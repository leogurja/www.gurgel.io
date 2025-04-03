import "server-only";
import process from "node:process";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
});

export const env = envSchema.parse(process.env);
