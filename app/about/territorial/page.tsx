'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import PageHeader from '@/components/PageHeader'
import { Language, getTranslation } from '@/lib/i18n'
import Link from 'next/link'

export default function TerritorialPage() {
  const [currentLang, setCurrentLang] = useState<Language>('ru')
  const t = getTranslation(currentLang)

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang)
  }

  const regionsData = {
    uz: [
      { name: 'Qoraqalpog\'iston Respublikasi bo\'limi', city: 'Nukus', phone: '+998 61 123 45 67' },
      { name: 'Andijon viloyati bo\'limi', city: 'Andijon', phone: '+998 74 123 45 67' },
      { name: 'Buxoro viloyati bo\'limi', city: 'Buxoro', phone: '+998 65 123 45 67' },
      { name: 'Jizzax viloyati bo\'limi', city: 'Jizzax', phone: '+998 72 123 45 67' },
      { name: 'Qashqadaryo viloyati bo\'limi', city: 'Qarshi', phone: '+998 75 123 45 67' },
      { name: 'Navoiy viloyati bo\'limi', city: 'Navoiy', phone: '+998 79 123 45 67' },
      { name: 'Namangan viloyati bo\'limi', city: 'Namangan', phone: '+998 69 123 45 67' },
      { name: 'Samarqand viloyati bo\'limi', city: 'Samarqand', phone: '+998 66 123 45 67' },
      { name: 'Sirdaryo viloyati bo\'limi', city: 'Guliston', phone: '+998 67 123 45 67' },
      { name: 'Surxondaryo viloyati bo\'limi', city: 'Termiz', phone: '+998 76 123 45 67' },
      { name: 'Toshkent viloyati bo\'limi', city: 'Toshkent', phone: '+998 71 123 45 67' },
      { name: 'Farg\'ona viloyati bo\'limi', city: 'Farg\'ona', phone: '+998 73 123 45 67' },
      { name: 'Xorazm viloyati bo\'limi', city: 'Urganch', phone: '+998 62 123 45 67' },
    ],
    ru: [
      { name: 'Республика Каракалпакстан', city: 'Нукус', phone: '+998 61 123 45 67' },
      { name: 'Андижанская область', city: 'Андижан', phone: '+998 74 123 45 67' },
      { name: 'Бухарская область', city: 'Бухара', phone: '+998 65 123 45 67' },
      { name: 'Джизакская область', city: 'Джизак', phone: '+998 72 123 45 67' },
      { name: 'Кашкадарьинская область', city: 'Карши', phone: '+998 75 123 45 67' },
      { name: 'Навоийская область', city: 'Навои', phone: '+998 79 123 45 67' },
      { name: 'Наманганская область', city: 'Наманган', phone: '+998 69 123 45 67' },
      { name: 'Самаркандская область', city: 'Самарканд', phone: '+998 66 123 45 67' },
      { name: 'Сырдарьинская область', city: 'Гулистан', phone: '+998 67 123 45 67' },
      { name: 'Сурхандарьинская область', city: 'Термез', phone: '+998 76 123 45 67' },
      { name: 'Ташкентская область', city: 'Ташкент', phone: '+998 71 123 45 67' },
      { name: 'Ферганская область', city: 'Фергана', phone: '+998 73 123 45 67' },
      { name: 'Хорезмская область', city: 'Ургенч', phone: '+998 62 123 45 67' },
    ],
    en: [
      { name: 'Republic of Karakalpakstan', city: 'Nukus', phone: '+998 61 123 45 67' },
      { name: 'Andijan Region', city: 'Andijan', phone: '+998 74 123 45 67' },
      { name: 'Bukhara Region', city: 'Bukhara', phone: '+998 65 123 45 67' },
      { name: 'Jizzakh Region', city: 'Jizzakh', phone: '+998 72 123 45 67' },
      { name: 'Kashkadarya Region', city: 'Karshi', phone: '+998 75 123 45 67' },
      { name: 'Navoi Region', city: 'Navoi', phone: '+998 79 123 45 67' },
      { name: 'Namangan Region', city: 'Namangan', phone: '+998 69 123 45 67' },
      { name: 'Samarkand Region', city: 'Samarkand', phone: '+998 66 123 45 67' },
      { name: 'Sirdarya Region', city: 'Gulistan', phone: '+998 67 123 45 67' },
      { name: 'Surkhandarya Region', city: 'Termez', phone: '+998 76 123 45 67' },
      { name: 'Tashkent Region', city: 'Tashkent', phone: '+998 71 123 45 67' },
      { name: 'Fergana Region', city: 'Fergana', phone: '+998 73 123 45 67' },
      { name: 'Khorezm Region', city: 'Urgench', phone: '+998 62 123 45 67' },
    ],
  }

  const regions = regionsData[currentLang]

  return (
    <main className="min-h-screen bg-gray-50">
      <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />
      <PageHeader
        currentLang={currentLang}
        title={t.about.territorial.title}
        backgroundImage="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&h=600&fit=crop"
      />

      {/* Breadcrumbs */}
      <section className="bg-white border-b py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-primary-600 hover:text-primary-800">
              {currentLang === 'uz' && 'Bosh sahifa'}
              {currentLang === 'ru' && 'Главная'}
              {currentLang === 'en' && 'Home'}
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/about" className="text-primary-600 hover:text-primary-800">
              {t.about.title}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{t.about.territorial.title}</span>
          </nav>
        </div>
      </section>

      {/* Territorial Offices Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regions.map((region, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div className="w-3 h-3 bg-primary-600 rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{region.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm">{region.city}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-sm">{region.phone}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-white rounded-lg shadow-lg p-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {currentLang === 'uz' && 'Qo\'shimcha ma\'lumot'}
                {currentLang === 'ru' && 'Дополнительная информация'}
                {currentLang === 'en' && 'Additional Information'}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {currentLang === 'uz' && 'Hududiy boshqarmalar agentlikning barcha viloyatlarda faoliyatini ta\'minlaydi va mahalliy agrosanoat loyihalarini qo\'llab-quvvatlaydi.'}
                {currentLang === 'ru' && 'Территориальные управления обеспечивают деятельность агентства во всех регионах и поддерживают местные агропромышленные проекты.'}
                {currentLang === 'en' && 'Territorial departments ensure the agency\'s activities in all regions and support local agro-industrial projects.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer currentLang={currentLang} />
      <FloatingButtons />
    </main>
  )
}


