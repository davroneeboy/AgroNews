'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { Language, getTranslation } from '@/lib/i18n'
import Link from 'next/link'

export default function StructurePage() {
  const [currentLang, setCurrentLang] = useState<Language>('ru')
  const t = getTranslation(currentLang)

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang)
  }

  const structureData = {
    uz: {
      director: 'Direktor',
      deputy: 'O\'rinbosar direktorlar',
      departments: 'Bo\'limlar',
      dept1: 'Loyihalar bo\'limi',
      dept2: 'Moliya bo\'limi',
      dept3: 'Kadrlar bo\'limi',
      dept4: 'Xalqaro aloqalar bo\'limi',
    },
    ru: {
      director: 'Директор',
      deputy: 'Заместители директора',
      departments: 'Отделы',
      dept1: 'Отдел проектов',
      dept2: 'Финансовый отдел',
      dept3: 'Отдел кадров',
      dept4: 'Отдел международных связей',
    },
    en: {
      director: 'Director',
      deputy: 'Deputy Directors',
      departments: 'Departments',
      dept1: 'Projects Department',
      dept2: 'Finance Department',
      dept3: 'Human Resources Department',
      dept4: 'International Relations Department',
    },
  }

  const data = structureData[currentLang]

  return (
    <main className="min-h-screen bg-gray-50">
      <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">{t.about.structure.title}</h1>
            <p className="text-xl text-primary-100">{t.about.structure.description}</p>
          </div>
        </div>
      </section>

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
            <span className="text-gray-600">{t.about.structure.title}</span>
          </nav>
        </div>
      </section>

      {/* Structure Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Organizational Chart */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {currentLang === 'uz' && 'Tashkiliy struktura'}
                {currentLang === 'ru' && 'Организационная структура'}
                {currentLang === 'en' && 'Organizational Chart'}
              </h2>
              
              {/* Director */}
              <div className="flex justify-center mb-8">
                <div className="bg-primary-600 text-white rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-105">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-center">{data.director}</h3>
                </div>
              </div>

              {/* Deputy Directors */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[1, 2].map((num) => (
                  <div
                    key={num}
                    className="bg-primary-100 rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{data.deputy} {num}</h3>
                  </div>
                ))}
              </div>

              {/* Departments */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{data.departments}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    data.dept1,
                    data.dept2,
                    data.dept3,
                    data.dept4,
                  ].map((dept, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-6 border-2 border-primary-200 transform transition-all duration-300 hover:border-primary-400 hover:shadow-lg"
                    >
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mr-4">
                          <span className="text-white font-bold text-xl">{index + 1}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">{dept}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {currentLang === 'uz' && 'Qo\'shimcha ma\'lumot'}
                {currentLang === 'ru' && 'Дополнительная информация'}
                {currentLang === 'en' && 'Additional Information'}
              </h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {currentLang === 'uz' && 'Agentlikning tashkiliy tuzilmasi qishloq xo\'jaligi sohasidagi vazifalarni samarali bajarish uchun mo\'ljallangan.'}
                  {currentLang === 'ru' && 'Организационная структура агентства предназначена для эффективного выполнения задач в сфере сельского хозяйства.'}
                  {currentLang === 'en' && 'The organizational structure of the agency is designed to effectively perform tasks in the agricultural sector.'}
                </p>
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

