'use client'

import { Suspense } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import PageHeader from '@/components/PageHeader'
import ScrollReveal from '@/components/ScrollReveal'
import { getTranslation } from '@/lib/i18n'
import { useLanguage } from '@/lib/useLanguage'

export default function AboutPage() {
  return (
    <Suspense fallback={null}>
      <AboutPageContent />
    </Suspense>
  )
}

const aboutText = {
  uz: {
    intro: `Agentlik respublikada agrosanoat sohasida bozor mexanizmlarini joriy etish orqali sanoatlashgan yangi intensiv (sermahsul) bog‘ va toqzorlarni (keyingi o‘rinlarda — yangi bog‘lar) barpo qilish loyihalarining texnik-iqtisodiy asoslarini ishlab chiqish, bog‘dorchilik sohasi va issiqxona xo‘jaligida boshqaruv va ularni qo‘llab-quvvatlash tizimini takomillashtirish, shuningdek, resurs-tejamkor texnologiyalarni keng joriy qilish hamda eksportbop mahsulotlar yetishtirishga ko‘maklashish sohasida respublika ijro etuvchi hokimiyati organi hisoblanadi.`,
    tasks: [
      'Intensiv (sermahsul) mevalik, uzumchilik, issiqxona xo‘jaliklarini barqaror rivojlantirishni ta’minlashga hamda eksport salohiyatini oshirishga qaratilgan maqsadli kompleks dasturlarni amalga oshirish;',
      'Zamonaviy resurs-tejamkor texnologiyalarni, jumladan, tomchilatib va yomg‘irlatib sug‘orish tizimlarini qo‘llagan holda intensiv (sermahsul) bog‘ hamda issiqxona xo‘jaliklari maydonlarini kengaytirish choralarini ko‘rish;',
      'Hududlarning tuproq-iqlim sharoitlarini hisobga olgan holda, bog‘dorchilik, uzumchilik va issiqxona xo‘jaligida ilmiy yutuqlar, ilg‘or ilmiy ishlanmalar va innovatsion agrotexnologiyalardan keng foydalanishni tashkil etish;',
      'Qishloq xo‘jaligi mahsulotlarini yetishtirishni sanoatlashtirish, shuningdek, mevali bog‘ va uzumzorlarni tayyor holda barpo etish hamda ularni tashabbuskorlarga sotish choralarini ko‘rish, yangi bog‘lar oralig‘iga qishloq xo‘jaligi ekinlari ekilishini va ulardan samarali foydalanilishini tashkil etish;',
      'Sohada "daladan dasturxongacha" tamoyili asosida qo‘shilgan qiymat zanjirini joriy qilish, qishloq xo‘jaligi mahsulotlari eksportiga ko‘maklashish, meva va uzum mahsulotlarini yetishtiruvchi sub’yektlarni rivojlantirish hamda xalqaro standart talablarini joriy etishga ko‘maklashish;',
      '"In-vitro" laboratoriyalarida kafolatlangan, virusdan xoli bo‘lgan ko‘chatlar yetishtirishni rag‘batlantirish mexanizmini hamda ko‘chatlarni sertifikatlashtirish tizimini yo‘lga qo‘yish;',
      'Meva va uzum navlarining milliy brendlarini yaratish choralarini ko‘rish, meva va uzum mahsulotlarini saqlash va qayta ishlash, milliy brendlarni targ‘ib qilish, xorijiy mutaxassislarni jalb etish, tashqi bozorlarga chiqish, eksport geografiyasi va mahsulot turlarini kengaytirish bo‘yicha marketing tadqiqotlarini o‘tkazish;',
      'Intensiv (serhosil) bog‘dorchilik, uzumchilik va himoyalangan joylarda sabzavotchilik bo‘yicha zamonaviy bilim va tajribalarni tatbiq qilish ishlarini tashkil etish;',
      'Fermer va dehqon xo‘jaliklariga hamda tadbirkorlik sub’yektlariga ko‘maklashish maqsadida Agentlik rasmiy veb-saytida yangi bog‘larni barpo etish maqsadidagi ochiq elektron tanlovlarni, ko‘chatchilikka ixtisoslashgan xo‘jalik yoki "In-vitro" laboratoriyalari hamda tashkil etilgan yangi bog‘larning reestrini, malakali agronomlar va import qilishda bojxona bojlaridan ozod etiladigan mevali ko‘chatlar va payvandaglar, payvandustlari, onalik materiallari ro‘yxatini, balli baholash tizimi bo‘yicha meva va uzum mahsulotlari yetishtiruvchilar reytingini e’lon qilib borish.',
    ],
  },
  ru: {
    intro: `Агентство является органом исполнительной власти республики в сфере агропромышленного комплекса, отвечающим за внедрение рыночных механизмов, разработку технико-экономических обоснований проектов создания новых промышленных интенсивных (высокоурожайных) садов и виноградников (далее — новые сады), совершенствование системы управления и поддержки садоводства и тепличного хозяйства, а также широкое внедрение ресурсосберегающих технологий и содействие производству экспортоориентированной продукции.`,
    tasks: [
      'Реализация целевых комплексных программ по обеспечению устойчивого развития интенсивного (высокоурожайного) плодоводства, виноградарства, тепличного хозяйства и повышению экспортного потенциала;',
      'Расширение площадей интенсивных (высокоурожайных) садов и тепличных хозяйств с применением современных ресурсосберегающих технологий, включая системы капельного и дождевого орошения;',
      'Организация широкого использования научных достижений, передовых научных разработок и инновационных агротехнологий в садоводстве, виноградарстве и тепличном хозяйстве с учётом почвенно-климатических условий регионов;',
      'Индустриализация выращивания сельскохозяйственной продукции, а также создание готовых плодовых садов и виноградников под ключ и их продажа предпринимателям, организация посева сельхозкультур в междурядьях новых садов и их эффективного использования;',
      'Внедрение цепочки добавленной стоимости в отрасли по принципу "от поля до стола", содействие экспорту сельхозпродукции, развитие субъектов, выращивающих плодово-виноградную продукцию, и содействие внедрению требований международных стандартов;',
      'Внедрение механизма стимулирования выращивания гарантированных, свободных от вирусов саженцев в лабораториях "in-vitro" и системы сертификации саженцев;',
      'Создание национальных брендов сортов плодов и винограда, хранение и переработка плодово-виноградной продукции, продвижение национальных брендов, привлечение зарубежных специалистов, проведение маркетинговых исследований по выходу на внешние рынки и расширению географии экспорта и видов продукции;',
      'Организация внедрения современных знаний и опыта по интенсивному (высокоурожайному) садоводству, виноградарству и овощеводству в защищённом грунте;',
      'В целях содействия фермерским и дехканским хозяйствам, а также субъектам предпринимательства — публикация на официальном сайте Агентства открытых электронных конкурсов на создание новых садов, реестра хозяйств, специализирующихся на питомниководстве, или лабораторий "in-vitro" и созданных новых садов, списка квалифицированных агрономов и освобождаемых от таможенных пошлин при импорте плодовых саженцев и подвоев, привоев, маточных материалов, а также рейтинга производителей плодово-виноградной продукции по балльной системе оценки.',
    ],
  },
  en: {
    intro: `The Agency is the republic's executive authority in the agro-industrial sector, responsible for introducing market mechanisms, developing feasibility studies for projects to establish new industrial intensive (high-yield) orchards and vineyards (hereinafter — new orchards), improving the management and support system for horticulture and greenhouse farming, and promoting the wide adoption of resource-saving technologies and export-oriented production.`,
    tasks: [
      'Implementing targeted comprehensive programs to ensure sustainable development of intensive (high-yield) fruit growing, viticulture, and greenhouse farming, and to increase export potential;',
      'Expanding areas of intensive (high-yield) orchards and greenhouse farms using modern resource-saving technologies, including drip and sprinkler irrigation systems;',
      'Organizing the wide use of scientific achievements, advanced research, and innovative agrotechnologies in horticulture, viticulture, and greenhouse farming, taking into account the soil and climate conditions of regions;',
      'Industrializing agricultural production, as well as establishing turnkey fruit orchards and vineyards and selling them to entrepreneurs, organizing the planting of crops between rows of new orchards and their effective use;',
      'Introducing a "farm to table" value chain in the sector, assisting agricultural product exports, developing entities that grow fruit and grape products, and assisting in the introduction of international standard requirements;',
      'Launching a mechanism to encourage the growing of guaranteed, virus-free seedlings in "in-vitro" laboratories and a seedling certification system;',
      'Creating national brands for fruit and grape varieties, storage and processing of fruit and grape products, promoting national brands, attracting foreign specialists, and conducting marketing research on entering foreign markets and expanding export geography and product types;',
      'Organizing the application of modern knowledge and experience in intensive (high-yield) horticulture, viticulture, and protected-ground vegetable growing;',
      'To assist farms and entrepreneurship entities — publishing on the Agency\'s official website open electronic competitions for establishing new orchards, a registry of nurseries or "in-vitro" laboratories and established new orchards, a list of qualified agronomists and fruit seedlings, rootstocks, scions, and mother plant materials exempt from customs duties on import, and a rating of fruit and grape producers based on a points-based evaluation system.',
    ],
  },
}

function AboutPageContent() {
  const { currentLang } = useLanguage()
  const t = getTranslation(currentLang)
  const content = aboutText[currentLang]

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <PageHeader
        currentLang={currentLang}
        title={t.about.title}
        backgroundImage="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&h=600&fit=crop"
      />

      {/* Main Content */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal direction="up" delay={0}>
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 pb-3 border-b-2 border-primary-200">
                  {currentLang === 'uz' && 'Agentlik haqida'}
                  {currentLang === 'ru' && 'Об Агентстве'}
                  {currentLang === 'en' && 'About the Agency'}
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {content.intro}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 pb-3 border-b-2 border-primary-200">
                  {currentLang === 'uz' && 'Agentlikning asosiy vazifalari'}
                  {currentLang === 'ru' && 'Основные задачи Агентства'}
                  {currentLang === 'en' && 'Key Objectives of the Agency'}
                </h2>
                <ul className="space-y-4">
                  {content.tasks.map((task, index) => (
                    <li key={index} className="flex gap-3 text-gray-700 leading-relaxed text-sm sm:text-base">
                      <span className="flex-shrink-0 font-bold text-primary-600">{index + 1}.</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {currentLang === 'uz' && 'Tezkor havolalar'}
                {currentLang === 'ru' && 'Быстрые ссылки'}
                {currentLang === 'en' && 'Quick Links'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="/about/structure"
                  className="block p-6 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors duration-300 group"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600">
                    {t.dropdown.about.structure}
                  </h3>
                  <p className="text-gray-600">{t.about.structure.description}</p>
                </a>
                <a
                  href="/about/management"
                  className="block p-6 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors duration-300 group"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600">
                    {t.dropdown.about.management}
                  </h3>
                  <p className="text-gray-600">{t.about.management.description}</p>
                </a>
                <a
                  href="/about/central"
                  className="block p-6 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors duration-300 group"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600">
                    {t.dropdown.about.central}
                  </h3>
                  <p className="text-gray-600">{t.about.central.description}</p>
                </a>
                <a
                  href="/about/territorial"
                  className="block p-6 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors duration-300 group"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600">
                    {t.dropdown.about.territorial}
                  </h3>
                  <p className="text-gray-600">{t.about.territorial.description}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer currentLang={currentLang} />
      <FloatingButtons />
    </main>
  )
}
