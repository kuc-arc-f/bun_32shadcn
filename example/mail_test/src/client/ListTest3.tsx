import React from 'react'
import {useState} from 'react';
//import {Link } from 'react-router-dom';
import Head from '../components/Head'
// 
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
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

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
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import ClientUtil from './lib/ClientUtil';
import CrudIndex from './ListTest3/CrudIndex';
import FormDialog from './ListTest3/FormDialog'
//
let data: any[] = [];
let formData: any = {};
let form1typeCreate = 1; // 1: Create
let form1_id = 0;
//
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}
//
export default function Page(){
  const [updatetime, setUpdatetime] = React.useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  //
  const columns: ColumnDef<Payment>[] = [
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
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("status")}</div>
      ),
    },
    {
      accessorKey: "email",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
    },
    {
      accessorKey: "amount",
      header: () => <div className="text-right">Amount</div>,
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"))
  
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount)
  
        return <div className="text-right font-medium">{formatted}</div>
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const payment = row.original
  
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={async() => {
                  try{
                    form1typeCreate = 0;
                    form1_id = Number(payment.id);
                    console.log("id=", Number(payment.id))
                    openEditDialog(Number(payment.id));
                  } catch (e) {
                    console.error(e);
                  }
                }}
              >
                Edit Items
              </DropdownMenuItem>            
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={async() => {
                  if (window.confirm("Delete OK ?")) {
                    console.log("id=", payment.id)
                    try{
                      await CrudIndex.delete(Number(payment.id));
                      location.reload();
                    } catch (e) {
                      console.error(e);
                    }
                  }
                }}
              >
                Delete Items
              </DropdownMenuItem>            
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ];
  //
  React.useEffect(() => {
    (async() => {
      data = await CrudIndex.getList();
      //console.log(data);
      setUpdatetime(new Date().toString());
    })()
  }, []);
  //
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
  //
  const openFunc = async function(){
    form1typeCreate = 1;
    handleOpen();
  }
  const testDialog = function(){
    try {
      form1typeCreate = 1;
      //formData = {}
      setUpdatetime(new Date().toString());
      const modalDialog = document.getElementById('confirmDialog');
      if(modalDialog) {
        //@ts-ignore
        modalDialog.showModal();
      }
      //setTimeout(async() => {
      //}, 500);
    } catch (e) {
      console.error(e);
    }
  }
  const openEditDialog = async function(id: number){
    try {
      form1typeCreate = 0;
      formData = await CrudIndex.getItem(id);
console.log(formData);
      setUpdatetime(new Date().toString());
      const modalDialog = document.getElementById('confirmDialog');
      if(modalDialog) {
        setTimeout(async() => {
          //@ts-ignore
          modalDialog.showModal();
        }, 500);
      }
    } catch (e) {
      console.error(e);
    }
  }
  const cbFunc = async function(){
    console.log("#cbFunc");
    //alert("parent.cbFunc");
    const dlg = document.getElementById('confirmDialog');
    const values = ClientUtil.getInputValue("form1"); 
    console.log(values);
    data = await CrudIndex.create(values); 
    setUpdatetime(new Date().toString());   
    if(dlg) {
      //@ts-ignore
      dlg.close();
    }
  }
  //
  const cbEditFunc = async function(){
    //console.log("#cbFunc");
    const dlg = document.getElementById('confirmDialog');
    const values = ClientUtil.getInputValue("form1"); 
    values.id = form1_id; 
    console.log(values);
    data = await CrudIndex.update(values);
    setUpdatetime(new Date().toString());   
    if(dlg) {
      //@ts-ignore
      dlg.close();
    }
  }  
  //
  return(
  <div className="container mx-auto my-2 px-8 bg-white list3_main_wrap">
    <Head />
    <h1 className="text-3xl font-bold mt-2">ListTest3</h1>
    <hr className="mt-1 mb-2" />
    {/* dialog */}
    <Button className="mx-2" onClick={()=>testDialog()}>Create
    </Button>
    {(form1typeCreate === 1)?(
        <FormDialog message={`Create`} cbFunction={cbFunc} cbEditFunction={cbEditFunc}
        type_create={form1typeCreate} formData={{}} />
    ):(
      <FormDialog message={`Edit`} cbFunction={cbFunc} cbEditFunction={cbEditFunc}
      type_create={form1typeCreate} formData={formData} />
    )}
    <hr className="my-2" />
    {/* table */}
    <div className="flex items-center pb-2">
      <Input
        placeholder="Filter emails..."
        value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("email")?.setFilterValue(event.target.value)
        }
        className="max-w-sm"
      />
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
  );
}
