import React from 'react'
import {useState} from 'react';
//import {Link } from 'react-router-dom';
import Head from '../components/Head'
// 
import ClientUtil from './lib/ClientUtil';
import CrudIndex from './ListTest5/CrudIndex';
import FormDialog from './ListTest5/FormDialog'
import CompoShow from './ListTest5/CompoShow'

let form1typeCreate = 1; // 1: Create
let form1_id = 0;
let frmEmail = "";
let frmAmount = "";
let data: any[] = [];
let formData: any = {};
//
export default function Page(){
  const [updatetime, setUpdatetime] = React.useState("");
  //
  React.useEffect(() => {
    (async() => {
      data = await CrudIndex.getList();
console.log(data);
      setUpdatetime(new Date().toString());
    })()
  }, []);

  //
  const openFunc = async function(){
    form1typeCreate = 1;
    handleOpen();
  }
  const testDialog = function(){
    try {
      form1typeCreate = 1;
      //formData = {}
      setUpdatetime(new Date().toString());
      const modalDialog = document.getElementById('confirmDialog');
      if(modalDialog) {
        setTimeout(async() => {
          //@ts-ignore
          modalDialog.showModal();
          const email = document.getElementById("email");
          email.value = "";
          const amount = document.getElementById("amount");
          //console.log(amount);
          amount.value = "0";
        }, 500);
      }
      //setTimeout(async() => {
      //}, 500);
    } catch (e) {
      console.error(e);
    }
  }
  const openEditDialog = async function(id: string){
    try {
      form1typeCreate = 0;
      formData = await CrudIndex.getItem(id);
console.log(formData);
      setUpdatetime(new Date().toString());
    } catch (e) {
      console.error(e);
    }
  }
  const cbFunc = async function(){
    console.log("#cbFunc");
    //alert("parent.cbFunc");
    const dlg = document.getElementById('confirmDialog');
    const values = ClientUtil.getInputValue("form1"); 
    console.log(values);
    data = await CrudIndex.create(values); 
    setUpdatetime(new Date().toString());   
    if(dlg) {
      //@ts-ignore
      dlg.close();
    }
  }
  //
  const cbEditFunc = async function(){
    //console.log("#cbFunc");
    const dlg = document.getElementById('confirmDialog');
    const values = ClientUtil.getInputValue("form1"); 
    values.id = form1_id; 
    console.log(values);
    data = await CrudIndex.update(values);
    setUpdatetime(new Date().toString());   
    if(dlg) {
      //@ts-ignore
      dlg.close();
    }
  }  
  //
  return(
  <div className="container mx-auto my-2 px-8 bg-white list3_main_wrap">
    <Head />
    <h1 className="text-3xl font-bold mt-2">ListTest4</h1>
    <hr className="mt-1 mb-2" />
    {/* dialog */}
    <hr className="my-2" />
    {/* table */}
    {data.map((item: any ,index: number) => {
      return (
      <div key={index}>
          <h3 className="text-3xl font-bold">{item.email}</h3>
          <span className="mx-2">
            <button onClick={()=>openEditDialog(item.id)}>[ show ]</button>
          </span>
          <span>ID: {item.id}</span>
          <hr />
      </div>
      )
    })} 
    {/* show_box */}
    {/*
    <div>
      <h1 className="text-2xl font-bold mt-2">Show</h1>
      <div>email : {formData.email}</div>
      <div>amount : {formData.amount}</div>
    </div>
    */}
    {/* show_box2 */}
    <CompoShow formData={formData} />

    <hr className="my-2" />
  </div>
  );
}
