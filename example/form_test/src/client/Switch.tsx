import React from 'react'
//import {Link } from 'react-router-dom';
import Head from '../components/Head'
// 
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
//
export default function Page(){
  return(
  <div className="container mx-auto my-2 px-8 bg-white">
    <Head />
    <h1 className="text-4xl font-bold">Switch</h1>
    <hr className="my-2" />
    <Switch id="airplane-mode" defaultChecked={true} />
    <Label htmlFor="airplane-mode">Airplane Mode</Label>
    <hr className="my-2" />
    <Switch id="switch_2" defaultChecked={false} />
    <Label htmlFor="switch_2-mode">switch_2</Label>
    <hr className="my-2" />    
  </div>
  );
}
