"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import logo from "../../assets/logo.png"
import Image from "next/image";
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white hidden md:block text-black">
      <div className="container flex h-16 items-center justify-between px-56">
      <Link href="/" className="flex items-center space-x-2">
          <Image src={logo} alt="Optix Studio Logo" width={40} height={40} className="rounded-full"/>
          <span className="text-xl font-semibold">Optix Studio</span>
        </Link>
        <nav className="hidden gap-6 md:flex text-base">
          <Link
            href="/services"
            className="font-medium transition-colors hover:text-gray-900"
          >
            Services
          </Link>
          <Link
            href="/testimonials"
            className=" font-medium  transition-colors hover:text-gray-900"
          >
            Testimonials
          </Link>
          <Link
            href="/about"
            className=" font-medium  transition-colors hover:text-gray-900"
          >
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/our-work"
            className="hidden  font-medium  transition-colors hover:text-gray-900 md:block"
          >
            Our Work
          </Link>
          <Button
            className="text-sm font-medium   rounded-full bg-[#FF5D3B] text-white hover:bg-[#ff4422]"
          >
            Book a Call
          </Button>
        </div>
      </div>
    </header>
  )
}

