'use client'

import { Language, getTranslation } from '@/lib/i18n'

type MainDirectionsSectionProps = {
  currentLang: Language
}

type DirectionItem = {
  id: number
  icon: JSX.Element
  title: {
    uz: string
    ru: string
    en: string
  }
  href: string
}

const MainDirectionsSection = ({ currentLang }: MainDirectionsSectionProps) => {
  const t = getTranslation(currentLang)

  const directions: DirectionItem[] = [
    {
      id: 1,
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: {
        uz: 'Agromaslahatlar',
        ru: 'Агроконсультации',
        en: 'Agro-consulting',
      },
      href: '#agro-consulting',
    },
    {
      id: 2,
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: {
        uz: 'Statistika ma\'lumotlari',
        ru: 'Статистические данные',
        en: 'Statistical data',
      },
      href: '#statistics',
    },
    {
      id: 3,
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: {
        uz: 'Ilm-fan va ta\'lim',
        ru: 'Наука и образование',
        en: 'Science and education',
      },
      href: '#science',
    },
    {
      id: 4,
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: {
        uz: 'Bo\'sh ish o\'rinlari',
        ru: 'Вакансии',
        en: 'Job vacancies',
      },
      href: '#vacancies',
    },
    {
      id: 5,
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: {
        uz: 'Xalqaro grantlar',
        ru: 'Международные гранты',
        en: 'International grants',
      },
      href: '#grants',
    },
    {
      id: 6,
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: {
        uz: 'Xalqaro kreditlar',
        ru: 'Международные кредиты',
        en: 'International credits',
      },
      href: '#credits',
    },
    {
      id: 7,
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: {
        uz: 'Agroklinika',
        ru: 'Агроклиника',
        en: 'Agro-clinic',
      },
      href: '#agro-clinic',
    },
    {
      id: 8,
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: {
        uz: 'Onlayn ariza topshirish',
        ru: 'Подача заявки онлайн',
        en: 'Online application',
      },
      href: '#application',
    },
  ]

  return (
    <section className="py-16 bg-primary-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 relative inline-block">
          {t.sections.mainDirections}
          <span className="absolute bottom-0 left-0 w-24 h-1 bg-primary-600"></span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {directions.map((direction, index) => (
            <a
              key={direction.id}
              href={direction.href}
              className="bg-white rounded-lg p-6 card-hover text-center group animate-bounce-in hover:animate-glow"
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
              tabIndex={0}
            >
              <div className="text-primary-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {direction.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">
                {direction.title[currentLang]}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MainDirectionsSection

