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
import useStore from "../store/appStore"
import { Ticket } from "@/types"


export default function AdminIndex() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const { tickets } = useStore()


  const [data, setData] = React.useState<Ticket[]>(tickets);
  const [filter, setFilter] = React.useState<{estado:string, prioridad:string}>({estado: '', prioridad: ''});

  React.useEffect(() => {
    const applyFilter = () => {
     // Filtra los tickets por prioridad y estado
      let priorityTickets = tickets.filter(ticket => ticket.priority.name.includes(filter.prioridad));
      let statusTickets = tickets.filter(ticket => ticket.status.name.includes(filter.estado));

      // Encuentra los tickets que se repiten en ambos arrays
      let repeatedTickets = priorityTickets.filter(ticket =>
        statusTickets.some(statusTicket => statusTicket.ticket_id === ticket.ticket_id)
      );

      // Imprime los tickets que se repiten
      setData(repeatedTickets);
    };

  applyFilter();
}, [filter]);

   const columns: ColumnDef<Ticket>[] = [
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
      accessorFn: (row) => row.status.name,
      id: 'status',
      header: "Estado",
      cell: ({ getValue }) => (
        <div className="capitalize">{getValue() as string}</div>
      ),
    },
    {
      accessorFn: (row) => row.user.username,
      id: 'user',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Usuario
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ getValue }) => (
        <div className="lowercase">{getValue() as string}</div>
      ),
    },
    {
      accessorKey: "createdAt",
      header: () => <div>Creado</div>,
      cell: ({ getValue }) => {
        return <div className="font-medium">{getValue() as number} horas</div>
      },
    },
    {
      accessorFn: (row) => row.nomenclature.name,
      id: 'nomenclature',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Asunto
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ getValue }) => <div>{getValue() as string}</div>,
    },
    {
      accessorKey: "description",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Descripción
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ getValue }) => <div className="lowercase">{getValue() as string}</div>,
    },
    {
      accessorFn: (row) => row.priority.name,
      id: 'priority',
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
        );
      },
      cell: ({ getValue }) => {
        return <div className="text-center font-medium">{getValue() as string}</div>
      },
    },
  ];
  
  const [openFilter, setOpenFilter] = React.useState(false)
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
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
          value={(table.getColumn("user")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("user")?.setFilterValue(event.target.value)
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
                <SelectedSearch filter={filter} setFilter={setFilter} type='estado' statuses={statuses}/>
                <SelectedSearch filter={filter} setFilter={setFilter} type='prioridad' statuses={priorities}/>
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
