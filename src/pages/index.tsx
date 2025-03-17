import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  const [isGoingOut, setIsGoingOut] = useState(true)

  function toggleGoingOut() {
    setIsGoingOut(!isGoingOut)
  }

  return (
    <main className={inter.className}>
      <h1 className="title">Do I feel like going out tonight?</h1>
      <button className="value" onClick={toggleGoingOut}>{isGoingOut ? 'Yes' : 'No'}</button>
    </main>
  );
}
