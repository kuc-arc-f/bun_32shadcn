import React from 'react'
import {useState} from 'react';
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
export default function Page(props: any){
console.log("#SheetCompo");
console.log(props);
console.log("props.isOpen=", props.isOpen);
//  const [isOpen, setIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(props.isOpen);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const closeFunc = async function (){
    console.log("props.closeFunc");
    props.parentClose();
//    handleClose();
  }
  //
  return(
  <>
    <Sheet open={props.isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="sheet_conten_wrap">
        <SheetHeader>
          <SheetTitle>SheetCompo</SheetTitle>
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
          <Button onClick={()=>{props.parentClose()}}
          >Close-Button</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>    
  </>
  );
}
