import React from 'react';
import {useState, useEffect} from 'react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { format } from "date-fns"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import ClientUtil from '../lib/ClientUtil';

let titleString = "";
//
function Compo(props: any) {
  const [date, setDate] = React.useState<Date>();
  const [option1, setOption1] = React.useState<bool>(false);
  const [option2, setOption2] = React.useState<bool>(false);
  const [option3, setOption3] = React.useState<bool>(false);
  const [radio1, setRadio1] = React.useState<bool>(true);
  const [radio2, setRadio2] = React.useState<bool>(false);

console.log(props);
console.log("type_create=", props.type_create);
console.log("formData.option_1=", props.formData.option_1);
console.log("public=", props.formData.public);
  let amount = "";
  let amountNumber = "";
  //
  const closeButton = function(){
    const dlg = document.getElementById('confirmDialog');
    location.reload();
    if(dlg) {
      //@ts-ignore
      //dlg.close();
    }
  }
  //
  const getFormData = function(){
    console.log("getFormData")
    const option_1value = ClientUtil.getCheckboxValue("checkbox_1");
    const option_2value = ClientUtil.getCheckboxValue("checkbox_2");
    const option_3value = ClientUtil.getCheckboxValue("checkbox_3");
    //console.log("option_1value=", option_1value);
    const publicValue = ClientUtil.getRadioValue("public");

    const item = {
      option_1: option_1value,
      option_2: option_2value,
      option_3: option_3value,
      public: publicValue,
    }
    return item;
  }
  //
  const okFunc = async function(){
    console.log("#okFunc");
    let publicValue = "1";
    if(radio2){ publicValue = "0" }
    const item = {
      option_1: option1,
      option_2: option2,
      option_3: option3,
      public: publicValue,
    }
    props.cbFunction(item);
  }
  //
  const okEditFunc = async function(){
    const item = getFormData();
console.log("#cbEditFunction");
console.log(item);
    //return;
    props.cbEditFunction(item);
  }
  //
  return (
  <div id="" className="flex items-center justify-center min-h-screen">
    
    <Card className="w-[450px]" id="form1">
      <CardHeader>
        <span className="text-3xl font-bold">{props.message}</span>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
          title
          </Label>
          {(props.type_create === 1)?(
            <Input id="title" name="title" 
            defaultValue={""} className="col-span-3" />  
          ):(
            <Input id="title" name="title"disabled={true}
            defaultValue={props.formData.title} className="col-span-3" />
          )}
        </div>
        {props.errors.title ? (
          <div className="error_message col-span-4 text-center">{props.errors.title}
          </div>
        ): null}
        <div className="grid grid-cols-4 items-center gap-4 mt-2">
          <Label htmlFor="content" className="text-right">
          content
          </Label>
          <Textarea id="content" name="content" className="col-span-3"
          rows={4} defaultValue={props.formData.content} />
        </div>
        {props.errors.content ? (
          <div className="error_message col-span-4 text-center">{props.errors.content}
          </div>
        ): null}
        {/* public */}
        <div class="flex flex-row">
          <div class="w-[90px] p-2 m-1 text-end">
            <Label htmlFor="content" className="text-right">public
            </Label>
          </div>
          <div class="flex-1 pt-2 m-1">
            <input id="radio1" type="radio" name="public" 
            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
            value="1"
            defaultChecked={props.formData.radio1}
            onChange={(event)=>{
              console.log("#radio1.checked=" + event.target.checked);
              setRadio1(event.target.checked);
            }}
            />
            <label for="radio1" className="ms-2 mt-2 text-sm font-medium text-gray-900">Public
            </label>
            <hr />
            <input id="radio2" type="radio" name="public" 
            className="mt-2 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
            value="0"
            defaultChecked={props.formData.radio2}
            onChange={(event)=>{
              setRadio2(event.target.checked);
            }}
            />
            <label for="radio2" className="ml-2 text-sm font-medium text-gray-900">None</label>
          </div>
        </div>
        {/* option */}
        <div className="flex flex-row">
          <div className="w-[90px] p-2 m-1 text-end">
            <Label htmlFor="content" className="text-right">OptionCheck
            </Label>
          </div>
          <div className="flex-1 py-1 m-1">
            <input type="checkbox" id="checkbox_1" name="checkbox_1" 
            className="w-5 h-5 mx-2 " defaultChecked={props.formData.option_1} 
            onChange={(event)=>{
              console.log("#checkbox_1.checked=" + event.target.checked);
              setOption1(event.target.checked);
            }} />
            <Label htmlFor="checkbox_1" className="text-right">CheckBox1
            </Label><hr />
            <input type="checkbox" id="checkbox_2" name="checkbox_2" 
            className="w-5 h-5 mx-2 " defaultChecked={props.formData.option_2} 
            onChange={(event)=>{ setOption2(event.target.checked); }} />
            <Label htmlFor="" className="text-right">CheckBox2
            </Label><hr />
            <input type="checkbox" id="checkbox_3" name="checkbox_3" 
            className="w-5 h-5 mx-2 " defaultChecked={props.formData.option_3} 
            onChange={(event)=>{ setOption3(event.target.checked); }} />
            <Label htmlFor="" className="text-right">CheckBox3
            </Label><hr />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-[90px] p-1 m-1 text-end">
            <Label htmlFor="" className="text-right">Num
            </Label>
          </div>
          <div className="flex-1 py-1 m-1">
            <Label htmlFor="num1" className="text-right">num1
            </Label>
            <Input type="number" id="num1" name="num1" 
              defaultValue={props.formData.num1} className="col-span-3" />  
            <hr className="my-1" />
            <Label htmlFor="num2" className="text-right">num2
            </Label>
            <Input type="number" id="num2" name="num2" 
              defaultValue={props.formData.num2} className="col-span-3" />  
          </div>
        </div>
        {/* pubDate */}
        <div className="flex flex-row">
          <div className="w-[90px] p-1 m-1 text-end">
            <Label htmlFor="" className="text-right">pubDate
            </Label>
          </div>
          <div className="flex-1 py-1 px-2 m-0">
            <input type="date" id="pub_date" name="pub_date" defaultValue={props.formData.pub_date} 
            />
          </div>
        </div>

      </CardContent>
      <CardFooter className="flex justify-between">
        <a href="/form_test2">
          <button
          className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-4 border border-green-500 hover:border-transparent rounded"
          >Cancel</button>
        </a>
        {(props.type_create === 1)?(
          <Button onClick={()=>okFunc()} className="mx-2"
          value="OK">Create</Button>
        ):(
          <>
            <Button onClick={()=>okEditFunc()} className="mx-2"
            value="OK">Save</Button>
          </>
        )}
      </CardFooter>
    </Card>
    {/* card-END */}



  </div>
  );
}
export default Compo;
/*
*/