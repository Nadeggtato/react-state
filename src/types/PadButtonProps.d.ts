import Pad from "./Pad";

export default interface PadButtonProps {
  pad: Pad
  onToggle: (id: number) => void
}
