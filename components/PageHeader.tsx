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

const PageHeader = ({ currentLang, title, backgroundImage = 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&h=600&fit=crop' }: PageHeaderProps) => {
  // Получаем текст заголовка в зависимости от типа
  const titleText = typeof title === 'string' ? title : title[currentLang]
  const titleAlt = typeof title === 'string' ? title : title[currentLang]

  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
      {/* Фоновое изображение */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={titleAlt}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Контент */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wide drop-shadow-2xl px-4">
            {titleText}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default PageHeader

