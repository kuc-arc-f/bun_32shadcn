
import React, { Suspense , useState, useEffect } from 'react';
//import {Link } from 'react-router-dom';
import Head from '../components/Head'
import LoadingBox from '../components/LoadingBox'
import CrudIndex from './ApiTest/CrudIndex';
// 
import { Button } from "@/components/ui/button"
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

/*
const fetchData = async() => {
    const d = await CrudIndex.getList();
    const data = d.data;
    return data;
};
*/
//
export function DataComponent() {
  try{
    //const data = fetchData();
    return (<div>DataComponent</div>);
  } catch (e) {
    console.error(e);
  }
};  
//
export default function Page(){
  const [loading, setLoading] = useState(true);
  const className = "";
  //
  //
  React.useEffect(() => {
    (async() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    })()
  }, []);
  /*
  if(loading) {
    return(
    <>
      <Head />
      <LoadingBox />
    </>
    );
  }
  */
  //
  return(
  <>
    <Head />
    <div className="container mx-auto my-2 px-8 bg-white">
      <h1 className="text-4xl font-bold">Sunspense1</h1>
      <hr className="my-2" />
      {/*
      <Suspense fallback={<div>Loading data...</div>}>
        <DataComponent />
      </Suspense>
      */}

    </div>
  </>
  );
}
