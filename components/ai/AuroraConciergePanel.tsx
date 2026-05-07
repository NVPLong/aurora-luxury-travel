'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Sparkles, MapPin, Compass } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

interface Message {
  id: string
  role: 'assistant' | 'user'
  content: string
}

const STARTER_PROMPTS = [
  "Suggest a sanctuary for true stillness",
  "Recommend a retreat of unparalleled refinement",
  "Guide me toward a journey of heritage and tradition",
  "Curate a quiet escape within a modest budget",
  "Show me a landscape few have wandered"
]

const MOCK_RESPONSES = [
  "For true stillness, I suggest the remote valley of Sapa during the early spring mists. There are private lodges there that overlook nothing but the clouds and the terraced rhythm of the mountains.",
  "If you seek refinement, the coastal villas of the central region offer a quiet luxury that balances modern architecture with the timeless sound of the tide.",
  "A journey of heritage often leads to the ancient streets of Hoi An at dawn, or the quiet, forgotten temples tucked away in the limestone karsts of Ninh Binh.",
  "Even with a modest budget, one can find deep peace in the homestays of the Mekong — where the luxury is found in the simplicity of the river and the warmth of the hospitality.",
  "A landscape less traveled would be the rugged plateaus of the far north, where the scale of the earth reminds us of our own quiet place within it."
]

interface AuroraConciergePanelProps {
  isOpen: boolean
  onClose: () => void
}

/**
 * AuroraConciergePanel
 * A luxury conversational travel assistant interface.
 * Eschews generic chat bubbles for a more editorial, letter-like conversational flow.
 */
export default function AuroraConciergePanel({ isOpen, onClose }: AuroraConciergePanelProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Welcome to the Aurora Collection. I am your concierge, here to help you find a sanctuary that resonates with your current pace. How may I guide your discovery today?"
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const handleSend = (text: string = inputValue) => {
    if (!text.trim()) return

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: text }
    setMessages(prev => [...prev, userMsg])
    setInputValue('')
    
    // Simulate assistant thinking
    setIsTyping(true)
    setTimeout(() => {
      const randomResponse = MOCK_RESPONSES[Math.floor(Math.random() * MOCK_RESPONSES.length)]
      const assistantMsg: Message = { id: (Date.now() + 1).toString(), role: 'assistant', content: randomResponse }
      setMessages(prev => [...prev, assistantMsg])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[60]"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-[color:#F7F3EC] shadow-[-20px_0_50px_rgba(0,0,0,0.05)] z-[70] flex flex-col border-l border-slate-200/50"
          >
            {/* Header */}
            <div className="p-8 pb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[color:#C8A96A]/10 rounded-full border border-[color:#C8A96A]/20">
                  <Sparkles className="h-4 w-4 text-[color:#C8A96A]" />
                </div>
                <div>
                  <h2 className="text-slate-900 font-serif text-xl tracking-tight leading-none">Aurora Concierge</h2>
                  <p className="text-[color:#5F7F78] text-[0.6rem] uppercase tracking-[0.2em] mt-1.5 font-medium">Personal Discovery</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Conversation Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-8 space-y-10 scroll-smooth"
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                    {msg.role === 'assistant' && (
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[color:#C8A96A] text-[0.6rem] uppercase tracking-[0.2em] font-medium">Assistant</span>
                        <div className="h-px w-8 bg-[color:#C8A96A]/30" />
                      </div>
                    )}
                    <p className={`text-sm leading-[1.8] font-light ${msg.role === 'user' ? 'text-slate-800 italic' : 'text-slate-600'}`}>
                      {msg.content}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1.5 py-2">
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} className="h-1 w-1 bg-[color:#C8A96A] rounded-full" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} className="h-1 w-1 bg-[color:#C8A96A] rounded-full" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }} className="h-1 w-1 bg-[color:#C8A96A] rounded-full" />
                  </div>
                </div>
              )}
            </div>

            {/* Footer / Input */}
            <div className="p-8 pt-4 space-y-6">
              {/* Starter Prompts */}
              {messages.length === 1 && (
                <div className="space-y-2.5">
                  <p className="text-slate-400 text-[0.6rem] uppercase tracking-[0.15em] font-medium mb-3">Suggestions</p>
                  <div className="flex flex-wrap gap-2">
                    {STARTER_PROMPTS.map((prompt) => (
                      <button
                        key={prompt}
                        onClick={() => handleSend(prompt)}
                        className="px-4 py-2 bg-white border border-slate-200/60 rounded-xl text-[0.75rem] text-slate-600 hover:text-slate-900 hover:border-[color:#C8A96A]/40 transition-all duration-300 font-light"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Box */}
              <div className="relative group">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Tell me about the sanctuary you seek..."
                  className="w-full pl-6 pr-14 py-4 bg-white border border-slate-200/60 rounded-2xl text-sm font-light placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[color:#C8A96A]/20 transition-all duration-300"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim()}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-slate-900 text-white rounded-xl disabled:bg-slate-200 transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              
              <div className="text-center">
                <p className="text-[0.6rem] text-slate-400 italic font-light">Aurora Concierge Prototype — Guided Discovery V1</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
