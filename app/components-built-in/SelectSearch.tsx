"use client"

import * as React from "react"

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
import { Statuses } from "@/types";



export default function SelectSearch(props:{type:string, statuses: Statuses[]}) {
  const [open, setOpen] = React.useState(false)
  const [selectedStatus, setSelectedStatus] = React.useState<Statuses | null>(
    null
  )
  const {type, statuses} = props
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-[150px] justify-start">
          {selectedStatus ? <>{selectedStatus.label}</> : <>{type}</>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <StatusList statuses={statuses} setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
      </PopoverContent>
    </Popover>
  )
  
  // Responsive
  // return (
  //   <Drawer open={open} onOpenChange={setOpen}>
  //     <DrawerTrigger asChild>
  //       <Button variant="outline" className="w-[150px] justify-start">
  //         {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
  //       </Button>
  //     </DrawerTrigger>
  //     <DrawerContent>
  //       <div className="mt-4 border-t">
  //         <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
  //       </div>
  //     </DrawerContent>
  //   </Drawer>
  // )
}

function StatusList({
  setOpen,
  setSelectedStatus,
  statuses
}: {
  setOpen: (open: boolean) => void
  setSelectedStatus: (status: Statuses | null) => void
  statuses: Statuses[]
}) {
  
  return (
    <Command>
      <CommandInput placeholder="Filter status..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {statuses.map((status) => (
            <CommandItem
              key={status.value}
              value={status.value}
              onSelect={(value) => {
                setSelectedStatus(
                  statuses.find((priority) => priority.value === value) || null
                )
                setOpen(false)
              }}
            >
              {status.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
