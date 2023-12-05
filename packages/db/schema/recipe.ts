import { createId } from "@paralleldrive/cuid2";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";

export const recipes = pgTable("recipes", {
  id: varchar("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  name: varchar("name"),
  excerpt: text("excerpt"),
  source: varchar("source"),
});
