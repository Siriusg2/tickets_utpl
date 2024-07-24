import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SelectIndex({placeholder}:{placeholder:string}) {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder={placeholder}   />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Nomenclatura 1</SelectLabel>
          <SelectItem value="est">Sub Nomenclatura 1</SelectItem>
          <SelectItem value="cst">Sub Nomenclatura 2</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Nomenclatura 2</SelectLabel>
          <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
          <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
          <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
          <SelectItem value="ist_indonesia">
            Indonesia Central Standard Time (WITA)
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Nomenclatura 3</SelectLabel>
          <SelectItem value="art">Argentina Time (ART)</SelectItem>
          <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
