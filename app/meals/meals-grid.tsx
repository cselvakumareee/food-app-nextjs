import MealItem from "./meals-item";
import styles from "./meals-grid.module.css";
import { DatabaseMeal } from "../../lib/meals";

export default function MealsGrid({ meals }: { meals: DatabaseMeal[] }) {
  return (
    <ul className={styles.meals}>
      {meals.map((meal: DatabaseMeal) => (
        <li key={meal.slug}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
