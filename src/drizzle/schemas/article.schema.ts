import { pgTable, primaryKey, varchar, numeric } from "drizzle-orm/pg-core";

export const articles = pgTable("articles", {
  id: varchar("id", { length: 10 }).primaryKey(),
  name: varchar("name", { length: 20 }).notNull(),
  description: varchar("description", { length: 200 }),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  model: varchar("model", { length: 10 }),
});
