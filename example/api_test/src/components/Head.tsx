//import { Routes, Route, Link } from 'react-router-dom';
import {Link } from 'react-router-dom';
//
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
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
  <div className="navigate_wrap">
    <NavigationMenu className="">
      <NavigationMenuList>
        {/*  */}
        <NavigationMenuItem className="px-2">
          <a href="/">home</a>
        </NavigationMenuItem>
        <NavigationMenuItem className="px-2">
          <a href="/about">about</a>
        </NavigationMenuItem>
        <NavigationMenuItem className="px-2">
          <a href="/test_menu">TestMenu</a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
  );
}
export default Page;
/*
<a href="/">[ Home ]</a>
<a href="/about" className="ms-2"> [ about ]</a>
<a href="/test_menu" className="ms-2"> [ TestMenu ]</a>
<a href="/login" className="ms-2">&nbsp; [ Login ]</a>
<br />
<a href="/list_test" className="ms-2"> [ ListTest ]</a>
<a href="/list_test2" className="ms-2"> [ ListTest2 ]</a>
<a href="/list_test6" className="ms-2"> [ ListTest6 ]</a>
<a href="/navi_test" className="ms-2"> [ NaviTest ]</a>
<a href="/todo" className="ms-2"> [ Todo ]</a>
<a href="/api_test" className="ms-2"> [ ApiTest ]</a>
<hr />
*/