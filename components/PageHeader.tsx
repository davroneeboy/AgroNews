'use client'

import { Language } from '@/lib/i18n'
import Image from 'next/image'

type PageHeaderProps = {
  currentLang: Language
  title: string | {
    uz: string
    ru: string
    en: string
  }
  backgroundImage?: string
}

const PageHeader = ({ currentLang, title, backgroundImage = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&h=600&fit=crop' }: PageHeaderProps) => {
  const titleText = typeof title === 'string' ? title : title[currentLang]
  const titleAlt = typeof title === 'string' ? title : title[currentLang]

  return (
    <div className="relative w-full h-[250px] md:h-[320px] lg:h-[400px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={titleAlt}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/70 to-primary-900/50" />
      </div>

      <div className="relative z-10 h-full flex items-end pb-10 md:pb-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="accent-line-wide mb-4" />
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide">
            {titleText}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default PageHeader
