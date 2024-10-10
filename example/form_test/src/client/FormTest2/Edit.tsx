import React from 'react'
import {useState} from 'react';
import dayjs from 'dayjs';
//import {Link } from 'react-router-dom';
import Head from '../../components/Head'
import LoadingBox from '../../components/LoadingBox'
// 
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from '@/lib/utils'; 
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ClientUtil from '../lib/ClientUtil';
import CrudIndex from './CrudIndex';
import Form from './Form'
//
let data: any[] = [];
let formData: any = {};
let form1typeCreate = 1; // 1: Create
let form1_id = 0;
let form1_radio1 = true;
let form1_radio2 = false;
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
  //
  React.useEffect(() => {
    (async() => {
      //form1_id
      const searchParams = new URLSearchParams(window.location.search);
      const id = searchParams.get('id') || "";
      form1_id = id;
      openEditDialog(form1_id);

    })()
  }, []);
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
    location.href = "/form_test2";
  }  
  //
  return(
  <>
    <Head />
    <div className="container mx-auto my-2 px-8 bg-white list3_main_wrap">
      {(form1typeCreate !== 1)?(
        <Form message={`Edit`} cbFunction={cbFunc} cbEditFunction={cbEditFunc}
        type_create={form1typeCreate} formData={formData} errors={errors} />
      ): null}
      <hr className="my-2" />

    </div>  
  </>
  );
}
