import type { Metadata } from "next"
import "./globals.css"
import { MobileNav } from "./navcomponent/mobile-nav"
import Navbar from "./navcomponent/navbar"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Optix Studio",
  description: "Your business solutions partner",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <div className="relative flex min-h-screen flex-col">
          <div className="flex items-center gap-4 md:hidden">
            <MobileNav />
            <div className="flex w-full items-center justify-between px-4">
              <span className="text-xl font-semibold">Optix Studio</span>
              <Button
                className="rounded-full bg-[#FF5D3B] text-white hover:bg-[#ff4422]"
                size="sm"
              >
                Book a Call
              </Button>
            </div>
          </div>
          <Navbar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}

