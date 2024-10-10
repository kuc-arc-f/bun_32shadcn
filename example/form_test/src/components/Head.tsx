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
        <NavigationMenuItem className="px-2">
          <a href="/form_test" className="">FormTest</a>
        </NavigationMenuItem>
        <NavigationMenuItem className="px-2">
          <a href="/form_test2" className="">FormTest2</a>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  </div>
  );
}
export default Page;
/*
*/