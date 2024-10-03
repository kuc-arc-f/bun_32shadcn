import React from 'react'
import { useState, useEffect } from 'react'

//import {Link } from 'react-router-dom';
import Head from '../components/Head'
// 
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
//
export default function Page(){
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(95), 500)
    return () => clearTimeout(timer)
  }, [])
  //
  return(
  <div className="container mx-auto my-2 px-8 bg-white">
    <Head />
    <h1 className="text-4xl font-bold">Progress</h1>
    <hr className="my-2" />
    <Progress value={progress} className="w-[60%]" />
  </div>
  );
}
