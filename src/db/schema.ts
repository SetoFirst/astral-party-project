import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
export const usersTable = pgTable("listcard_table", {
  id: integer().notNull(),
  image: varchar({ length: 255 }).notNull(),
  name: varchar({ length: 255 }).notNull(),
  type: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
});
