import IngredientsListProps from "@/types/IngredientsListProps"
import { Inter } from "next/font/google"
import { useState } from "react"

const inter400 = Inter({ weight: "400", subsets: ['latin'] })
const inter500 = Inter({ weight: "500", subsets: ['latin'] })

export function Recipe() {
  return (
    <section>
      <h2>Chef Claude Recommends:</h2>
      <article className="suggested-recipe-container" aria-live="polite">
        <p>Based on the ingredients you have available, I would recommend making a simple a delicious <strong>
          Beef Bolognese Pasta</strong>. Here is the recipe:</p>
        <h3>Beef Bolognese Pasta</h3>
        <strong>Ingredients:</strong>
        <ul>
            <li>1 lb. ground beef</li>
            <li>1 onion, diced</li>
            <li>3 cloves garlic, minced</li>
            <li>2 tablespoons tomato paste</li>
            <li>1 (28 oz) can crushed tomatoes</li>
            <li>1 cup beef broth</li>
            <li>1 teaspoon dried oregano</li>
            <li>1 teaspoon dried basil</li>
            <li>Salt and pepper to taste</li>
            <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
        </ul>
        <strong>Instructions:</strong>
        <ol>
            <li>Bring a large pot of salted water to a boil for the pasta.</li>
            <li>
              In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden
              spoon, until browned and cooked through, about 5-7 minutes.
            </li>
            <li>
              Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is
              translucent.
            </li>
            <li>Stir in the tomato paste and cook for 1 minute.</li>
            <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
            <li>
              Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the
              flavors to meld.
            </li>
            <li>
              While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and
              return it to the pot.
            </li>
            <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
            <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
        </ol>
      </article>
    </section>
  )
}

export function IngredientsList(props: IngredientsListProps)
{
  return (
    <>
      <div id="ingredientListDiv">
        <h1>Ingredients on hand:</h1>
        <ul id="ingredientList">
          {props.ingredients.map((ingredient, index) => {
            return <li key={index}>{ingredient}</li>
          })}
        </ul>
      </div>

      {props.ingredients.length >= 4 && <div id="ingredientsReadyDiv">
        <div>
          <p className={inter500.className}>Ready for a recipe?</p>
          <p>Generate a recipe from your list of ingredients</p>
        </div>
        <div>
          <button onClick={props.onShowRecipe}>Get a recipe</button>
        </div>
      </div>}
    </>
  )
}

export default function Main() {
  const [ingredients, setIngredients] = useState<Array<string>>([])
  let [isRecipeVisible, setIsRecipeVisible] = useState<boolean>(false)

  function addIngredient(formData: FormData) {
    setIngredients(prevIngredients => [...prevIngredients, formData.get('ingredient') as string])
  }

  function showRecipe() {
    setIsRecipeVisible(isRecipeVisible = true)
  }

  return (
    <main className={inter400.className}>
      <div id="inputDiv">
        <form action={addIngredient}>
          <input type="text"
            id="txtIngredient"
            name="ingredient"
            placeholder="e.g. oregano"
            className={inter400.className}
          />
          <button id="btnAddIngredient" type="submit" className={inter400.className}>
            + Add Ingredient
          </button>
        </form>
      </div>

      {ingredients.length > 0 && <IngredientsList ingredients={ingredients} onShowRecipe={showRecipe}/>}
      {isRecipeVisible && <Recipe/>}
    </main>
  )
}
