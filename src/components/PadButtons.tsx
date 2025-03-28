import PadButtonProps from "@/types/PadButtonProps"

export default function Pad(props: PadButtonProps) {
  return <button style={{backgroundColor: props.pad.color}}></button>
}
