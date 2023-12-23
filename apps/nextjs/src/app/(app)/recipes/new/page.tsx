import type { Metadata } from "next";

import NewRecipeForm from "~/components/Forms/Recipes/NewRecipeForm";

export const metadata: Metadata = {
  title: "Add Recipe",
};

export default function page() {
  return (
    <main className="mt-4">
      <h1 className="text-3xl font-medium text-gray-800">Add Recipe</h1>

      <NewRecipeForm />
    </main>
  );
}
