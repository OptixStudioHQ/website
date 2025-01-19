'use client'

import { motion } from 'framer-motion'
import { CheckIcon } from 'lucide-react'


const tiers = [
  {
    name: 'Website',
    price: 99,
    description: 'Perfect for launching your online presence with a professional, high-quality website.',
    features: [
      'Upto 4 pages',
      'Custom & Responsive Design',
      'Full stack development',
      'Blog/Docs Setup',
      '4 Month Free Support',
      'SEO optimization',
      'Hosting & Domain Setup',
      '2 weeks delivery',
      '♾️ Bug Fixes',
    ],
  },
  {
    name: 'Website Revamp',
    price: 119,
    description: 'Transform your outdated website into a modern, user-friendly experience.',
    features: [
      'Figma Design',
      'Upto 12 Requests',
      'One Active Requests',
      'Upto 6 Pages',
      '1 Week Delivery',
      'Unlimited Delivery',
      'Align with your timeline',
      'Branding Design System',
    ],
  },
  {
    name: 'Development Partner',
    price: 499,
    description: 'Your ultimate solution for scalable, high-quality websites tailored to your needs.',
    features: [
      'Multi Page Website',
      'Design + Development',
      'Unlimited revision',
      'AI integration',
      'Top-Notch Scalable Quality',
      'Quick Delivery',
      'SEO for good search response',
      '24-Hour Response Time',
    ],
  },
]

export default function PricingSection() {
  return (
    <div className="bg-white py-4 sm:py-4 flex flex-col justify-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-semibold leading-7 text-indigo-600">Pricing</h2>
          <p className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Choose the right plan for you
          </p>
        </div>
        <motion.div 
          className="isolate mx-auto mt-8 grid max-w-md grid-cols-1 gap-6 sm:mt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {tiers.map((tier, tierIdx) => (
            <motion.div
              key={tier.name}
              className="flex flex-col justify-between rounded-2xl bg-white p-6 ring-1 ring-gray-200 xl:p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: tierIdx * 0.1 }}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">{tier.name}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">{tier.description}</p>
                <p className="mt-4 flex items-baseline gap-x-1">
                  <span className="text-3xl font-bold tracking-tight text-gray-900">${tier.price}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">starting price</span>
                </p>
                <ul role="list" className="mt-6 space-y-3 text-sm leading-5 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <motion.a
                href="#"
                className="mt-6 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get started
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

