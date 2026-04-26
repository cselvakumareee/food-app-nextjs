import Link from "next/link";
import React from "react";
import Image from "next/image";
import classes from "./page.module.css";
import { getMeal, DatabaseMeal } from "../../../lib/meals";
import NotFound from "../not-found";

export default async function MealDetailsPage({ params }: { params: { mealsSlug: string } }) {
  const meal = await getMeal(params.mealsSlug) as DatabaseMeal | undefined;
  console.log({ meal });
  if (!meal) {
    return <NotFound />;
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill src={meal.image} alt={meal.title} />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <h1>Meal Details Page</h1>
        <Link href="/">go to home page</Link>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
