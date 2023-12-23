import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

import { recipes } from "../schema/recipe";

export const createRecipeSchema = createInsertSchema(recipes, {
  servings: z.coerce.number().int().positive(),
  prep_time: z.coerce.number().int().positive().nullish(),
  cook_time: z.coerce.number().int().positive().nullish(),
}).omit({
  authorId: true,
});
