'use client'

import { Language, getTranslation } from '@/lib/i18n'

type AnalyticsSectionProps = {
  currentLang: Language
}

type AnalyticsItem = {
  id: number
  title: {
    uz: string
    ru: string
    en: string
  }
  description: {
    uz: string
    ru: string
    en: string
  }
  icon: JSX.Element
  href: string
}

const AnalyticsSection = ({ currentLang }: AnalyticsSectionProps) => {
  const t = getTranslation(currentLang)

  const analyticsItems: AnalyticsItem[] = [
    {
      id: 1,
      title: {
        uz: 'Ekinlar statistikasi',
        ru: 'Статистика культур',
        en: 'Crop Statistics',
      },
      description: {
        uz: 'Turli ekinlar bo\'yicha batafsil statistika va tahlillar',
        ru: 'Подробная статистика и анализ по различным культурам',
        en: 'Detailed statistics and analysis for various crops',
      },
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      href: '#analytics/crops',
    },
    {
      id: 2,
      title: {
        uz: 'Hududiy tahlil',
        ru: 'Региональный анализ',
        en: 'Regional Analysis',
      },
      description: {
        uz: 'Viloyatlar bo\'yicha qishloq xo\'jaligi ko\'rsatkichlari',
        ru: 'Показатели сельского хозяйства по регионам',
        en: 'Agricultural indicators by regions',
      },
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      href: '#analytics/regions',
    },
    {
      id: 3,
      title: {
        uz: 'Iqtisodiy ko\'rsatkichlar',
        ru: 'Экономические показатели',
        en: 'Economic Indicators',
      },
      description: {
        uz: 'Qishloq xo\'jaligi sohasidagi iqtisodiy ko\'rsatkichlar va prognozlar',
        ru: 'Экономические показатели и прогнозы в сельском хозяйстве',
        en: 'Economic indicators and forecasts in agriculture',
      },
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      href: '#analytics/economics',
    },
    {
      id: 4,
      title: {
        uz: 'Prognoz va rejalar',
        ru: 'Прогнозы и планы',
        en: 'Forecasts and Plans',
      },
      description: {
        uz: 'Kelajakdagi rivojlanish prognozlari va strategik rejalar',
        ru: 'Прогнозы развития и стратегические планы на будущее',
        en: 'Development forecasts and strategic plans for the future',
      },
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      href: '#analytics/forecasts',
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 relative inline-block">
          {t.sections.analytics}
          <span className="absolute bottom-0 left-0 w-24 h-1 bg-primary-600"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {analyticsItems.map((item, index) => (
            <a
              key={item.id}
              href={item.href}
              className="bg-white rounded-lg p-6 card-hover animate-slide-in-right hover:scale-105"
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
              tabIndex={0}
            >
              <div className="text-primary-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title[currentLang]}</h3>
              <p className="text-gray-600 text-sm">{item.description[currentLang]}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AnalyticsSection

