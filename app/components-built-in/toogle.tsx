
import { Toggle } from "@/components/ui/toggle"
import { SetStateAction } from "react";
import { FaFilter } from "react-icons/fa";

export function ToggleIndex({onPressedChange}:{onPressedChange: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <Toggle onPressedChange={onPressedChange} aria-label="Toggle bold">
      <FaFilter />
    </Toggle>
  )
}