"use client";
import { useState, useEffect } from "react";

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (!ingredient) return;

    const fetchMealIdeas = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();
        setMeals(data.meals || []);
      } catch (error) {
        console.error("Error fetching meal ideas:", error);
      }
    };

    fetchMealIdeas();
  }, [ingredient]);

  return (
    <div className="p-4 border rounded-lg shadow-lg w-full md:w-1/2">
      <h2 className="text-xl font-bold mb-4">Meal Ideas for {ingredient}</h2>
      <ul className="grid grid-cols-2 gap-4">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="border p-2 rounded-lg shadow">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-32 object-cover rounded"
            />
            <p className="text-center font-medium mt-2">{meal.strMeal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;
