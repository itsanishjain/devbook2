import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  schema: "./src/drizzle/schema.ts",
  out: "./src/drizzle/",
  driver: "turso",
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL || "./src/drizzle/dev.db",
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
  verbose: true,
  strict: true,
});
