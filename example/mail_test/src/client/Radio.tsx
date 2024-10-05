//import { useState } from 'preact/hooks'
//import { render } from 'preact'
import { BellRing, Check } from "lucide-react"

import Head from '../components/Head'

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
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"


export default function App() {
  return (
  <div className="container mx-auto my-2 px-8 bg-white">
    <Head />
    <h1 className="text-4xl font-bold">Radio</h1>
    <hr className="my-2" />
    <Label>RadioCheck</Label>
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
    <hr className="my-2" />
    <div className="flex items-center mb-2">
      <input id="radio1" type="radio" name="example" 
      className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
      defaultChecked={true}
      />
      <label for="radio1" className="ml-2 text-sm font-medium text-gray-900">Option 1</label>
    </div>
    <div className="flex items-center">
      <input id="radio2" type="radio" name="example" 
      className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
      />
      <label for="radio2" className="ml-2 text-sm font-medium text-gray-900">Option 2</label>
    </div>
  </div>

  )
}
//className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
