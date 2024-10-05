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
    <h1 className="text-4xl font-bold">Select</h1>
    <hr className="my-2" />
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="framework">SelectItems</Label>
      <Select>
        <SelectTrigger id="framework">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectItem value="item_1">item_1</SelectItem>
          <SelectItem value="item_2">item_2</SelectItem>
          <SelectItem value="item_3">item_3</SelectItem>
        </SelectContent>
      </Select>
    </div>
    
  </div>
  )
}
//render(<App />, document.getElementById('app')!);