import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate delay
  const stmt = db.prepare("SELECT * FROM meals");
  const meals = stmt.all();
  return meals;
  //throw new Error('loading failed');
}
