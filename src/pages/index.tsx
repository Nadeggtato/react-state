import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  let [isImportant, setIsImportant] = useState('Yes')

  function handleClick() {
    setIsImportant('Definitely')
  }

  return (
    <main>
      <h1 className="title">Is state important to know?</h1>
      <button className="value" onClick={handleClick}>{isImportant}</button>
    </main>
  );
}
