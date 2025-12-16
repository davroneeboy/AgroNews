'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { Language, getTranslation } from '@/lib/i18n'
import Link from 'next/link'

export default function CentralPage() {
  const [currentLang, setCurrentLang] = useState<Language>('ru')
  const t = getTranslation(currentLang)

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang)
  }

  const departmentsData = {
    uz: [
      { name: 'Loyihalar bo\'limi', description: 'Agrosanoat loyihalarini rejalashtirish va boshqarish' },
      { name: 'Moliya bo\'limi', description: 'Moliya resurslarini boshqarish va hisobot' },
      { name: 'Kadrlar bo\'limi', description: 'Kadrlar siyosati va boshqaruvi' },
      { name: 'Xalqaro aloqalar bo\'limi', description: 'Xalqaro hamkorlik va aloqalar' },
      { name: 'Axborot texnologiyalari bo\'limi', description: 'IT xizmatlari va texnik yordam' },
      { name: 'Huquqiy bo\'lim', description: 'Huquqiy maslahat va qo\'llab-quvvatlash' },
    ],
    ru: [
      { name: 'Отдел проектов', description: 'Планирование и управление агропромышленными проектами' },
      { name: 'Финансовый отдел', description: 'Управление финансовыми ресурсами и отчетность' },
      { name: 'Отдел кадров', description: 'Кадровая политика и управление' },
      { name: 'Отдел международных связей', description: 'Международное сотрудничество и связи' },
      { name: 'Отдел информационных технологий', description: 'IT-услуги и техническая поддержка' },
      { name: 'Юридический отдел', description: 'Юридические консультации и поддержка' },
    ],
    en: [
      { name: 'Projects Department', description: 'Planning and management of agro-industrial projects' },
      { name: 'Finance Department', description: 'Financial resource management and reporting' },
      { name: 'Human Resources Department', description: 'HR policy and management' },
      { name: 'International Relations Department', description: 'International cooperation and relations' },
      { name: 'Information Technology Department', description: 'IT services and technical support' },
      { name: 'Legal Department', description: 'Legal advice and support' },
    ],
  }

  const departments = departmentsData[currentLang]

  return (
    <main className="min-h-screen bg-gray-50">
      <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">{t.about.central.title}</h1>
            <p className="text-xl text-primary-100">{t.about.central.description}</p>
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
            <span className="text-gray-600">{t.about.central.title}</span>
          </nav>
        </div>
      </section>

      {/* Central Office Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-primary-600 font-bold text-2xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{dept.name}</h3>
                  <p className="text-gray-700">{dept.description}</p>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-12 bg-white rounded-lg shadow-lg p-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {currentLang === 'uz' && 'Aloqa ma\'lumotlari'}
                {currentLang === 'ru' && 'Контактная информация'}
                {currentLang === 'en' && 'Contact Information'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {currentLang === 'uz' && 'Manzil'}
                    {currentLang === 'ru' && 'Адрес'}
                    {currentLang === 'en' && 'Address'}
                  </h3>
                  <p className="text-gray-700">
                    {currentLang === 'uz' && 'Toshkent shahri, Yunusobod tumani'}
                    {currentLang === 'ru' && 'г. Ташкент, Юнусабадский район'}
                    {currentLang === 'en' && 'Tashkent city, Yunusabad district'}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {currentLang === 'uz' && 'Telefon'}
                    {currentLang === 'ru' && 'Телефон'}
                    {currentLang === 'en' && 'Phone'}
                  </h3>
                  <p className="text-gray-700">+998 71 123 45 67</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {currentLang === 'uz' && 'Email'}
                    {currentLang === 'ru' && 'Email'}
                    {currentLang === 'en' && 'Email'}
                  </h3>
                  <p className="text-gray-700">info@agro.uz</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {currentLang === 'uz' && 'Ish vaqti'}
                    {currentLang === 'ru' && 'Режим работы'}
                    {currentLang === 'en' && 'Working Hours'}
                  </h3>
                  <p className="text-gray-700">
                    {currentLang === 'uz' && 'Dushanba - Juma: 9:00 - 18:00'}
                    {currentLang === 'ru' && 'Понедельник - Пятница: 9:00 - 18:00'}
                    {currentLang === 'en' && 'Monday - Friday: 9:00 - 18:00'}
                  </p>
                </div>
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

