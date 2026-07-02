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
        uz: 'Bahor: bog\' va uzumzorlarni tayyorlash',
        ru: 'Весна: подготовка садов и виноградников',
        en: 'Spring: preparing orchards and vineyards',
      },
      content: {
        uz: 'Meva daraxtlarini gullashdan oldin oqartirish va zararkunandalarga qarshi profilaktik ishlov berish kerak. Uzumzorlarda tuplarni ochish va shpalerga bog\'lash sovuq xavfi o\'tgandan so\'ng amalga oshiriladi.',
        ru: 'До цветения плодовые деревья нужно побелить и провести профилактическую обработку от вредителей. Открытие и подвязка виноградных кустов к шпалере проводится после угрозы заморозков.',
        en: 'Before flowering, fruit trees should be whitewashed and treated preventively against pests. Grapevines are uncovered and tied to trellises once frost risk has passed.',
      },
      category: {
        uz: 'Bahor',
        ru: 'Весна',
        en: 'Spring',
      },
    },
    {
      id: 2,
      title: {
        uz: 'Yoz: sug\'orish va hosilni himoya qilish',
        ru: 'Лето: полив и защита урожая',
        en: 'Summer: irrigation and crop protection',
      },
      content: {
        uz: 'Iyul-avgust issig\'ida bog\'-uzumzorlarni ertalab yoki kechqurun sug\'orish tavsiya etiladi. Uzumda tup ostidagi yashil bargларни olib tashlash (chilangarlash) shingillarga quyosh va havo yetishini ta\'minlaydi.',
        ru: 'В жару июля-августа сады и виноградники поливают утром или вечером. Удаление лишних листьев у основания куста (чеканка) обеспечивает гроздьям доступ солнца и воздуха.',
        en: 'During the July-August heat, orchards and vineyards should be watered in the morning or evening. Removing excess leaves at the base of the vine (leaf pulling) gives clusters sun and airflow.',
      },
      category: {
        uz: 'Yoz',
        ru: 'Лето',
        en: 'Summer',
      },
    },
    {
      id: 3,
      title: {
        uz: 'Kuz: hosilni yig\'ish va qishga tayyorgarlik',
        ru: 'Осень: сбор урожая и подготовка к зиме',
        en: 'Autumn: harvest and winter preparation',
      },
      content: {
        uz: 'Uzum va mevalarni yig\'ib olgandan so\'ng tuplar va daraxtlar ostiga organik o\'g\'it solinadi. Sentabr-oktabrda kesish va shakllantirish ishlari o\'simlikning kelasi yilgi hosildorligiga bevosita ta\'sir qiladi.',
        ru: 'После сбора винограда и плодов под кусты и деревья вносят органические удобрения. Обрезка и формирование кроны в сентябре-октябре напрямую влияют на урожайность следующего года.',
        en: 'After harvesting grapes and fruit, organic fertilizer is applied around vines and trees. Pruning and shaping in September-October directly affects next year\'s yield.',
      },
      category: {
        uz: 'Kuz',
        ru: 'Осень',
        en: 'Autumn',
      },
    },
    {
      id: 4,
      title: {
        uz: 'Qish: sovuqdan himoya',
        ru: 'Зима: защита от морозов',
        en: 'Winter: frost protection',
      },
      content: {
        uz: 'Sovuqqa chidamsiz uzum navlari qishda tuproq yoki agrotolqin bilan yopiladi, ayniqsa harorat -10°C dan pastga tushadigan hududlarda. Yosh meva ko\'chatlarining tanasi kemiruvchilardan himoya qilinadi.',
        ru: 'Морозостойкие сорта винограда на зиму укрывают землёй или агроволокном, особенно в регионах, где температура опускается ниже -10°C. Стволы молодых саженцев защищают от грызунов.',
        en: 'Cold-sensitive grape varieties are covered with soil or agrofiber for winter, especially in regions where temperatures drop below -10°C. Young fruit tree trunks are protected from rodents.',
      },
      category: {
        uz: 'Qish',
        ru: 'Зима',
        en: 'Winter',
      },
    },
  ]

  return (
    <section className="py-16 bg-sage-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="accent-line mb-3" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-800">
            {t.sections.advice}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {adviceItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 card-hover shadow-card border border-sage-300"
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


