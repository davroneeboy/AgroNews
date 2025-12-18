'use client'

import { Language, getTranslation } from '@/lib/i18n'

type AdviceSectionProps = {
  currentLang: Language
}

type AdviceItem = {
  id: number
  title: {
    uz: string
    ru: string
    en: string
  }
  content: {
    uz: string
    ru: string
    en: string
  }
  category: {
    uz: string
    ru: string
    en: string
  }
}

const AdviceSection = ({ currentLang }: AdviceSectionProps) => {
  const t = getTranslation(currentLang)

  const adviceItems: AdviceItem[] = [
    {
      id: 1,
      title: {
        uz: 'Ekinlarni ekish vaqti',
        ru: 'Время посева культур',
        en: 'Crop Planting Time',
      },
      content: {
        uz: 'Har bir ekin uchun eng qulay ekish vaqti mavjud. Bu vaqtni to\'g\'ri tanlash hosildorlikni sezilarli darajada oshirishi mumkin.',
        ru: 'Для каждой культуры существует оптимальное время посева. Правильный выбор этого времени может значительно повысить урожайность.',
        en: 'Each crop has an optimal planting time. Choosing the right time can significantly increase yields.',
      },
      category: {
        uz: 'Ekish',
        ru: 'Посев',
        en: 'Planting',
      },
    },
    {
      id: 2,
      title: {
        uz: 'Tuproqni tayyorlash',
        ru: 'Подготовка почвы',
        en: 'Soil Preparation',
      },
      content: {
        uz: 'Tuproqni to\'g\'ri tayyorlash - muvaffaqiyatli ekin yetishtirishning asosiy sharti. Tuproq tahlili va unga mos keladigan o\'g\'itlarni tanlash muhim.',
        ru: 'Правильная подготовка почвы - основное условие успешного выращивания культур. Важны анализ почвы и выбор подходящих удобрений.',
        en: 'Proper soil preparation is the key condition for successful crop cultivation. Soil analysis and selection of appropriate fertilizers are important.',
      },
      category: {
        uz: 'Tuproq',
        ru: 'Почва',
        en: 'Soil',
      },
    },
    {
      id: 3,
      title: {
        uz: 'Suv rejimi',
        ru: 'Водный режим',
        en: 'Water Regime',
      },
      content: {
        uz: 'Har bir ekin uchun o\'ziga xos suv rejimi kerak. Sug\'orishni to\'g\'ri rejalashtirish suv resurslarini tejash va hosildorlikni oshirishga yordam beradi.',
        ru: 'Каждая культура требует своего водного режима. Правильное планирование полива помогает экономить водные ресурсы и повышать урожайность.',
        en: 'Each crop requires its own water regime. Proper irrigation planning helps save water resources and increase yields.',
      },
      category: {
        uz: 'Sug\'orish',
        ru: 'Орошение',
        en: 'Irrigation',
      },
    },
    {
      id: 4,
      title: {
        uz: 'Zararkunandalardan himoya',
        ru: 'Защита от вредителей',
        en: 'Pest Protection',
      },
      content: {
        uz: 'Zararkunandalar va kasalliklardan vaqtida himoya qilish ekinlarni saqlab qolish va hosildorlikni oshirish uchun zarur.',
        ru: 'Своевременная защита от вредителей и болезней необходима для сохранения культур и повышения урожайности.',
        en: 'Timely protection from pests and diseases is necessary to preserve crops and increase yields.',
      },
      category: {
        uz: 'Himoya',
        ru: 'Защита',
        en: 'Protection',
      },
    },
  ]

  return (
    <section className="py-16 bg-primary-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 relative inline-block">
          {t.sections.advice}
          <span className="absolute bottom-0 left-0 w-24 h-1 bg-primary-600"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {adviceItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-lg p-6 card-hover shadow-md"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {item.category[currentLang]}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title[currentLang]}</h3>
              <p className="text-gray-600">{item.content[currentLang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdviceSection


