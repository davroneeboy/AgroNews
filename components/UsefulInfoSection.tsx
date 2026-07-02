'use client'

import { useState } from 'react'
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
  content?: {
    uz: string
    ru: string
    en: string
  }
  icon: JSX.Element
  href: string
}

const UsefulInfoSection = ({ currentLang }: UsefulInfoSectionProps) => {
  const t = getTranslation(currentLang)
  const [selectedInfo, setSelectedInfo] = useState<InfoItem | null>(null)

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
      content: {
        uz: 'Tomchilatib sug\'orish, agrovoltaika va issiqxona texnologiyalari suv va energiya sarfini kamaytiradi. Dronlar yordamida ekin maydonlarini monitoring qilish zararkunandalarni erta aniqlash imkonini beradi. Intensiv bog\'dorchilikda tayanch ustunlar va tomchilatib sug\'orish tizimi hosildorlikni an\'anaviy usulga nisbatan 2-3 baravar oshiradi.',
        ru: 'Капельное орошение, агровольтаика и тепличные технологии снижают расход воды и энергии. Мониторинг полей дронами позволяет раньше выявлять вредителей. В интенсивном садоводстве шпалерная система и капельный полив повышают урожайность в 2-3 раза по сравнению с традиционным методом.',
        en: 'Drip irrigation, agrivoltaics and greenhouse technologies reduce water and energy consumption. Drone monitoring of fields enables earlier pest detection. In intensive orcharding, trellis systems and drip irrigation increase yields 2-3x compared to traditional methods.',
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
      content: {
        uz: 'Tuproq tahlili ekishdan oldin har 2-3 yilda o\'tkazilishi tavsiya etiladi — pH darajasi, tuz miqdori va organik moddalar aniqlanadi. Sho\'rlangan yerlarda gips va organik o\'g\'itlar qo\'llash tuproq strukturasini tiklashga yordam beradi. Almashlab ekish (paxta-bug\'doy-beda) tuproq unumdorligini tabiiy yo\'l bilan saqlaydi.',
        ru: 'Анализ почвы рекомендуется проводить каждые 2-3 года перед посевом — определяются уровень pH, засоленность и содержание органики. На засолённых землях гипсование и внесение органики восстанавливают структуру почвы. Севооборот (хлопок-пшеница-люцерна) естественным путём поддерживает плодородие.',
        en: 'Soil analysis is recommended every 2-3 years before planting — measuring pH level, salinity and organic content. On saline land, gypsum application and organic matter help restore soil structure. Crop rotation (cotton-wheat-alfalfa) naturally maintains fertility.',
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
      content: {
        uz: 'Integratsiyalashgan himoya (IPM) usuli kimyoviy preparatlarni faqat zarur bo\'lganda, foydali hasharotlarni saqlab qolgan holda qo\'llashni nazarda tutadi. Feromon lovushkalar zararkunandalar sonini kimyosiz nazorat qilishga yordam beradi. Paxtada g\'o\'za tunlami va oq oqqurtga qarshi profilaktik ishlov gullashdan oldin amalga oshiriladi.',
        ru: 'Метод интегрированной защиты (IPM) предполагает применение химикатов только при необходимости, сохраняя полезных насекомых. Феромонные ловушки помогают контролировать численность вредителей без химии. На хлопчатнике профилактическая обработка против хлопковой совки и белокрылки проводится до цветения.',
        en: 'Integrated pest management (IPM) uses chemicals only when necessary, preserving beneficial insects. Pheromone traps help control pest populations without chemicals. On cotton, preventive treatment against bollworm and whitefly is done before flowering.',
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
      content: {
        uz: 'Tomchilatib sug\'orish an\'anaviy egatga sug\'orishga nisbatan suvni 40-50% gacha tejaydi va bir vaqtda o\'g\'it berish imkonini beradi (fertigatsiya). Lazer bilan tekislangan yerlarda suv notekis taqsimlanishi kamayadi. Sug\'orish jadvali tuproq namligi sensorlariga asoslanishi eng samarali usul hisoblanadi.',
        ru: 'Капельное орошение экономит до 40-50% воды по сравнению с бороздковым поливом и позволяет одновременно вносить удобрения (фертигация). Лазерное выравнивание полей снижает неравномерность распределения воды. Наиболее эффективный подход — график полива на основе датчиков влажности почвы.',
        en: 'Drip irrigation saves up to 40-50% water compared to furrow irrigation and allows simultaneous fertilizer application (fertigation). Laser land leveling reduces uneven water distribution. The most efficient approach is a watering schedule based on soil moisture sensors.',
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
      content: {
        uz: 'Organik sertifikatlash sintetik pestitsid va mineral o\'g\'itlardan voz kechishni, tuproqni tabiiy usullar (kompost, yashil o\'g\'it) bilan boyitishni talab qiladi. O\'tish davri odatda 2-3 yil davom etadi. Organik mahsulot Yevropa va Yaqin Sharq bozorlarida an\'anaviyga nisbatan yuqori narxda sotiladi, bu eksport salohiyatini oshiradi.',
        ru: 'Органическая сертификация требует отказа от синтетических пестицидов и минеральных удобрений, обогащения почвы естественными методами (компост, сидераты). Переходный период обычно длится 2-3 года. Органическая продукция продаётся на рынках Европы и Ближнего Востока по более высокой цене, что повышает экспортный потенциал.',
        en: 'Organic certification requires eliminating synthetic pesticides and mineral fertilizers, enriching soil through natural methods (compost, cover crops). The transition period usually takes 2-3 years. Organic products sell at higher prices in European and Middle Eastern markets, boosting export potential.',
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
        uz: 'Rasmiy saytga',
        ru: 'На официальный сайт',
        en: 'To official website',
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
      href: 'https://gov.uz/oz/agrosanoat',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="accent-line mb-3" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-800">
            {t.sections.usefulInfo}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {infoItems.map((item, index) => {
            if (item.content) {
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedInfo(item)}
                  className="bg-sage-100 rounded-xl p-6 card-hover border border-sage-300 hover:border-primary-300 text-left"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                  tabIndex={0}
                >
                  <div className="text-primary-600 mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title[currentLang]}</h3>
                  <p className="text-gray-600 text-sm">{item.description[currentLang]}</p>
                </button>
              )
            }
            return (
              <a
                key={item.id}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-sage-100 rounded-xl p-6 card-hover border border-sage-300 hover:border-primary-300"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
                tabIndex={0}
              >
                <div className="text-primary-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title[currentLang]}</h3>
                <p className="text-gray-600 text-sm">{item.description[currentLang]}</p>
              </a>
            )
          })}
        </div>
      </div>

      {selectedInfo && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedInfo(null)}
        >
          <div
            className="bg-white rounded-xl max-w-lg w-full p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedInfo(null)}
              className="absolute top-4 right-4 w-9 h-9 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full flex items-center justify-center transition-colors"
              aria-label="Close"
              tabIndex={0}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-primary-600 mb-4">{selectedInfo.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedInfo.title[currentLang]}</h3>
            <p className="text-gray-700 leading-relaxed">{selectedInfo.content?.[currentLang]}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default UsefulInfoSection


