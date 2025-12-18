'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { Language, getTranslation } from '@/lib/i18n'
import Link from 'next/link'
import Image from 'next/image'

export default function ManagementPage() {
  const [currentLang, setCurrentLang] = useState<Language>('ru')
  const t = getTranslation(currentLang)

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang)
  }

  const managementData = {
    uz: [
      {
        name: 'Ism Familiya',
        position: 'Direktor',
        bio: 'Qishloq xo\'jaligi sohasida 20 yillik tajribaga ega mutaxassis',
        email: 'director@agro.uz',
        phone: '+998 71 123 45 67',
      },
      {
        name: 'Ism Familiya',
        position: 'Birinchi o\'rinbosar direktor',
        bio: 'Agrosanoat loyihalari bo\'yicha mutaxassis',
        email: 'deputy1@agro.uz',
        phone: '+998 71 123 45 68',
      },
      {
        name: 'Ism Familiya',
        position: 'O\'rinbosar direktor',
        bio: 'Moliya va investitsiyalar bo\'yicha mutaxassis',
        email: 'deputy2@agro.uz',
        phone: '+998 71 123 45 69',
      },
    ],
    ru: [
      {
        name: 'Имя Фамилия',
        position: 'Директор',
        bio: 'Специалист с 20-летним опытом работы в сельскохозяйственной сфере',
        email: 'director@agro.uz',
        phone: '+998 71 123 45 67',
      },
      {
        name: 'Имя Фамилия',
        position: 'Первый заместитель директора',
        bio: 'Специалист по агропромышленным проектам',
        email: 'deputy1@agro.uz',
        phone: '+998 71 123 45 68',
      },
      {
        name: 'Имя Фамилия',
        position: 'Заместитель директора',
        bio: 'Специалист по финансам и инвестициям',
        email: 'deputy2@agro.uz',
        phone: '+998 71 123 45 69',
      },
    ],
    en: [
      {
        name: 'Name Surname',
        position: 'Director',
        bio: 'Specialist with 20 years of experience in the agricultural sector',
        email: 'director@agro.uz',
        phone: '+998 71 123 45 67',
      },
      {
        name: 'Name Surname',
        position: 'First Deputy Director',
        bio: 'Specialist in agro-industrial projects',
        email: 'deputy1@agro.uz',
        phone: '+998 71 123 45 68',
      },
      {
        name: 'Name Surname',
        position: 'Deputy Director',
        bio: 'Specialist in finance and investments',
        email: 'deputy2@agro.uz',
        phone: '+998 71 123 45 69',
      },
    ],
  }

  const managers = managementData[currentLang]

  return (
    <main className="min-h-screen bg-gray-50">
      <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">{t.about.management.title}</h1>
            <p className="text-xl text-primary-100">{t.about.management.description}</p>
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
            <span className="text-gray-600">{t.about.management.title}</span>
          </nav>
        </div>
      </section>

      {/* Management Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {managers.map((manager, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-gradient-to-br from-primary-600 to-primary-800 h-48 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-20 h-20 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{manager.name}</h3>
                    <p className="text-primary-600 font-semibold mb-4">{manager.position}</p>
                    <p className="text-gray-700 mb-6">{manager.bio}</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm">{manager.email}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-sm">{manager.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer currentLang={currentLang} />
      <FloatingButtons />
    </main>
  )
}


