import { Inter } from "next/font/google"

const inter400 = Inter({ weight: "400", subsets: ['latin'] })

export default function Main() {
  return (
    <main className={inter400.className}>
      <form>
        <input type="text" id="txtIngredient" placeholder="e.g. oregano" className={inter400.className}/>
        <button id="btnAddIngredient" className={inter400.className}>+ Add Ingredient</button>
      </form>
    </main>
  )
}
