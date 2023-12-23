import Link from "next/link";

import { Button } from "~/components/UI/Button";
import { api } from "~/trpc/server";

export default async function page() {
  const recipes = await api.recipe.all.query();

  return (
    <main className="mt-4">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-3xl font-medium text-gray-800">Recipes</h1>
        <Button variant="rounded" as={Link} href="/recipes/new">
          New Recipe
        </Button>
      </div>

      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <a href={`/recipes/${recipe.id}`}>{recipe.name}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
