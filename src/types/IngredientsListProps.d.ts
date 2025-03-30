import { RefObject } from "react";

export default interface IngredientsListProps {
  ingredients: Array<string>,
  onShowRecipe: () => void,
  isRecipeLoading: boolean,
  generateIngredientRef: RefObject<HTMLDivElement>
}
