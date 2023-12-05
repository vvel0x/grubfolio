import { recipes } from "@acme/db/schema/recipe";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const recipeRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    const publicRecipes = ctx.db.select().from(recipes).limit(10);

    return publicRecipes;
  }),
});
