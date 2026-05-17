'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface HeroMotionProps {
  children: ReactNode
}

/**
 * Aurora Hero Motion
 * Specific motion handling for hero background elements (image/overlays).
 * Designed for "expensive silence" — extremely slow and atmospheric.
 */
export function HeroBackground({ children }: HeroMotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1.05 }}
      transition={{
        duration: 2.2,
        ease: [0.16, 1, 0.3, 1], // Luxury easing
      }}
      className="absolute inset-0"
    >
      {children}
    </motion.div>
  )
}

export function HeroOverlay({ children, delay = 0.5 }: HeroMotionProps & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1],
        delay: delay
      }}
      className="absolute inset-0"
    >
      {children}
    </motion.div>
  )
}
