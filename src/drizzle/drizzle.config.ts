import { defineConfig } from "drizzle-kit";
import config from "../config";

const { dbUser, dbPassword, dbHost, dbPort, dbName } = config;

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/drizzle/schemas/*.schema.ts",
  dbCredentials: {
    host: dbHost || "localhost",
    user: dbUser || "postgres",
    password: dbPassword || "postgres",
    database: dbName || "postgres",
    port: parseInt(dbPort || "5432"),
    ssl: false,
  },
  verbose: true,
  strict: true,
  out: "./src/drizzle/migrations",
});
