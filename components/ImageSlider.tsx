'use client'

import { useState, useEffect } from 'react'
import { Language, getTranslation } from '@/lib/i18n'
import Image from 'next/image'

type ImageSliderProps = {
  currentLang: Language
}

type Slide = {
  id: number
  image: string
  title: {
    uz: string
    ru: string
    en: string
  }
  subtitle: {
    uz: string
    ru: string
    en: string
  }
  description?: {
    uz: string
    ru: string
    en: string
  }
}

const ImageSlider = ({ currentLang }: ImageSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const t = getTranslation(currentLang)

  const slides: Slide[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&h=1080&fit=crop',
      title: {
        uz: 'XUSH KELIBSIZ!',
        ru: 'ДОБРО ПОЖАЛОВАТЬ!',
        en: 'WELCOME!',
      },
      subtitle: {
        uz: 'Qishloq xo\'jaligi vazirligi huzuridagi Agrosanoatni rivojlantirish agentligi',
        ru: 'Агентство по развитию агропромышленности при Министерстве сельского хозяйства',
        en: 'Agency for the Development of Agro-Industry under the Ministry of Agriculture',
      },
      description: {
        uz: 'Ma\'lumot. Statistika. Analitika. Onlayn maslahatlar',
        ru: 'Информация. Статистика. Аналитика. Онлайн консультации',
        en: 'Information. Statistics. Analytics. Online consultations',
      },
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1920&h=1080&fit=crop',
      title: {
        uz: 'Bog\' va tokzorlar',
        ru: 'Сады и виноградники',
        en: 'Gardens and Vineyards',
      },
      subtitle: {
        uz: 'Meva-sabzavot yetishtirish va tokchilik',
        ru: 'Выращивание фруктов и виноградарство',
        en: 'Fruit growing and viticulture',
      },
      description: {
        uz: 'Zamonaviy usullar bilan bog\' va tokzorlarni rivojlantirish',
        ru: 'Развитие садов и виноградников современными методами',
        en: 'Development of gardens and vineyards with modern methods',
      },
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1920&h=1080&fit=crop',
      title: {
        uz: 'Issiqxonalar',
        ru: 'Теплицы',
        en: 'Greenhouses',
      },
      subtitle: {
        uz: 'Yil davomida mahsulot yetishtirish',
        ru: 'Круглогодичное выращивание продукции',
        en: 'Year-round crop production',
      },
      description: {
        uz: 'Zamonaviy issiqxona texnologiyalari va samarali resurslardan foydalanish',
        ru: 'Современные тепличные технологии и эффективное использование ресурсов',
        en: 'Modern greenhouse technologies and efficient resource utilization',
      },
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&h=1080&fit=crop',
      title: {
        uz: 'Agrosanoat',
        ru: 'Агропромышленность',
        en: 'Agro-Industry',
      },
      subtitle: {
        uz: 'Qishloq xo\'jaligi mahsulotlarini qayta ishlash va sanoatlashtirish',
        ru: 'Переработка и индустриализация сельскохозяйственной продукции',
        en: 'Processing and industrialization of agricultural products',
      },
      description: {
        uz: 'Zamonaviy agrosanoat komplekslari va qo\'shilgan qiymatni oshirish',
        ru: 'Современные агропромышленные комплексы и увеличение добавленной стоимости',
        en: 'Modern agro-industrial complexes and value addition',
      },
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, slides.length])

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const handleSlideClick = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[780px] overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-20' : 'opacity-0 z-10'
            }`}
          >
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title[currentLang]}
                fill
                className="object-cover"
                priority={index === 0}
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                  <div
                    className={`transition-all duration-700 delay-200 ${
                      index === currentSlide
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-6'
                    }`}
                  >
                    <div className="accent-line-wide mb-6" />
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight tracking-tight">
                      {slide.title[currentLang]}
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-3 leading-relaxed max-w-2xl">
                      {slide.subtitle[currentLang]}
                    </p>
                    {slide.description && (
                      <p className="text-base md:text-lg text-accent-300 font-medium tracking-wide">
                        {slide.description[currentLang]}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all duration-200"
        aria-label="Предыдущий слайд"
        tabIndex={0}
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all duration-200"
        aria-label="Следующий слайд"
        tabIndex={0}
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-4 sm:left-6 lg:left-8 z-30 flex items-center space-x-2">
        <span className="text-white/60 text-sm font-medium mr-2 tabular-nums">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideClick(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-8 h-1.5 bg-accent-400'
                : 'w-4 h-1.5 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
            tabIndex={0}
          />
        ))}
      </div>
    </section>
  )
}

export default ImageSlider
