import React from 'react'
//import {Link } from 'react-router-dom';
import Head from '../components/Head'
// 
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
//
export default function Page(){
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  //
  return(
  <div className="container mx-auto my-2 px-8 bg-white">
    <Head />
    <h1 className="text-4xl font-bold">Calendar</h1>
    <hr className="my-2" />
    <div className="">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className=""
      />
    </div>
  </div>
  );
}
