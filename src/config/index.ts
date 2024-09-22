import path from "path";
import dotenv from "dotenv";

const dotenvPath = path.resolve(process.cwd(), ".env");
dotenv.config({ path: dotenvPath });

interface Config {
  dev: boolean;
  port: number | string;
  cors?: string;
  dbUser?: string;
  dbPassword?: string;
  dbHost?: string;
  dbName?: string;
  dbPort?: string;
  serverHost?: string;
}

const config: Config = {
  dev: process.env.NODE_ENV !== "production",
  port: process.env.PORT || 5432,
  cors: process.env.CORS,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  serverHost: process.env.SERVER_HOST,
};

export default config;
