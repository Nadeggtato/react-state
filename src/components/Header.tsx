import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: "400"
});

export default function Header() {
  return (
    <header>
      <img src="/assets/images/icon.png" alt="Chef Claude Icon"></img>
      <h1 className={inter.className}>Chef Claude</h1>
    </header>
  )
}
