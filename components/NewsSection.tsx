'use client'

import { useState, useRef } from 'react'
import { Language, getTranslation } from '@/lib/i18n'

type NewsSectionProps = {
  currentLang: Language
}

type NewsItem = {
  id: number
  title: {
    uz: string
    ru: string
    en: string
  }
  excerpt: {
    uz: string
    ru: string
    en: string
  }
  date: string
  image: string
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: {
      uz: 'Yangi agrotexnologiyalar joriy etildi',
      ru: 'Внедрены новые агротехнологии',
      en: 'New Agrotechnologies Introduced',
    },
    excerpt: {
      uz: 'Agentlik yangi agrotexnologiyalarni joriy etish bo\'yicha muhim qadamlar qildi. Bu texnologiyalar ekinlarning hosildorligini oshirishga yordam beradi.',
      ru: 'Агентство предприняло важные шаги по внедрению новых агротехнологий. Эти технологии помогут повысить урожайность сельскохозяйственных культур.',
      en: 'The Agency has taken important steps to introduce new agrotechnologies. These technologies will help increase crop yields.',
    },
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: {
      uz: 'Qishloq xo\'jaligi loyihalari uchun moliyalashtirish',
      ru: 'Финансирование сельскохозяйственных проектов',
      en: 'Funding for Agricultural Projects',
    },
    excerpt: {
      uz: 'Yangi mavsum uchun qishloq xo\'jaligi loyihalari uchun moliyalashtirish dasturi e\'lon qilindi. Arizalar 2024 yil fevral oyigacha qabul qilinadi.',
      ru: 'Объявлена программа финансирования сельскохозяйственных проектов на новый сезон. Заявки принимаются до февраля 2024 года.',
      en: 'A funding program for agricultural projects for the new season has been announced. Applications are accepted until February 2024.',
    },
    date: '2024-01-10',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: {
      uz: 'Xalqaro hamkorlik shartnomasi imzolandi',
      ru: 'Подписан договор о международном сотрудничестве',
      en: 'International Cooperation Agreement Signed',
    },
    excerpt: {
      uz: 'Agentlik xalqaro hamkorlar bilan yangi shartnoma imzoladi. Bu shartnoma qishloq xo\'jaligi sohasidagi bilim almashishni kengaytiradi.',
      ru: 'Агентство подписало новый договор с международными партнерами. Этот договор расширит обмен знаниями в области сельского хозяйства.',
      en: 'The Agency has signed a new agreement with international partners. This agreement will expand knowledge exchange in agriculture.',
    },
    date: '2024-01-05',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    title: {
      uz: 'Tuproqshunoslar dala tadqiqot ishlarini amalga oshirishmoqda',
      ru: 'Почвоведы проводят полевые исследования',
      en: 'Soil Scientists Conducting Field Research',
    },
    excerpt: {
      uz: 'Mutaxassislar tuproq holatini o\'rganish va uning unumdorligini oshirish bo\'yicha dala tadqiqotlarini olib bormoqda.',
      ru: 'Специалисты проводят полевые исследования по изучению состояния почвы и повышению её плодородия.',
      en: 'Specialists are conducting field research to study soil conditions and improve its fertility.',
    },
    date: '2024-04-30',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    title: {
      uz: 'Bog\' va issiqxonalarda buzoqboshilardan qanday qutulish mumkin?',
      ru: 'Как избавиться от медведок в садах и теплицах?',
      en: 'How to Get Rid of Mole Crickets in Gardens and Greenhouses?',
    },
    excerpt: {
      uz: 'Mutaxassislar bog\' va issiqxonalarda buzoqboshilardan qutulishning samarali usullarini tavsiya qilmoqda.',
      ru: 'Специалисты рекомендуют эффективные методы избавления от медведок в садах и теплицах.',
      en: 'Specialists recommend effective methods for getting rid of mole crickets in gardens and greenhouses.',
    },
    date: '2024-05-23',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
  },
  {
    id: 6,
    title: {
      uz: 'Qashqadaryo: islohotlar natijasi va yangi imkoniyatlar',
      ru: 'Кашкадарья: результаты реформ и новые возможности',
      en: 'Kashkadarya: Results of Reforms and New Opportunities',
    },
    excerpt: {
      uz: 'Qashqadaryo viloyatida amalga oshirilgan islohotlar natijalari va yangi imkoniyatlar muhokama qilindi.',
      ru: 'Обсуждены результаты проведенных реформ в Кашкадарьинской области и новые возможности.',
      en: 'The results of reforms carried out in Kashkadarya region and new opportunities were discussed.',
    },
    date: '2024-04-30',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
  },
]

const NewsSection = ({ currentLang }: NewsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const t = getTranslation(currentLang)

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' })
    }
  }

  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }

    if (currentLang === 'uz') {
      return date.toLocaleDateString('uz-UZ', options)
    } else if (currentLang === 'ru') {
      return date.toLocaleDateString('ru-RU', options)
    } else {
      return date.toLocaleDateString('en-US', options)
    }
  }

  return (
    <section id="news" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold text-gray-900 relative">
            {t.news.title}
            <span className="absolute bottom-0 left-0 w-24 h-1 bg-primary-600"></span>
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 bg-primary-100 hover:bg-primary-200 text-primary-700 rounded-lg flex items-center justify-center transition-colors"
              aria-label="Предыдущие новости"
              tabIndex={0}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 bg-primary-100 hover:bg-primary-200 text-primary-700 rounded-lg flex items-center justify-center transition-colors"
              aria-label="Следующие новости"
              tabIndex={0}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {newsData.map((news, index) => (
            <article
              key={news.id}
              className="bg-white rounded-lg shadow-md overflow-hidden card-hover flex-shrink-0 w-80 md:w-96 animate-slide-in-right hover:animate-glow"
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title[currentLang]}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {t.news.title}
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  {t.news.date}: {formatDate(news.date)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {news.title[currentLang]}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {news.excerpt[currentLang]}
                </p>
                <a
                  href={`#news/${news.id}`}
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  tabIndex={0}
                  aria-label={`${t.news.readMore}: ${news.title[currentLang]}`}
                >
                  {t.news.readMore}
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <div className="flex items-center mt-4 text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>0 комментариев</span>
                  <span className="mx-2">•</span>
                  <span>{Math.floor(Math.random() * 5000 + 1000)} просмотров</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsSection

