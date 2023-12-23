"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import type { z } from "zod";

import { createRecipeSchema } from "@acme/db/validators";

import Card from "~/components/UI/Card";
import { InputField } from "~/components/UI/InputField";
import { Editor } from "~/lib/lexical/Lexical";

type FormValues = z.infer<typeof createRecipeSchema>;

function InputError({ message }: { message?: string }) {
  if (!message) return null;
  return <div className="text-sm text-red-500">{message}</div>;
}

export default function NewRecipeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(createRecipeSchema),
    defaultValues: {
      name: "",
      servings: 1,
      prep_time: null,
      cook_time: null,
    },
  });

  function onSubmit(data: unknown) {
    console.table(data);
  }

  return (
    <Card className="mx-auto mt-4 max-w-2xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 p-2 sm:p-4"
      >
        <div>
          <input
            type="text"
            className="w-full rounded-md border-gray-300 text-xl font-medium outline-none"
            placeholder="Title"
            {...register("name")}
          />

          <TextareaAutosize
            minRows={2}
            placeholder="Description"
            className="w-full resize-none text-gray-700 outline-none"
            maxLength={400}
            {...register("description")}
          />
        </div>

        {/* TODO:: Add source and photo */}
        {/* <div className="inline-flex">
          <Button
            className="mr-2 text-xs"
            variant="rounded"
            padding="small"
            shadow="small"
          >
            Add Source
          </Button>
          <Button
            className="mr-2 text-xs"
            variant="rounded"
            padding="small"
            shadow="small"
          >
            Add Photo
          </Button>
        </div> */}

        <div>
          <h2 className="mb-1.5 border-b text-lg font-medium text-gray-800">
            Ingredients
          </h2>
          <TextareaAutosize
            minRows={3}
            placeholder="1 tsp awesomesauce"
            className="w-full resize-none text-gray-700 outline-none"
            maxLength={400}
          />
        </div>

        <div>
          <h2 className="mb-1.5 border-b text-lg font-medium text-gray-800">
            Instructions
          </h2>
          <Editor />
        </div>

        <div>
          <h2 className="mb-1.5 border-b text-lg font-medium text-gray-800">
            Notes
          </h2>
          <TextareaAutosize
            minRows={3}
            placeholder="Type something..."
            className="w-full resize-none text-gray-700 outline-none"
            maxLength={400}
            {...register("notes")}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <label htmlFor="servings">
            <span className="font-medium text-gray-800">Servings</span>
            <InputField
              type="number"
              className="w-full"
              shadow="none"
              placeholder="Servings"
              defaultValue={1}
              {...register("servings")}
            />
            <InputError message={errors.servings?.message} />
          </label>

          <label htmlFor="prepTime" className="col-start-1">
            <span className="font-medium text-gray-800">Prep Time</span>
            <InputField
              type="number"
              className="w-full"
              shadow="none"
              {...register("prep_time")}
            />

            <span className="text-gray-800">minutes</span>
            <InputError message={errors.prep_time?.message} />
          </label>

          <label htmlFor="cookTime">
            <span className="font-medium text-gray-800">Cook Time</span>
            <InputField
              type="number"
              className="w-full"
              shadow="none"
              {...register("cook_time")}
            />

            <span className="text-gray-800">minutes</span>
            <InputError message={errors.cook_time?.message} />
          </label>
        </div>

        <button
          className="w-full border-2 border-black bg-red-500 p-2 text-sm font-medium uppercase text-white hover:bg-red-600"
          type="submit"
        >
          Save
        </button>
      </form>
    </Card>
  );
}
