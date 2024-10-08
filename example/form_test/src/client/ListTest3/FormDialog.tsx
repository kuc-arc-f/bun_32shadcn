import {useState, useEffect} from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
let titleString = "";
//
function Compo(props: any) {
  const [updatetime, setUpdatetime] = useState("");
console.log(props);
console.log("type_create=", props.type_create);
  let email = "";
  let amount = 0;
  try{
    const json = '{"result":true, "count":42}';
    const obj = JSON.parse(props.formData);
console.log("#obj");
console.log(obj);
  } catch (e) {
    console.error(e);
  }

    /*
  if(props.formData.email) {
    email = props.formData.email;
  }
  amount = "";
  if(props.formData.amount) {
    amount = String(props.formData.amount);
  }
  console.log("amount=", amount);
  */
/*
  useEffect(() => {
    (async() => {
      setUpdatetime(new Date().toString());
    })()
  }, []);
*/
  titleString = "Create";
  if(props.type_create === 0){
    titleString = "Edit";
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
        s={amount}
        <input type="text" defaultValue={amount} /><br />
        */}
        <Input type="text" id="amount" name="amount" defaultValue={amount} 
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