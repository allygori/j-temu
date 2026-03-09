import { loadEnvConfig } from '@next/env';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
// import schema from './schema';

const projectDir = process.cwd();
loadEnvConfig(projectDir);

console.log("process.env.DATABASE_URL!", process.env.DATABASE_URL!)

const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
});

export const db = drizzle({ client: pool, casing: 'snake_case' });
