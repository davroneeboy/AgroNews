'use client'

import { useEffect, useRef, useState } from 'react'
import { Language, getTranslation } from '@/lib/i18n'

type StatisticsSectionProps = {
  currentLang: Language
}

type StatItem = {
  value: number
  suffix: string
  prefix?: string
  label: { uz: string; ru: string; en: string }
}

function useCountUp(end: number, isVisible: boolean, duration = 2000) {
  const [count, setCount] = useState(0)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    if (!isVisible) return
    const startTime = performance.now()
    const step = (t: number) => {
      const p = Math.min((t - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.floor(eased * end))
      if (p < 1) frameRef.current = requestAnimationFrame(step)
      else setCount(end)
    }
    frameRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frameRef.current)
  }, [isVisible, end, duration])

  return count
}

const StatisticsSection = ({ currentLang }: StatisticsSectionProps) => {
  const t = getTranslation(currentLang)
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect() } },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const stats: StatItem[] = [
    { value: 1240, suffix: '', label: { uz: 'Faol loyihalar', ru: 'Активных проектов', en: 'Active projects' } },
    { value: 86500, suffix: '+', label: { uz: 'Fermer xo\'jaliklari', ru: 'Фермерских хозяйств', en: 'Farms' } },
    { value: 4, suffix: '', prefix: '$', label: { uz: 'mlrd investitsiya', ru: 'млрд инвестиций', en: 'bln investments' } },
    { value: 14, suffix: '', label: { uz: 'Qamralgan hududlar', ru: 'Охваченных регионов', en: 'Regions covered' } },
  ]

  return (
    <section ref={ref} className="bg-paper-2 py-12 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => {
          const count = isVisible ? stat.value : 0

          return (
            <div
              key={i}
              className={`py-2 px-4 md:px-7 ${i > 0 ? 'border-l border-line' : ''}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                transition: `all 0.6s ease-out ${i * 100}ms`,
              }}
            >
              <div className="font-display text-3xl md:text-[44px] font-semibold text-green-800">
                {stat.prefix || ''}<CountDisplay value={stat.value} isVisible={isVisible} />{stat.suffix}
              </div>
              <div className="text-[14px] tracking-wider uppercase text-muted mt-1">
                {stat.label[currentLang]}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function CountDisplay({ value, isVisible }: { value: number; isVisible: boolean }) {
  const count = useCountUp(value, isVisible)
  if (value < 10) return <>{isVisible ? value : 0}</>
  return <>{count.toLocaleString('en-US').replace(/,/g, ' ')}</>
}

export default StatisticsSection
