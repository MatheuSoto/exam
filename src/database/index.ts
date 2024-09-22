import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import config from "../config";
import { articles } from "../drizzle/schemas/article.schema";

const { dbUser, dbPassword, dbHost, dbPort, dbName } = config;
const client = postgres(
  `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}?ssl=false`,
  {
    max: 100,
  }
);

export const db = drizzle(client, {
  schema: {
    articles,
  },
  logger: true,
});
