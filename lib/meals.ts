import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "fs";

interface MealImage {
  name: string;
  arrayBuffer(): Promise<ArrayBuffer>;
}

interface Meal {
  slug?: string;
  title: string;
  image: MealImage;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate delay
  const stmt = db.prepare("SELECT * FROM meals");
  const meals = stmt.all();
  return meals;
  //throw new Error('loading failed');
}

export function getMeal(slug: string) {
  const stmt = db.prepare("SELECT * FROM meals WHERE slug = ?");
  const meal = stmt.get(slug);
  return meal;
  //throw new Error('loading failed');
}

export async function saveNewMeal(meal: Meal): Promise<void> {
  meal.slug = slugify(meal.title, { lower: true }); // convter title to slug, lower case
  meal.instructions = xss(meal.instructions); // sanitize instructions to prevent XSS attacks

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  // Buffer Conversion - A buffer is a temporary storage space in memory that holds binary data in a format Node.js can work with
  // Write to Disk - To save the image file to the server, Node.js needs the binary data in buffer format to write it to the file system using functions like fs.writeFile()
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer(); // convert image to buffer
  stream.write(
    Buffer.from(bufferedImage),
    (error: NodeJS.ErrnoException | null) => {
      if (error) {
        console.error("Error saving image:", error);
      } else {
        console.log("Image saved successfully");
      }
    }
  );

  meal.image = `/images/${fileName}` as any; // save image path to database
  db.prepare(
    `INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email) VALUES (@slug, @title, @image, @summary, @instructions, @creator, @creator_email)`
  ).run({
    slug: meal.slug,
    title: meal.title,
    image: meal.image,
    summary: meal.summary,
    instructions: meal.instructions,
    creator: meal.creator,
    creator_email: meal.creator_email,
  });
}
