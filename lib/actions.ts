"use server";

import { redirect } from "next/navigation";
import { saveNewMeal } from "./meals";

export const handleFormSubmit = async (formData) => {
  // handle form submission and save meal to database
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  console.log({ meal });
  // save meal to database
  await saveNewMeal(meal);
  redirect("/meals"); // redirect to meals page after saving meal
};
