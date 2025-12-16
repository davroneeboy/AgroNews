'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { Language, getTranslation } from '@/lib/i18n'
import Image from 'next/image'

export default function AboutPage() {
  const [currentLang, setCurrentLang] = useState<Language>('ru')
  const t = getTranslation(currentLang)

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">{t.about.title}</h1>
            <p className="text-xl text-primary-100">{t.about.description}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 animate-slide-in-right">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.about.mission}</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">{t.about.missionText}</p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 animate-slide-in-left">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.about.vision}</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">{t.about.visionText}</p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.about.values}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.about.valuesList.map((value, index) => (
                  <div
                    key={index}
                    className="bg-primary-50 rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">{value.charAt(0)}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{value}</h3>
                  </div>
                ))}
              </div>
            </div>

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

