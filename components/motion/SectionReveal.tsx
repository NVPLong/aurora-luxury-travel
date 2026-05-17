'use client'

import { motion } from 'framer-motion'
import { ReactNode, Children } from 'react'

interface SectionRevealProps {
  children: ReactNode
  className?: string
  /** Delay before the animation starts */
  delay?: number
  /** Amount of vertical displacement (default: 20) */
  y?: number
  /** Whether to animate children as a group or just the wrapper */
  staggerChildren?: boolean
  /** Whether to apply a cinematic blur-in effect */
  blur?: boolean
}

/**
 * Aurora Section Reveal
 * A subtle, cinematic entry animation system for editorial sections.
 * Designed for "expensive silence" — slow, calm, and understated.
 */
export default function SectionReveal({
  children,
  className = '',
  delay = 0,
  y = 15,
  staggerChildren = false,
  blur = false
}: SectionRevealProps) {
  // Luxury easing: Soft start, smooth deceleration
  // Cast as const to ensure Framer Motion recognizes it as a BezierDefinition (tuple of 4 numbers)
  const luxuryEasing = [0.16, 1, 0.3, 1] as const

  const containerVariants = {
    hidden: { 
      opacity: 0, 
      y: y,
      filter: blur ? 'blur(4px)' : 'none'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: blur ? 'blur(0px)' : 'none',
      transition: {
        duration: blur ? 1.2 : 0.9,
        ease: luxuryEasing,
        delay: delay,
        staggerChildren: staggerChildren ? 0.12 : 0,
      }
    }
  }

  const childVariants = {
    hidden: { 
      opacity: 0, 
      y: 10,
      filter: blur ? 'blur(4px)' : 'none'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: blur ? 'blur(0px)' : 'none',
      transition: {
        duration: blur ? 1.0 : 0.8,
        ease: luxuryEasing
      }
    }
  }

  // If we are staggering children, we wrap each child in a motion.div
  // Otherwise, we just animate the container as a single unit.
  if (staggerChildren) {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className={className}
      >
        {Children.toArray(children).map((child, index) => (
          <motion.div key={index} variants={childVariants}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
