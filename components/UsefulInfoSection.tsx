'use client'

import { Language, getTranslation } from '@/lib/i18n'

type UsefulInfoSectionProps = {
  currentLang: Language
}

type InfoItem = {
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

const UsefulInfoSection = ({ currentLang }: UsefulInfoSectionProps) => {
  const t = getTranslation(currentLang)

  const infoItems: InfoItem[] = [
    {
      id: 1,
      title: {
        uz: 'Qishloq xo\'jaligi texnologiyalari',
        ru: 'Сельскохозяйственные технологии',
        en: 'Agricultural Technologies',
      },
      description: {
        uz: 'Zamonaviy agrotexnologiyalar va ularni qo\'llash usullari',
        ru: 'Современные агротехнологии и способы их применения',
        en: 'Modern agrotechnologies and methods of their application',
      },
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      href: '#info/technologies',
    },
    {
      id: 2,
      title: {
        uz: 'Tuproq tahlili',
        ru: 'Анализ почвы',
        en: 'Soil Analysis',
      },
      description: {
        uz: 'Tuproqning holatini aniqlash va unumdorligini oshirish',
        ru: 'Определение состояния почвы и повышение её плодородия',
        en: 'Determining soil condition and improving its fertility',
      },
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      href: '#info/soil',
    },
    {
      id: 3,
      title: {
        uz: 'Zararkunandalar bilan kurashish',
        ru: 'Борьба с вредителями',
        en: 'Pest Control',
      },
      description: {
        uz: 'Zararkunandalar va kasalliklardan himoya qilish usullari',
        ru: 'Методы защиты от вредителей и болезней',
        en: 'Methods of protection against pests and diseases',
      },
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      href: '#info/pests',
    },
    {
      id: 4,
      title: {
        uz: 'Sug\'orish tizimlari',
        ru: 'Системы орошения',
        en: 'Irrigation Systems',
      },
      description: {
        uz: 'Suv resurslarini samarali boshqarish va sug\'orish texnologiyalari',
        ru: 'Эффективное управление водными ресурсами и технологии орошения',
        en: 'Efficient water resource management and irrigation technologies',
      },
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      href: '#info/irrigation',
    },
    {
      id: 5,
      title: {
        uz: 'Organik qishloq xo\'jaligi',
        ru: 'Органическое сельское хозяйство',
        en: 'Organic Agriculture',
      },
      description: {
        uz: 'Ekologik toza mahsulotlar yetishtirish usullari',
        ru: 'Методы производства экологически чистых продуктов',
        en: 'Methods of producing environmentally friendly products',
      },
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      href: '#info/organic',
    },
    {
      id: 6,
      title: {
        uz: 'AGRO.UZ saytiga',
        ru: 'На сайт AGRO.UZ',
        en: 'To AGRO.UZ website',
      },
      description: {
        uz: 'Qishloq xo\'jaligi bo\'yicha qo\'shimcha ma\'lumotlar va resurslar',
        ru: 'Дополнительная информация и ресурсы по сельскому хозяйству',
        en: 'Additional information and resources on agriculture',
      },
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      ),
      href: 'https://agro.uz',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 relative inline-block">
          {t.sections.usefulInfo}
          <span className="absolute bottom-0 left-0 w-24 h-1 bg-primary-600"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {infoItems.map((item, index) => (
            <a
              key={item.id}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-primary-50 rounded-lg p-6 card-hover border-2 border-transparent hover:border-primary-300"
              style={{
                animationDelay: `${index * 0.1}s`,
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

export default UsefulInfoSection

