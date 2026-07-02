'use client'

import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import NewsSection from '@/components/NewsSection'
import VideoReportsSection from '@/components/VideoReportsSection'
import TelegramPostsSection from '@/components/TelegramPostsSection'
import StatisticsSection from '@/components/StatisticsSection'
import InteractiveMap from '@/components/InteractiveMap'
import AnalyticsSection from '@/components/AnalyticsSection'
import UsefulInfoSection from '@/components/UsefulInfoSection'
import AdviceSection from '@/components/AdviceSection'
import PhotoGallerySection from '@/components/PhotoGallerySection'
import MainDirectionsSection from '@/components/MainDirectionsSection'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import ScrollReveal from '@/components/ScrollReveal'
import { useLanguage } from '@/lib/useLanguage'

export default function Home() {
  const { currentLang } = useLanguage()

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection currentLang={currentLang} />
      <StatisticsSection currentLang={currentLang} />

      <ScrollReveal direction="up">
        <MainDirectionsSection currentLang={currentLang} />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <NewsSection currentLang={currentLang} />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <VideoReportsSection currentLang={currentLang} />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <TelegramPostsSection currentLang={currentLang} />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <InteractiveMap currentLang={currentLang} />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <AnalyticsSection currentLang={currentLang} />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <PhotoGallerySection currentLang={currentLang} />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <AdviceSection currentLang={currentLang} />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <UsefulInfoSection currentLang={currentLang} />
      </ScrollReveal>

      <Footer currentLang={currentLang} />
      <FloatingButtons />
    </main>
  )
}
