import IngredientsListProps from "@/types/IngredientsListProps"
import { Inter } from "next/font/google"
import { useState } from "react"

const inter400 = Inter({ weight: "400", subsets: ['latin'] })
const inter500 = Inter({ weight: "500", subsets: ['latin'] })

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

      <div id="ingredientsReadyDiv">
        <div>
          <p className={inter500.className}>Ready for a recipe?</p>
          <p>Generate a recipe from your list of ingredients</p>
        </div>
        <div>
          <button>Get a recipe</button>
        </div>
      </div>
    </>
  )
}

export default function Main() {
  const [ingredients, setIngredients] = useState<Array<string>>([])

  function addIngredient(formData: FormData) {
    setIngredients(prevIngredients => [...prevIngredients, formData.get('ingredient') as string])
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
          <button id="btnAddIngredient" type="submit" className={inter400.className}>+ Add Ingredient</button>
        </form>
      </div>

      {ingredients.length > 0 && <IngredientsList ingredients={ingredients}/>}
    </main>
  )
}
