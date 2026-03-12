import { defineConfig } from "drizzle-kit";
import { loadEnvConfig } from '@next/env';


const projectDir = process.cwd();

console.log('projectDir', projectDir)
loadEnvConfig(projectDir);

export default defineConfig({
  schema: "./lib/db/schema",
  out: "./lib/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
