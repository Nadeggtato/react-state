import { Inter } from "next/font/google"
import { useState } from "react"

const inter400 = Inter({ weight: "400", subsets: ['latin'] })

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

      {
        ingredients.length > 0 && (<div id="ingredientListDiv">
          <h1>Ingredients on hand:</h1>
          <ul id="ingredientList">
            {ingredients.map((ingredient, index) => {
              return <li key={index}>{ingredient}</li>
            })}
          </ul>
        </div>)
      }
    </main>
  )
}
