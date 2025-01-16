import { Button } from "@/components/ui/button"
import { Star, User } from 'lucide-react'
import Image from "next/image"

export default function Hero() {
  return (

    <div className="relative h-screen w-full bg-white">
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
  
      <div className="mb-8 flex items-center gap-2">
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white">
              <User
                width={32}
                height={32}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Trusted by 50+ Founders
        </span>
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>

      {/* Main Heading */}
      <h1 className="mb-6 max-w-4xl text-5xl font-bold tracking-tight">
        Crafting delightful user experiences
        <br />
        for SaaS and Tech startups.
      </h1>

      {/* Subheading */}
      <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
        Your trusted design partner for crafting user-first, conversion-driven products that delight users and wow investors.
      </p>

    {/* schedule call button */}
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
        <Button size="lg" className="bg-[#ff5d47] text-white hover:bg-[#ff5d47]/90">
          Schedule a 30 min call
        </Button>
        <Button size="lg" variant="outline">
          View Work
        </Button>
      </div>

      
      <p className="mt-8 font-mono text-sm text-muted-foreground">
        or email at: optixstudioagency@gmail.com
      </p>
    </div>
  </div>
  )
}

