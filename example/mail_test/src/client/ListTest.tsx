import React from 'react'
import {useState} from 'react';
//import {Link } from 'react-router-dom';
import Head from '../components/Head'
// 
import { Button } from "@/components/ui/button"
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
//
import Table from './ListTest/Table'
import CrudIndex from './ListTest/CrudIndex';
import ClientUtil from './lib/ClientUtil';
//
let data: any[] = [];
//
export default function Page(){
  const [updatetime, setUpdatetime] = React.useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const handleEditOpen = () => setIsEditOpen(true);
  const handleEditClose = () => setIsEditOpen(false);
  //
  React.useEffect(() => {
    (async() => {
      data = await CrudIndex.getList();
      //console.log(data);
      setUpdatetime(new Date().toString());
    })()
  }, []);
  //
  const closeFunc = async function(){
    try{
      console.log("closeFunc");
      const values = ClientUtil.getInputValue("form1"); 
      console.log(values);
//return;
      data = await CrudIndex.create(values);
      handleClose();
    } catch (e) {
      console.error(e);
      throw new Error('Error , delete_movie');
    }
  }
  const closeEditFunc = async function(){
    console.log("closeEditFunc");
    handleEditClose();
  }

  //
  return(
  <div className="container mx-auto my-2 px-8 bg-white">
    <Head />
    <h1 className="text-4xl font-bold">ListTest</h1>
    <hr className="my-2" />
    {/* トリガーボタン */}
    <Button onClick={handleOpen}>Create</Button>
    {/* sheet */}
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Create</SheetTitle>
          <SheetDescription>
            create test user.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4" id="form1">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
            username
            </Label>
            <Input id="email" name="email" 
            defaultValue="@name123" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
            amount
            </Label>
            <Input id="amount" name="amount" defaultValue="1111" 
            className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <Button onClick={()=>{closeFunc()}}
          >Save</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>  
    {/* sheet_edit */}  
    {/*
    <button onClick={handleEditOpen} className="px-4 py-2 bg-blue-500 text-white rounded">
      Edit
    </button>    
    */}
    <Sheet open={isEditOpen} onOpenChange={setIsEditOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <Button onClick={()=>{closeEditFunc()}}
          >Close-Button</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    <hr className="my-2" />
    {/* table */}
    <Table data={data} />

  </div>
  );
}
