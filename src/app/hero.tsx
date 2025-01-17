'use client'

import { Button } from "@/components/ui/button"
import { Star, User } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-white to-gray-100">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-4"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-gray-200"
              >
                <User className="h-full w-full p-2 text-gray-600" />
              </motion.div>
            ))}
          </div>
          <span className="text-sm font-medium uppercase tracking-wider text-gray-600">
            Trusted by 50+ Founders
          </span>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
              >
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 max-w-4xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-5xl font-medium tracking-tight text-transparent sm:text-4xl md:text-5xl"
        >
          Crafting delightful user experiences
          <br />
          for SaaS and Tech startups.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 max-w-2xl text-xl text-gray-600"
        >
          Your trusted design partner for crafting user-first, conversion-driven products that delight users and wow investors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col gap-4 sm:flex-row sm:gap-6"
        >
          <Button size="lg" className="bg-[#ff5d47] text-white hover:bg-[#ff5d47]/90 transition-all duration-300 ease-in-out transform hover:scale-105">
            Schedule a 30 min call
          </Button>
          <Button size="lg" variant="outline" className="transition-all duration-300 ease-in-out transform hover:scale-105">
            View Work
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 font-mono text-sm text-gray-600"
        >
          or email at:{' '}
          <a
            href="mailto:optixstudioagency@gmail.com"
            className="text-[#ff5d47] hover:underline transition-all duration-300 ease-in-out"
          >
            optixstudioagency@gmail.com
          </a>
        </motion.p>
      </div>
    </div>
  )
}

