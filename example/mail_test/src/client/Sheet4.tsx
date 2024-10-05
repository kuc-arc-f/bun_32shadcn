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
export default function Page(){
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const handleEditOpen = () => setIsEditOpen(true);
  const handleEditClose = () => setIsEditOpen(false);
  //
  const closeFunc = async function(){
    console.log("closeFunc");
    handleClose();
  }
  const closeEditFunc = async function(){
    console.log("closeEditFunc");
    handleEditClose();
  }

  //
  return(
  <div className="container mx-auto my-2 px-8 bg-white">
    <Head />
    <h1 className="text-4xl font-bold">Sheet4</h1>
    <hr className="my-2" />
    {/* トリガーボタン */}
    <button onClick={handleOpen} className="px-4 py-2 bg-blue-500 text-white rounded">
      Create
    </button>    
    <hr className="my-2" />
    {/* sheet */}
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Create profile</SheetTitle>
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
          <Button onClick={()=>{closeFunc()}}
          >Close-Button</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>  
    {/* sheet_edit */}  
    <button onClick={handleEditOpen} className="px-4 py-2 bg-blue-500 text-white rounded">
      Edit
    </button>    
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
  </div>
  );
}
