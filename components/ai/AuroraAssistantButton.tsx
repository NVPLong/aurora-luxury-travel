'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, X } from 'lucide-react'
import { useState } from 'react'
import AuroraConciergePanel from './AuroraConciergePanel'

/**
 * AuroraAssistantButton
 * A premium, floating entry point for the future AI concierge.
 * Designed with "quiet luxury" — minimal, elegant, and atmospheric.
 */
export default function AuroraAssistantButton() {
  const [isHovered, setIsHovered] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 sm:bottom-10 sm:right-10">
      {/* Cinematic AI Concierge Panel */}
      <AuroraConciergePanel 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />

      <motion.button
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => setIsOpen(!isOpen)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`group relative flex items-center justify-center p-4 rounded-full shadow-[0_12px_40px_rgba(200,169,106,0.3)] transition-all duration-500
                   ${isOpen ? 'bg-slate-900 scale-90' : 'bg-white/80 backdrop-blur-xl border border-[color:#C8A96A]/20'}`}
      >
        {/* Breathing background effect */}
        {!isOpen && (
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[color:#C8A96A] rounded-full blur-xl"
          />
        )}

        <div className="relative flex items-center gap-2">
          {isOpen ? (
            <X className="h-5 w-5 text-white" />
          ) : (
            <>
              <Sparkles className="h-5 w-5 text-[color:#C8A96A] transition-transform duration-500 group-hover:scale-110" />
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    initial={{ opacity: 0, width: 0, x: -10 }}
                    animate={{ opacity: 1, width: 'auto', x: 0 }}
                    exit={{ opacity: 0, width: 0, x: -10 }}
                    className="overflow-hidden whitespace-nowrap text-[0.7rem] uppercase tracking-[0.25em] font-medium text-slate-800"
                  >
                    Ask Aurora
                  </motion.span>
                )}
              </AnimatePresence>
            </>
          )}
        </div>
      </motion.button>
    </div>
  )
}
