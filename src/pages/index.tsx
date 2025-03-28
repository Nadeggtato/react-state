import PadButtons from "@/components/PadButtons";
import pads from "@/data/pads";
import Pad from "@/types/Pad";
import { useState } from "react";

export default function Home() {
  const [buttonPads, setButtonPads] = useState<Array<Pad>>(pads)

  // function handleToggle() {
  //   setButtonPads(prevState => ({...prevState, on: !prevState.on}))
  // }

  const buttonElements = buttonPads.map(function(pad) {
    return <PadButtons key={pad.id} pad={pad}/>
  })

  return (
    <main>
      <div className="pad-container">
        { buttonElements }
      </div>
  </main>
  );
}
