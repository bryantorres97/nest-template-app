import 'dotenv/config';
import { z } from 'zod';

import { Logger } from '@nestjs/common';

const logger = new Logger('Configuration');

const envSchema = z.object({
  PORT: z
    .string()
    .transform((val) => parseInt(val, 10))
    .refine((val) => !isNaN(val), {
      message: 'PORT must be a number',
    }),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

const env = envSchema.safeParse(process.env);

if (!env.success) {
  logger.error('Invalid environment variables');
  logger.error(env.error.format());
  process.exit(1);
}

export const config = {
  port: env.data.PORT,
  nodeEnv: env.data.NODE_ENV,
};
