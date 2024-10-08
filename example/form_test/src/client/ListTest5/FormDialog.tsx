import {useState, useEffect} from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
let titleString = "";
//
function Compo(props: any) {
console.log(props);
console.log("type_create=", props.type_create);
  let email = "";
  let amount = "";
  let amountNumber = "";
  try{
    titleString = "Create";
    if(props.type_create === 0){
      titleString = "Edit";
    }else{
      amountNumber = "0";
    }
    /*
    if(props.type_create === 0 && props.formData){
      const obj = JSON.parse(props.formData);
      console.log("#obj");
      console.log(obj);
      if(obj.email) {
        email = obj.email;
      }
      if(obj.amount) {
        amountNumber = String(obj.amount);
        console.log("amount1=", amountNumber);
      }
console.log("amount=", amountNumber);
    }
    */
  } catch (e) {
    console.error(e);
  }

  //
  const closeButton = function(){
    const dlg = document.getElementById('confirmDialog');
    if(dlg) {
      //@ts-ignore
      dlg.close();
    }
  }
  //
  const okFunc = async function(){
    console.log("#okFunc");
    props.cbFunction();
  }
  const okEditFunc = async function(){
    console.log("#cbEditFunction");
    props.cbEditFunction();
  }
  //
  return (
  <dialog id="confirmDialog" className="dialog rounded-md">
    <div className="bg-white rounded-lg px-8 pt-3 pb-3 dialog_body_wrap w-[350px]" id="form1">
      <p className="text-2xl font-bold">{titleString}</p>
      <hr className="my-2" />
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="username" className="text-right">
        username
        </Label>
        <Input id="email" name="email"
          defaultValue={email} className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4 mt-2">
        <Label htmlFor="name" className="text-right">
          amount
        </Label>
        {/*
        s={amountNumber}
        <input type="text" defaultValue={amountNumber} /><br />
        */}
        <Input type="text" id="amount" name="amount" defaultValue={amountNumber} 
        className="col-span-3" />
      </div>
      <hr className="my-2" />
      <div className="text-end">
        <button onClick={()=>closeButton()}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded"
          type="submit" value="OK">Cancel</button>
          {(props.type_create === 1)?(
            <Button onClick={()=>okFunc()} className="mx-2"
            value="OK">Create</Button>
          ):(
            <Button onClick={()=>okEditFunc()} className="mx-2"
            value="OK">Save</Button>
          )}          
      </div>
    </div>
  </dialog>
  );
}
export default Compo;
/*
className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-8 ms-2 rounded"
*/