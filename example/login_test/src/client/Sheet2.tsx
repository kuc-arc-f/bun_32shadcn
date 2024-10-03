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
import SheetCompo from './Sheet2/SheetCompo'
//
export default function Page(){
  const [isOpen, setIsOpen] = useState(false);
  const [childIsOpen, setChildIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleChildOpen = () => setChildIsOpen(true);
  const handleChildClose = () => setChildIsOpen(false);
  //
  const closeChildFunc = async function(){
    console.log("closeChildFunc");
    handleChildClose();
  }
  //
  return(
  <div className="container mx-auto my-2 px-8 bg-white">
    <Head />
    <h1 className="text-4xl font-bold">Sheet2: ng1</h1>
    <hr className="my-2" />
    <SheetCompo isOpen={childIsOpen} parentClose={closeChildFunc}/>
    {/* トリガーボタン */}
    <button onClick={handleChildOpen} 
     className="px-4 py-2 bg-blue-500 text-white rounded">
      Open Sheet
    </button>    
    <hr className="my-2" />
  </div>
  );
}
