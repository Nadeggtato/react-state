import pads from "@/data/pads";
import Pad from "@/types/Pad";
import { useState } from "react";

export default function Home() {
  const [buttonPads, setButtonPads] = useState<Array<Pad>>(pads)

  return (
    <main>
      <div className="pad-container">
        {
          buttonPads.map(function(pad) {
            return (
              <button key={pad.id}></button>
            )
          })
        }
      </div>
  </main>
  );
}
