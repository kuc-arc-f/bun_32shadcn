import React from 'react'
import {useState} from 'react';
import dayjs from 'dayjs';
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
import CrudIndex from './FormTest/CrudIndex';
import FormDialog from './FormTest/FormDialog'
//
let data: any[] = [];
let formData: any = {};
let form1typeCreate = 1; // 1: Create
let form1_id = 0;
let form1_radio1 = true;
let form1_radio2 = false;
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
  const [errors, setErrors] = useState({});
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
          </Button>
        )
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue("id")}</div>,
    },
    {
      accessorKey: "title",
      size: 250,
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
      size: 80,
      cell: ({ row }) => <div className="lowercase">{row.getValue("content")}</div>,
    },
    {
      id: "actions",
      size: 80,
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
                    form1_id = payment.id;
                    console.log("id=", payment.id)
                    location.href = `/form_test2edit?id=${payment.id}`;
                  } catch (e) {
                    console.error(e);
                  }
                }}
              >
                Edit
              </DropdownMenuItem>            
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={async() => {
                  if (window.confirm("Delete OK ?")) {
                    console.log("id=", payment.id)
                    try{
                      await CrudIndex.delete(payment.id);
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
      data = d;
      console.log(d);
      setTimeout(() => {
        setLoading(false);
      }, 100);
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
  const testDialog = function(){
    try {
      const now = dayjs();
      form1typeCreate = 1;
      formData.num1 = 0;
      formData.num2 = 0;
      formData.radio1 = true;
      formData.radio2 = false;
      formData.pub_date = now.format("YYYY-MM-DD");
     //console.log("pub_date=", formData.pub_date);
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
  //
  const openShowDialog = async function(id: string){
    try {
      form1typeCreate = 0;
      const d = await CrudIndex.getItem(id);
      formData = d;
console.log(formData);
console.log("public=", formData.public);
      if(formData.public === "0"){
        formData.radio1 = false;
        formData.radio2 = true;
      }else{
        formData.radio1 = true;
        formData.radio2 = false;
      }
      setUpdatetime(new Date().toString());
      const modalDialog = document.getElementById('confirmDialog');
      if(modalDialog) {
        setTimeout(async() => {
          modalDialog.showModal();
        }, 500);
      }
    } catch (e) {
      console.error(e);
    }
  }
  //
  const openEditDialog = async function(id: string){
    try {
      form1typeCreate = 0;
      const d = await CrudIndex.getItem(id);
      formData = d;
      if(formData.public === "0"){
        formData.radio1 = false;
        formData.radio2 = true;
      }else{
        formData.radio1 = true;
        formData.radio2 = false;
      }      
console.log(formData);
      setUpdatetime(new Date().toString());
      const modalDialog = document.getElementById('confirmDialog');
      if(modalDialog) {
        setTimeout(async() => {
          modalDialog.showModal();
        }, 500);
      }
    } catch (e) {
      console.error(e);
    }
  }
  //
  const cbFunc = async function(item: any){
    console.log("#cbFunc");
    console.log(item);
    const dlg = document.getElementById('confirmDialog');
    const values = ClientUtil.getInputValue("form1"); 
    values.option_1 = item.option_1;
    values.option_2 = item.option_2;
    values.option_3 = item.option_3; 
    values.public = item.public; 
    //
    console.log(values);
    const resulte = await CrudIndex.create(values); 
    console.log("cbFunc.ret=", resulte.ret);
    console.log(resulte);
    if(resulte.ret && resulte.ret !==200){
      console.log("error <> 200");
      //{errors?.title && (<div className="error_message">{errors.title}</div>
      let s = "";
      if(resulte.errors?.title){
        s += "title: " + resulte.errors.title + "\n";
      }
      if(resulte.errors?.content){
        s += "content: " +resulte.errors.content+ "\n";
      }
      setErrors(resulte.errors);
      alert(s);
      return;
    }
//return;
    if(dlg) {
      //@ts-ignore
      //dlg.close();
    }
    location.reload();
  }
  //
  const cbEditFunc = async function(item: any){
    const dlg = document.getElementById('confirmDialog');
    const values = ClientUtil.getInputValue("form1"); 
    values.id = form1_id; 
    values.api_url = "/test/update"; 
    values.option_1 = item.option_1;
    values.option_2 = item.option_2;
    values.option_3 = item.option_3; 
    values.public = item.public; 
    console.log(values);
    data = await CrudIndex.update(values);
    location.reload();
    if(dlg) {
      //@ts-ignore
      dlg.close();
    }
  }  
  if(loading) {
    return(
    <>
      <Head />
      <LoadingBox />
    </>
    );
  }
  // {(loading)?(<LoadingBox />):null}
  return(
  <>
    <Head />
    <div className="container mx-auto my-2 px-8 bg-white list3_main_wrap">
      <h1 className="text-3xl font-bold mt-2">Form2</h1>
      <hr className="mt-1 mb-2" />
      {/* dialog */}
      <a href="/form_test2create">
        <Button className="mx-2">Create</Button>
      </a>
      {(form1typeCreate === 1)?(
          <FormDialog message={`Create`} cbFunction={cbFunc} cbEditFunction={cbEditFunc}
          type_create={form1typeCreate} formData={formData} errors={errors} />
      ):(
        <FormDialog message={`Edit`} cbFunction={cbFunc} cbEditFunction={cbEditFunc}
        type_create={form1typeCreate} formData={formData} errors={errors} />
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
                    <TableHead key={header.id} style={{ width: header.getSize() }}>
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
    <style>{` 
    .column_title { width: 50%; }
    `}</style> 
     
  </>
  );
}
