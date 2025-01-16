"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <nav className="flex flex-col gap-4">
          <Link
            href="/services"
            className="block px-2 py-1 text-lg font-medium"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/testimonials"
            className="block px-2 py-1 text-lg font-medium"
            onClick={() => setOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            href="/about"
            className="block px-2 py-1 text-lg font-medium"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/our-work"
            className="block px-2 py-1 text-lg font-medium"
            onClick={() => setOpen(false)}
          >
            Our Work
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

