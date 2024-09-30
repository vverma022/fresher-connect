"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export default function FullPageSignup() {
  const [name, setName] = useState("")
  const [birthday, setBirthday] = useState<Date>()
  const [location, setLocation] = useState("")
  const [educationLevel, setEducationLevel] = useState("")
  const [branch, setBranch] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState<File | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ name, birthday, location, educationLevel, branch, description, image })
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="hidden w-1/2 bg-blue-600 lg:block">
        <div className="flex h-full items-center justify-center">
          <img
            src="/placeholder.svg?height=600&width=600"
            alt="Signup illustration"
            className="max-w-md rounded-lg object-cover shadow-2xl"
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-center p-8 lg:w-1/2">
        <Card className="w-full max-w-lg">
          <CardContent className="p-6">
            <h1 className="mb-6 text-3xl font-bold">Create Your Account</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="birthday">Birthday</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="birthday"
                      variant={"outline"}
                      className={`w-full justify-start text-left font-normal ${
                        !birthday && "text-muted-foreground"
                      }`}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {birthday ? format(birthday, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={birthday}
                      onSelect={setBirthday}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="Enter your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="education-level">Education Level</Label>
                <RadioGroup
                  id="education-level"
                  onValueChange={setEducationLevel}
                  className="flex space-x-4"
                  required
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="BTech" id="BTech" />
                    <Label htmlFor="BTech">BTech</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Masters" id="Masters" />
                    <Label htmlFor="Masters">Masters</Label>
                  </div>
                </RadioGroup>
              </div>
              {educationLevel === "BTech" && (
                <div className="space-y-2">
                  <Label htmlFor="branch">Branch</Label>
                  <Select onValueChange={setBranch} required>
                    <SelectTrigger id="branch">
                      <SelectValue placeholder="Select your branch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="CCE">CCE</SelectItem>
                      <SelectItem value="CSE">CSE</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="description">Short Description</Label>
                <Textarea
                  id="description"
                  placeholder="Tell us about yourself"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="image">Profile Image</Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files?.[0] || null)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}