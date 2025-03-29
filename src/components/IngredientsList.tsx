import IngredientsListProps from "@/types/IngredientsListProps"
import { Inter } from "next/font/google"

const inter500 = Inter({ weight: "500", subsets: ['latin'] })

export default function IngredientsList(props: IngredientsListProps)
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
          <button onClick={props.onShowRecipe} className={ props.isRecipeLoading ? 'loading' : '' }>
            Get a recipe
          </button>
        </div>
      </div>}
    </>
  )
}
