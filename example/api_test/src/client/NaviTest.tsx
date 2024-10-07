import Head from '../components/Head'
import * as React from "react"

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
export default function App() {
  return (
  <>
    <div className="navigate_wrap bg-gray-100">
      <NavigationMenu className="">
        <NavigationMenuList>
          {/*  */}
          <NavigationMenuItem className="mx-2">
            <a href="/">home</a>
          </NavigationMenuItem>
          <NavigationMenuItem className="mx-2">
            <a href="">about</a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
    {/* menu_2 */}
    <div className="navigate_wrap bg-green-100 py-0.5">
      <NavigationMenu className="">
        <NavigationMenuList>
          {/*  */}
          <NavigationMenuItem className="text-green-600 mx-2">
            <a href="/">home</a>
          </NavigationMenuItem>
          <NavigationMenuItem className="text-green-600 mx-2">
            <a href="/about">about</a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>

    {/* main */}
    <div class="main_wrap">
      <h1 class="text-4xl font-bold">NavigationMenu</h1>
      <hr />
    </div>
  </>
  );
}


