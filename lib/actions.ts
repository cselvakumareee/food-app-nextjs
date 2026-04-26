"use server";

import { redirect } from "next/navigation";
import { saveNewMeal } from "./meals";
import { revalidatePath } from "next/cache";

export const handleFormSubmit = async (prevState, formData) => {
  // handle form submission and save meal to database
  const isValidText = (text) => !text || text.trim() === "";
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  if (
    isValidText(meal.title) ||
    isValidText(meal.summary) ||
    isValidText(meal.instructions) ||
    isValidText(meal.creator) ||
    isValidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image || meal.image.size === 0
  ) {
    // Handle validation errors
    return {message: "All fields are required and must be valid email missing." };
  }
  console.log({ meal });
  // save meal to database
  await saveNewMeal(meal);
  revalidatePath('/meals'); // revalidate meals page to show new meal
  redirect("/meals"); // redirect to meals page after saving meal
};
