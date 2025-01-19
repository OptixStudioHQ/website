'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      title: 'Website',
      description: 'We design sleek, responsive web apps that are easy to use and tailored to your goals.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oQ1wATIylNpB6Jp77tMv19mld9Rl0n.png#web',
    },
    {
      title: 'Website Revamps',
      description: 'We design mobile apps that simplify life, from initial concept to app store launch.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oQ1wATIylNpB6Jp77tMv19mld9Rl0n.png#mobile',
    },
    {
      title: 'UI/UX',
      description: 'We design websites that not only look great but also engage visitors and drive real results.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oQ1wATIylNpB6Jp77tMv19mld9Rl0n.png#website',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="flex flex-col justify-center px-4 py-4 h-screen">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            Complete Creative Solutions
            <ArrowUpRight className="w-8 h-8" />
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From website design to illustrations, we offer everything your startup needs to thrive.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-video mb-6 overflow-hidden rounded-xl">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
              <motion.div
                className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.1 }}
              >
                <ArrowUpRight className="w-6 h-6 text-primary" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

