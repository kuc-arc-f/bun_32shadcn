//import { Routes, Route, Link } from 'react-router-dom';
import {Link } from 'react-router-dom';
//
import ClientUtil from '../client/lib/ClientUtil';
import HttpCommon from "../client/lib/HttpCommon";
//
function Page() {
    //
  const procLogout = async function(){
    try {
      console.log("#procLogout");
      const json = await HttpCommon.post({}, "/api/user/logout");
      console.log(json);
      if(json.ret !== 200){
        alert("Error, Logout");
      }else{
        alert("OK, Logout");
        location.href = '/';
      }
    } catch (e) {
      console.error(e);
    } 
  }
  //
  return (
  <div>
    <a href="/">[ Home ]</a>
    <a href="/about" className="ms-2">&nbsp; [ about ]</a>
    <a href="/mail_test" className="ms-2">&nbsp; [ MailTest ]</a>
    <hr />
  </div>
  );
}
export default Page;
/*
<a href="/api_test" className="ms-2"> [ ApiTest ]</a>
*/