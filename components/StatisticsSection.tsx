'use client'

import { Language, getTranslation } from '@/lib/i18n'

type StatisticsSectionProps = {
  currentLang: Language
}

type StatItem = {
  id: number
  value: string
  label: {
    uz: string
    ru: string
    en: string
  }
  icon: JSX.Element
  trend?: 'up' | 'down' | 'stable'
}

const StatisticsSection = ({ currentLang }: StatisticsSectionProps) => {
  const t = getTranslation(currentLang)

  const statistics: StatItem[] = [
    {
      id: 1,
      value: '2,450',
      label: {
        uz: 'Fermer xo\'jaliklari',
        ru: 'Фермерских хозяйств',
        en: 'Farms',
      },
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      trend: 'up',
    },
    {
      id: 2,
      value: '125,000',
      label: {
        uz: 'Gektar yer maydoni',
        ru: 'Гектаров земли',
        en: 'Hectares of land',
      },
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      trend: 'up',
    },
    {
      id: 3,
      value: '850,000',
      label: {
        uz: 'Tonna mahsulot',
        ru: 'Тонн продукции',
        en: 'Tons of products',
      },
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      trend: 'up',
    },
    {
      id: 4,
      value: '15,000+',
      label: {
        uz: 'Ishchi o\'rinlari',
        ru: 'Рабочих мест',
        en: 'Jobs created',
      },
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      trend: 'up',
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          {t.sections.statistics}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div
              key={stat.id}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center card-hover animate-float"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="text-primary-200 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-primary-100 text-sm">{stat.label[currentLang]}</div>
              {stat.trend === 'up' && (
                <div className="mt-4 flex items-center justify-center text-green-300">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  <span className="text-xs">+12%</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatisticsSection

