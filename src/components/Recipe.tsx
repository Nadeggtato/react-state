import RecipeProps from "@/types/RecipeProps";

export default function Recipe(props: RecipeProps) {
  return (
    <section>
      <h2>Chef Claude Recommends:</h2>
      <article className="suggested-recipe-container"
        aria-live="polite"
        dangerouslySetInnerHTML={{ __html: props.recipe }}>
      </article>
    </section>
  )
}
