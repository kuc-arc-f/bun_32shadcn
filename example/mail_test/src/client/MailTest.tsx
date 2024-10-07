import React from 'react'
import {useState} from 'react';

import Head from '../components/Head'
import LoadingBox from '../components/LoadingBox'
import ClientUtil from './lib/ClientUtil';
import HttpCommon from "./lib/HttpCommon";
//
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
//
export default function Page() {
  const [updatetime, setUpdatetime] = React.useState("");
  const [loading, setLoading] = useState(false);
  //
  const procSend = async function(){
    //location.reload();
    try {
      console.log("#procSend");
      setLoading(true);
      const values = ClientUtil.getInputValue("form1"); 
      const mail_body = ClientUtil.getElementValue("mail_body");
      values.mail_body = mail_body;
      //console.log("mail_body=", mail_body);
      console.log(values);
      //return;
      const json = await HttpCommon.post(values, "/api/mail/send");
      console.log(json);
      setLoading(false);
      if(json.ret !== 200){
        alert("Error, send-mail");
      }else{
        alert("OK");
        location.href = '/';
      }
    } catch (e) {
      console.error(e);
    } 
  }
  //{(loading)?(<LoadingBox />):null}
  return (
  <div className="">
    <Head />
    {(loading)?(<LoadingBox />):null}
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-[550px] my-4" id="form1">
        <CardHeader>
          <CardTitle className="text-4xl text-gray-700 font-bold my-2">
          MailTest
          </CardTitle>
          <hr className="my-2" />
          <CardDescription>to_mail , Subject ,mail_body input please 
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">to_mail :</Label>
                <Input id="to_mail" name="to_mail" 
                placeholder="test@example.com" />
                <Label htmlFor="email">Subject :</Label>
                <Input id="subject" name="subject" placeholder="test-Subject" />
                <Label>mail_body:</Label>
                <Textarea id="mail_body" name="mail_body"
                rows= {6}
                placeholder="your message here." />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="">
          <Button onClick={()=>procSend()} 
            className="w-full">Send</Button>
        </CardFooter>
      </Card>
    </div>

  </div>
  )
}
/*
<Label htmlFor="">mail_body :</Label>
*/

