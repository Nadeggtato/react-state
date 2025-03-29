import IngredientsList from "./IngredientsList"
import Recipe from "./Recipe"
import { Inter } from "next/font/google"
import { useState } from "react"

const inter400 = Inter({ weight: "400", subsets: ['latin'] })

export default function Main() {
  const [ingredients, setIngredients] = useState<Array<string>>([])
  const [isRecipeVisible, setIsRecipeVisible] = useState<boolean>(false)
  const [isRecipeFetching, setIsRecipeFetching] = useState<boolean>(false)
  const [recipe, setRecipe] = useState<string>('')

  function addIngredient(formData: FormData) {
    setIngredients(prevIngredients => [...prevIngredients, formData.get('ingredient') as string])
  }

  async function showRecipe() {
    if (isRecipeFetching) {
      alert('Please wait, request already ongoing.')

      return
    }

    setIsRecipeFetching(true)

    try {
      const response = await fetch("/api/hugging-face", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ingredients }),
      });

      const data = await response.json();
      setRecipe(data.recipe);
      setIsRecipeVisible(true);
    } catch (error) {
      console.error("Failed to fetch recipe:", error);
    } finally {
      setIsRecipeFetching(false)
    }
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

      {
        ingredients.length > 0 && <IngredientsList
          ingredients={ingredients}
          onShowRecipe={showRecipe}
          isRecipeLoading={isRecipeFetching}
        />
      }
      {isRecipeVisible && <Recipe recipe={recipe}/>}
    </main>
  )
}
