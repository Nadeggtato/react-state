export default interface IngredientsListProps {
  ingredients: Array<string>,
  onShowRecipe: () => void,
  isRecipeLoading: boolean
}
