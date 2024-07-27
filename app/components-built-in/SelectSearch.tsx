"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Statuses } from "@/types"


export default function SelectSearch(props: {filter:{estado:string, prioridad:string} ,type: string, statuses: Statuses[], setFilter:React.Dispatch<React.SetStateAction<{estado:string, prioridad:string}>>}) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const {type, statuses, setFilter, filter} = props

  const handleUpdateFilter = (currentValue:string, type: string) => {
    let update = currentValue === value ? "" : currentValue
    setFilter(prevFilter => ({
      ...prevFilter,
      [type]: update,
    }));
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? statuses.find((status) => status.value === value)?.label
            : `Filtro de ${type}`}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Buscar..." />
          <CommandList>
            <CommandEmpty>No se encontraron resultados.</CommandEmpty>
            <CommandGroup>
              {statuses.map((status:Statuses) => (
                <CommandItem
                  key={status.value}             
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                    handleUpdateFilter(currentValue, type)
                  }}
                >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === status.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {status.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
