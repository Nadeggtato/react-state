import PadButtonProps from "@/types/PadButtonProps"

export default function Pad(props: PadButtonProps) {
  return (
    <button style={{backgroundColor: props.pad.color}}
      className={props.pad.on ? 'on' : ''}>
    </button>
  )
}
