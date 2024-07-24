"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown } from "lucide-react"
import { priorities, statuses } from '../constants/constants'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DatePickerDemo } from "./datePicker"
import { ToggleIndex } from "./toogle"
import SelectedSearch from "./SelectSearch"

const data: Payment[] = [
  {
    id: "m5gr84i9",
    prioridad: 'Alta',
    estado: "Escalado",
    asunto: "No recibe correo para reiniciar la contraseña",
    descripcion: "A Se rompio algo en un lugar",
    createdAt: '1 dia',
    usuario: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    prioridad: 'Baja',
    estado: "Cerrado",
    asunto: "Ampliación de fecha para postular a beca",
    descripcion: "B Se rompio algo en un lugar",
    createdAt: '1 mes',
    usuario: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    prioridad: 'Media',
    estado: "Cerrado",
    asunto: "Ampliación de fecha para postular a beca",
    descripcion: "C Se rompio algo en un lugar",
    createdAt: "3 horas",
    usuario: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    prioridad: 'Alta',
    estado: "Pendiente",
    asunto: "No se puede realizar orden de pago",
    descripcion: "D Se rompio algo en un lugar",
    createdAt: '3 dias',
    usuario: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    prioridad: 'Alta',
    estado: "En proceso",
    asunto: "No recibe correo para reiniciar la contraseña",
    descripcion: "E Se rompio algo en un lugar",
    createdAt: '1 semana',
    usuario: "carmella@hotmail.com",
  },
]

export type Payment = {
  id: string
  prioridad: string
  estado: "Pendiente" | "En proceso" | "Escalado" | "Cerrado"
  asunto: string
  descripcion: string
  createdAt: string
  usuario: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "estado",
    header: "Estado",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("estado")}</div>
    ),
  },
  {
    accessorKey: "usuario",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Usuario
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("usuario")}</div>,
  },
  {
    accessorKey: "createdAt",
    header: () => <div className="">Creado</div>,
    cell: ({ row }) => {
      return <div className="font-medium">{row.getValue("createdAt")}</div>
    },
  },
  {
    accessorKey: "asunto",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Asunto
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div>{row.getValue("asunto")}</div>,
  },
  {
    accessorKey: "descripcion",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Descripcion
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("descripcion")}</div>,
  },
  {
    accessorKey: "prioridad",
    header: ({ column }) => {
        return (
        <div className="text-center">
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Prioridad
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        </div>
        )
      },    
      cell: ({ row }) => {
      return <div className="text-center font-medium">{row.getValue("prioridad")}</div>
    },
  },
//   {
//     id: "actions",
//     enableHiding: false,
//     cell: ({ row }) => {
//       const payment = row.original

//       return (
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="ghost" className="h-8 w-8 p-0">
//               <span className="sr-only">Open menu</span>
//               <MoreHorizontal className="h-4 w-4" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuLabel>Actions</DropdownMenuLabel>
//             <DropdownMenuItem
//               onClick={() => navigator.clipboard.writeText(payment.id)}
//             >
//               Copy payment ID
//             </DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>View customer</DropdownMenuItem>
//             <DropdownMenuItem>View payment details</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       )
//     },
//   },
]

export default function AdminIndex2() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [openFilter, setOpenFilter] = React.useState(false)
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  function onPressedChange() {
    setOpenFilter(!openFilter)
  }

  return (
    <div className="w-full p-8">
      <div className="flex items-center py-4 gap-4">
        <Input
          placeholder="Filtrar usuario..."
          value={(table.getColumn("usuario")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("usuario")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <ToggleIndex onPressedChange={onPressedChange}/>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {
            openFilter ? 
            (
            <div className="pb-4 flex gap-4">
                <DatePickerDemo/>
                <DatePickerDemo/>
                <SelectedSearch type='Filtro de estado' statuses={statuses}/>
                <SelectedSearch type='Filtro de prioridad' statuses={priorities}/>
            </div>
            )
            :
            null
        }
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
