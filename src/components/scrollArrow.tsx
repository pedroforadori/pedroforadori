import { useCallback } from 'react'
import { motion } from 'framer-motion'

const SCROLL_SECTIONS = ['work-section', 'about-section', 'contact-section']
const SCROLL_THRESHOLD = 10

interface ScrollArrowProps {
  isAtBottom: boolean
}

export function ScrollArrow({ isAtBottom }: ScrollArrowProps) {
  const handleClick = useCallback(() => {
    if (!isAtBottom) {
      scrollToNextSection()
    } else {
      scrollToTop()
    }
  }, [isAtBottom])

  return (
    <motion.div
      layoutId="scroll-arrow"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm text-white cursor-pointer shadow-lg"
      onClick={handleClick}
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 1.2 }}
      style={{ x: '-50%' }}
      aria-label={isAtBottom ? 'Voltar ao topo' : 'Rolar para baixo'}
      title={isAtBottom ? 'Voltar ao topo' : 'Rolar para baixo'}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`w-6 h-6 transform transition-transform ${isAtBottom ? 'rotate-180' : ''}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </motion.div>
  )
}

function scrollToNextSection(): void {
  const scrollY = window.scrollY || window.pageYOffset
  const nextSection = SCROLL_SECTIONS.find((id) => {
    const el = document.getElementById(id)
    if (!el) return false
    return el.getBoundingClientRect().top + window.scrollY > scrollY + SCROLL_THRESHOLD
  })

  if (nextSection) {
    document.getElementById(nextSection)?.scrollIntoView({ behavior: 'smooth' })
  } else {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }
}

function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}