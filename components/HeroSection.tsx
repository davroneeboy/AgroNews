'use client'

import { useEffect, useState } from 'react'
import { Language, getTranslation } from '@/lib/i18n'
import Image from 'next/image'

type HeroSectionProps = {
  currentLang: Language
}

const HeroSection = ({ currentLang }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const t = getTranslation(currentLang)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const heroContent = {
    eyebrow: {
      uz: "Davlat agentligi · 2017-yildan",
      ru: "Государственное агентство · с 2017 года",
      en: "Government Agency · since 2017",
    },
    title: {
      uz: "Agrosanoatni barqaror rivojlantirish — milliy ustuvorlik",
      ru: "Устойчивое развитие агропромышленности — национальный приоритет",
      en: "Sustainable development of agro-industry — national priority",
    },
    subtitle: {
      uz: "Agentlik qishloq xo'jaligi va oziq-ovqat sanoatini modernizatsiya qilish, eksport salohiyatini oshirish hamda fermer va tadbirkorlarni qo'llab-quvvatlash bo'yicha davlat siyosatini amalga oshiradi.",
      ru: "Агентство реализует государственную политику по модернизации сельского хозяйства и пищевой промышленности, увеличению экспортного потенциала и поддержке фермеров и предпринимателей.",
      en: "The Agency implements state policy on modernization of agriculture and food industry, increasing export potential and supporting farmers and entrepreneurs.",
    },
    cta1: {
      uz: "Faoliyat bilan tanishish",
      ru: "Узнать о деятельности",
      en: "Explore activities",
    },
    cta2: {
      uz: "Investitsiya imkoniyatlari",
      ru: "Инвестиционные возможности",
      en: "Investment opportunities",
    },
    badge: {
      uz: "Rasmiy axborot · agro.gov.uz",
      ru: "Официальная информация · agro.gov.uz",
      en: "Official information · agro.gov.uz",
    },
    cardLabel: {
      uz: "Hosildorlik 2026",
      ru: "Урожайность 2026",
      en: "Harvest 2026",
    },
    cardTitle: {
      uz: "Zamonaviy dehqonchilik",
      ru: "Современное земледелие",
      en: "Modern agriculture",
    },
  }

  return (
    <section className="bg-paper px-4 sm:px-8 lg:px-16 pt-16 pb-10 md:pt-20 md:pb-14">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          {/* Text */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s ease-out',
            }}
          >
            <div className="eyebrow mb-5">{heroContent.eyebrow[currentLang]}</div>
            <h1 className="font-display text-4xl md:text-[46px] lg:text-[52px] font-semibold text-green-800 leading-[1.12] mb-6 tracking-tight">
              {heroContent.title[currentLang]}
            </h1>
            <p className="text-lg md:text-[19px] leading-relaxed text-muted mb-8 max-w-[560px]">
              {heroContent.subtitle[currentLang]}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a href="/about" className="bg-green-800 text-white border-none rounded-[9px] px-6 py-3.5 font-semibold text-base hover:bg-green-700 transition-colors">
                {heroContent.cta1[currentLang]}
              </a>
              <a href="#investments" className="bg-transparent text-green-800 border-[1.5px] border-line rounded-[9px] px-6 py-3.5 font-semibold text-base hover:border-green-600 hover:text-green-700 transition-colors">
                {heroContent.cta2[currentLang]}
              </a>
            </div>
            <div className="pt-6 border-t border-line flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-paper-2 flex items-center justify-center text-gold text-sm">★</div>
              <span className="text-sm text-muted">
                {heroContent.badge[currentLang]}
              </span>
            </div>
          </div>

          {/* Visual card */}
          <div
            className="relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'all 0.8s ease-out 0.15s',
            }}
          >
            <div className="aspect-[4/3.4] rounded-2xl bg-gradient-to-br from-green-700 to-green-900 overflow-hidden relative flex items-end p-6">
              <Image
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1000&h=800&fit=crop"
                alt="Agriculture"
                fill
                className="object-cover opacity-40"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-900/30 to-transparent" />
              <div className="relative text-white z-10">
                <div className="font-mono text-sm font-semibold text-lime mb-1.5">{heroContent.cardLabel[currentLang]}</div>
                <div className="font-display text-2xl md:text-3xl font-semibold">{heroContent.cardTitle[currentLang]}</div>
              </div>
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -bottom-6 -left-6 bg-white border border-line rounded-xl px-5 py-4 shadow-card-hover"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'all 0.8s ease-out 0.4s',
              }}
            >
              <div className="font-semibold text-[13px] text-muted">
                {currentLang === 'uz' ? "Eksport o'sishi" : currentLang === 'ru' ? 'Рост экспорта' : 'Export growth'}
              </div>
              <div className="font-bold text-3xl text-green-700 font-mono">+23%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
