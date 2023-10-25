import { z } from "zod";

/**
 * @typedef {object} Env
 * @property {string} APP_NAME
 * @property {string} APP_VERSION
 * @property {string} API_TOKEN
 * @property {string} API_TOKEN_SECRET
 * @property {number} PORT
 */
export const envSchema = z.object({
  APP_NAME: z.string(),
  APP_VERSION: z.string(),
  API_TOKEN: z.string(),
  API_TOKEN_SECRET: z.string(),
  PORT: z.string().regex(/^\d+$/).transform(Number),
});

/**
 * @type {Env}
 */
export const env = envSchema.parse(process.env);
