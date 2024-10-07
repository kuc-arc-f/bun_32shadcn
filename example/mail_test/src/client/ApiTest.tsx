import React from 'react'
import {useState} from 'react';
//import {Link } from 'react-router-dom';
import Head from '../components/Head'
import LoadingBox from '../components/LoadingBox'
// 
import { cn } from '@/lib/utils'; 
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
import { ArrowUpDown, ChevronDown, MoreHorizontal, Loader2 } from "lucide-react"

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
import CrudIndex from './ApiTest/CrudIndex';
import FormDialog from './ApiTest/FormDialog'
//
let data: any[] = [];
let formData: any = {};
let form1typeCreate = 1; // 1: Create
let form1_id = 0;
//
export type Payment = {
  id: string
  title: string
  content: string
  complete: 0
}
//
export default function Page(){
  const [updatetime, setUpdatetime] = React.useState("");
  const [loading, setLoading] = useState(true);
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
      accessorKey: "id",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            id
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue("id")}</div>,
    },
    {
      accessorKey: "title",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            title
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue("title")}</div>,
    },
    {
      accessorKey: "content",
      header: () => <div className="text-start">content</div>,
      cell: ({ row }) => <div className="lowercase">{row.getValue("content")}</div>,
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
      const d = await CrudIndex.getList();
      data = d.data;
      console.log(d.data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      //setUpdatetime(new Date().toString());
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
      //formData = {email: "", amount: "0"}
      setUpdatetime(new Date().toString());
      const modalDialog = document.getElementById('confirmDialog');
      if(modalDialog) {
        //@ts-ignore
        modalDialog.showModal();
      }
    } catch (e) {
      console.error(e);
    }
  }
  const openEditDialog = async function(id: number){
    try {
      form1typeCreate = 0;
//      formData = await CrudIndex.getItem(id);
      const d = await CrudIndex.getItem(id);
      formData = d.data;
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
    const dlg = document.getElementById('confirmDialog');
    const values = ClientUtil.getInputValue("form1"); 
    console.log(values);
    data = await CrudIndex.create(values); 
    if(dlg) {
      //@ts-ignore
      dlg.close();
    }
    location.reload();
  }
  //
  const cbEditFunc = async function(){
    //console.log("#cbFunc");
    const dlg = document.getElementById('confirmDialog');
    const values = ClientUtil.getInputValue("form1"); 
    values.id = form1_id; 
    values.api_url = "/test/update"; 
    console.log(values);
    data = await CrudIndex.update(values);
    location.reload();
    if(dlg) {
      //@ts-ignore
      dlg.close();
    }
  }  
  //
  return(
  <>
    <Head />
    {(loading)?(<LoadingBox />):null}
    <div className="container mx-auto my-2 px-8 bg-white list3_main_wrap">
      <h1 className="text-3xl font-bold mt-2">ApiTest</h1>
      <hr className="mt-1 mb-2" />
      {/* dialog */}
      <Button className="mx-2" onClick={()=>testDialog()}>Create
      </Button>
      {(form1typeCreate === 1)?(
          <FormDialog message={`Create`} cbFunction={cbFunc} cbEditFunction={cbEditFunc}
          type_create={form1typeCreate} formData={formData} />
      ):(
        <FormDialog message={`Edit`} cbFunction={cbFunc} cbEditFunction={cbEditFunc}
        type_create={form1typeCreate} formData={formData} />
      )}
      <hr className="my-2" />
      {/* table */}
      <div className="flex items-center pb-2">
        <Input
          placeholder="Filter title..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
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
          <TableHeader className="bg-gray-100">
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
  </>
  );
}
