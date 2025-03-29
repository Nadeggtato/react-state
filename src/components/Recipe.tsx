import RecipeProps from "@/types/RecipeProps"
import ReactMarkdown from "react-markdown"

export default function Recipe(props: RecipeProps) {
  return (
    <section>
      <h2 id="chefClaudeHeader">Chef Claude Recommends:</h2>
      <article className="suggested-recipe-container" aria-live="polite">
        <ReactMarkdown children={props.recipe}></ReactMarkdown>
      </article>
    </section>
  )
}
