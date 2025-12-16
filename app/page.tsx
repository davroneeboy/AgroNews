'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import ImageSlider from '@/components/ImageSlider'
import NewsSection from '@/components/NewsSection'
import VideoReportsSection from '@/components/VideoReportsSection'
import StatisticsSection from '@/components/StatisticsSection'
import InteractiveMap from '@/components/InteractiveMap'
import AnalyticsSection from '@/components/AnalyticsSection'
import UsefulInfoSection from '@/components/UsefulInfoSection'
import AdviceSection from '@/components/AdviceSection'
import PhotoGallerySection from '@/components/PhotoGallerySection'
import MainDirectionsSection from '@/components/MainDirectionsSection'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { Language } from '@/lib/i18n'

export default function Home() {
  const [currentLang, setCurrentLang] = useState<Language>('ru')

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang)
  }

  return (
    <main className="min-h-screen">
      <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />
      <ImageSlider currentLang={currentLang} />
      <StatisticsSection currentLang={currentLang} />
      <InteractiveMap currentLang={currentLang} />
      <NewsSection currentLang={currentLang} />
      <VideoReportsSection currentLang={currentLang} />
      <AnalyticsSection currentLang={currentLang} />
      <MainDirectionsSection currentLang={currentLang} />
      <PhotoGallerySection currentLang={currentLang} />
      <AdviceSection currentLang={currentLang} />
      <UsefulInfoSection currentLang={currentLang} />
      <Footer currentLang={currentLang} />
      <FloatingButtons />
    </main>
  )
}

