//import { useState } from 'preact/hooks'
//import { render } from 'preact'
import { BellRing, Check } from "lucide-react"

import Head from '../components/Head'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"


export default function App() {
  return (
  <div className="container mx-auto my-2 px-8 bg-white">
    <Head />
    <h1 className="text-4xl font-bold">CheckBox</h1>
    <hr className="my-2" />
    <Label>CheckBox</Label><br />
    <Checkbox id="checkbox_1" />
    <span class="ms-2">checkbox_1</span><br />
    <Checkbox id="checkbox_2" />
    <span class="ms-2">checkbox_2</span><br />
  </div>
  )
}
//render(<App />, document.getElementById('app')!);
