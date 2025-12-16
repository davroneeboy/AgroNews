'use client'

import { useEffect, useState } from 'react'
import { Language, getTranslation } from '@/lib/i18n'

type HeroSectionProps = {
  currentLang: Language
}

const HeroSection = ({ currentLang }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const t = getTranslation(currentLang)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Фоновое изображение с эффектом размытия */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&h=1080&fit=crop)',
            filter: 'blur(3px) brightness(0.7)',
            transform: 'scale(1.1)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/40 via-primary-800/30 to-primary-900/60" />
      </div>

      {/* Контент */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl animate-pulse-slow hover:animate-glow transition-all duration-300">
              {t.hero.welcome}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 drop-shadow-lg max-w-3xl mx-auto">
              {t.hero.subtitle}
            </p>
          </div>

          {/* Декоративные элементы */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-white/30 animate-bounce"
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '1.5s',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Волновой эффект внизу */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          className="w-full h-20 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z"
            fill="currentColor"
            className="animate-wave"
          />
        </svg>
      </div>
    </section>
  )
}

export default HeroSection

