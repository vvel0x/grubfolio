import { createId } from "@paralleldrive/cuid2";
import {
  integer,
  numeric,
  pgTable,
  primaryKey,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const recipes = pgTable("recipes", {
  id: varchar("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  authorId: varchar("author_id").notNull(),
  name: varchar("name").notNull(),
  source: varchar("source"),
  img_url: varchar("img_url"),
  description: text("description"),
  instructions: text("instructions"),
  servings: integer("servings"),
  prep_time: integer("prep_time"),
  cook_time: integer("cook_time"),
  notes: text("notes"),
});

export const ingredients = pgTable("ingredients", {
  id: varchar("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  quantity: numeric("quantity"),
  unit: varchar("unit"),
  name: varchar("name").notNull(),
  intruction: text("intruction"),
});

export const recipe_ingredients = pgTable(
  "recipe_ingredients",
  {
    recipe_id: varchar("recipe_id").references(() => recipes.id),
    ingredient_id: varchar("ingredient_id").references(() => ingredients.id),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.recipe_id, table.ingredient_id] }),
  }),
);
