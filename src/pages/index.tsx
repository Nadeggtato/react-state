import { Inter } from "next/font/google";
import { act, useState } from "react";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Home() {
  const [counter, setCounter] = useState(0)

  function updateCounter(action: string) {
    setCounter((prevCounter) => {
      if (action === 'increase') {
        return prevCounter + 1
      }

      if (prevCounter === 0) {
        return 0
      }

      return prevCounter - 1
    })
  }

  return (
    <main className={inter.className + " container"}>
      <h1>How many times will Bob say "state" in this section?</h1>
      <div className="counter">
        <button className="minus" aria-label="Decrease count" onClick={() => updateCounter('decrease')}>–</button>
        <h2 className="count">{counter}</h2>
        <button className="plus" aria-label="Increase count" onClick={() => updateCounter('increase')}>+</button>
      </div>
    </main>
  );
}
