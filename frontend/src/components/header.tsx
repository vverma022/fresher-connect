'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, User } from "lucide-react"
import { FilterSidebar } from "./filtersidebar"
import { ProfileModal } from "./profilemodel"

export function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Fresher Connect</h1>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => setIsProfileOpen(true)}>
            <User className="h-6 w-6" />
            <span className="sr-only">Open profile</span>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open filters</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <h2 className="text-lg font-semibold mb-4">Filters</h2>
              <FilterSidebar />
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </header>
  )
}