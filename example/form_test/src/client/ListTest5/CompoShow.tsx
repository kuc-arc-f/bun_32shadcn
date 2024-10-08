import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

//
export  default function CompoShow(props: any){
  //
  return (
  <div className="bg-gray-100 p-2">
    <h1 className="text-2xl font-bold mt-2">Show2-child</h1>
    <div>
      <Label htmlFor="username" className="text-right">
          username
      </Label>
      <Input id="email" name="email" disabled={true}
        defaultValue={props.formData.email} className="col-span-3" />
    </div>
    <div>
      <Label htmlFor="name" className="text-right">
      amount
      </Label>
      <Input type="text" id="amount" name="amount" 
        defaultValue={props.formData.amount} 
        className="col-span-3" />
    </div>
  </div>
  );
}
/* 
email : {props.formData.email}
amount : {props.formData.amount}
*/
