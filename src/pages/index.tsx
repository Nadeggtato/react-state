import PadButtons from "@/components/PadButtons";
import pads from "@/data/pads";
import Pad from "@/types/Pad";
import { useState } from "react";

export default function Home() {
  const [buttonPads, setButtonPads] = useState<Array<Pad>>(pads)

  const buttonElements = buttonPads.map(function(pad) {
    return <PadButtons key={pad.id} pad={pad} onToggle={toggle}/>
  })

  function toggle(id: number) {
    const updatedButtonPads = buttonPads.map((buttonPad: Pad) => {
      return buttonPad.id === id ? { ...buttonPad, on: !buttonPad.on } : buttonPad
    })

    setButtonPads(updatedButtonPads)
  }

  return (
    <main>
      <div className="pad-container">
        { buttonElements }
      </div>
  </main>
  );
}
