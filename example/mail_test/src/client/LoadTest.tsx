import React from 'react'
import React, { useState, useEffect } from 'react';
//import {Link } from 'react-router-dom';
import Head from '../components/Head'
// 
import { Button } from "@/components/ui/button"
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
//
function LoadingSpinner() {
  return (
    <div className={cn("flex items-center justify-center h-full")}>
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-gray-800"></div>
    </div>
  );
}
// bg-green-100
function LoadingBox() {
  const className = "";
  return (
  <div class="flex flex-row w-[140px]">
    <div class="w-[50px] text-center p-1 m-0">
      <Loader2 className={cn('my-0 ms-2 h-8 w-8 text-primary/60 animate-spin', className)} />
    </div>
    <div class="flex-1 text-center pt-2 pb-1 m-0 text-green-600">
      <span>Loading</span>
    </div>
  </div>
  );
}
//
export default function Page(){
  const [loading, setLoading] = useState(true);
  const className = "";
  return(
  <>
    <Head />
    <div className="container mx-auto my-2 px-8 bg-white">
      <h1 className="text-4xl font-bold">Loader2</h1>
      <hr className="my-2" />
      <span>Loader2-3:</span>
      <hr className="my-2" />
      <div class="flex flex-row w-[140px] bg-green-100">
        <div class="w-[50px] text-center p-1 m-0">
          <Loader2 className={cn('my-0 ms-2 h-8 w-8 text-primary/60 animate-spin', className)} />
        </div>
        <div class="flex-1 text-center pt-2 pb-1 m-0 text-green-600">
          <span>Loading</span>
        </div>
      </div>      
      <hr className="my-2" />
      <LoadingBox />
      <hr className="my-2" />
      <span>Loader2-2:</span>
      <hr className="my-2" />
      <Loader2 className={cn('my-2 h-8 w-8 text-primary/60 animate-spin', className)} />
      <span>Loading</span>      
      <hr className="my-2" />
      <span>Loading-txt</span>
      <Loader2 className={cn('my-4 h-16 w-16 text-primary/60 animate-spin', className)} />      
      <hr className="my-2" />
      <h1 className="text-4xl font-bold">LoadingSpinner</h1>
      <LoadingSpinner />

    </div>
  </>
  );
}
//<Loader2 className={cn('my-28 h-16 w-16 text-primary/60 animate-spin', className)} />