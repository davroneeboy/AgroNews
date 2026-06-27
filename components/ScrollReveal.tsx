'use client'

import { ReactNode } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

type ScrollRevealProps = {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  className?: string
  once?: boolean
}

const ScrollReveal = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15, rootMargin: '0px 0px -60px 0px' })

  const transforms: Record<string, string> = {
    up: 'translate3d(0, 32px, 0)',
    down: 'translate3d(0, -32px, 0)',
    left: 'translate3d(-32px, 0, 0)',
    right: 'translate3d(32px, 0, 0)',
    fade: 'translate3d(0, 0, 0)',
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0)' : transforms[direction],
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: isVisible ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}

export default ScrollReveal
