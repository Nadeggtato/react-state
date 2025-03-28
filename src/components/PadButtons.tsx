import PadButtonProps from "@/types/PadButtonProps"
import { useState } from "react"

export default function Pad(props: PadButtonProps) {
  const [isOn, setIsOn] = useState<boolean>(props.pad.on)

  function handleToggle() {
    setIsOn(!isOn)
  }

  return (
    <button style={{backgroundColor: props.pad.color}}
      className={isOn ? 'on' : ''}
      onClick={handleToggle}/>
  )
}
