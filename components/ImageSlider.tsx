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
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Слайды */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 scale-100 z-20'
                : 'opacity-0 scale-105 z-10'
            }`}
            style={{
              transform: `scale(${index === currentSlide ? 1 : 1.05})`,
            }}
          >
            {/* Фоновое изображение */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title[currentLang]}
                fill
                className="object-cover"
                priority={index === 0}
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
            </div>

            {/* Контент слайда */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="container mx-auto px-4 text-center">
                <div
                  className={`transition-all duration-1000 delay-300 ${
                    index === currentSlide
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl animate-pulse-slow">
                    {slide.title[currentLang]}
                  </h1>
                  <p className="text-xl md:text-2xl lg:text-3xl text-white/90 drop-shadow-lg mb-4 max-w-3xl mx-auto">
                    {slide.subtitle[currentLang]}
                  </p>
                  {slide.description && (
                    <p className="text-lg md:text-xl text-white/80 drop-shadow-md max-w-2xl mx-auto">
                      {slide.description[currentLang]}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Навигационные стрелки */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Предыдущий слайд"
        tabIndex={0}
      >
        <svg
          className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-primary-200 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Следующий слайд"
        tabIndex={0}
      >
        <svg
          className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-primary-200 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Индикаторы слайдов */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideClick(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-12 h-3 bg-white animate-glow'
                : 'w-3 h-3 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
            tabIndex={0}
          />
        ))}
      </div>

      {/* Волновой эффект внизу */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
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

export default ImageSlider

