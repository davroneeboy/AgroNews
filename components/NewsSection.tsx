'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Language, getTranslation } from '@/lib/i18n'
import { getNewsList, type News } from '@/lib/api-public'

type NewsSectionProps = {
  currentLang: Language
}

const fallbackNews: News[] = [
  {
    id: 901, title: 'Agrosanoat eksporti yil boshidan 23 foizga oshdi',
    slug: 'eksport-oshdi', thumb: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop',
    short_description: 'Joriy yilning birinchi yarmida agrosanoat mahsulotlari eksporti sezilarli darajada o\'sdi. Yangi bozorlar ochildi va mahsulot sifati oshdi.',
    description: '', status: 'published' as const, status_display: 'published', views_count: 4520,
    images: [], is_active: true, created_at: '2026-06-18T10:00:00Z', updated_at: '2026-06-18T10:00:00Z',
  },
  {
    id: 902, title: 'Raqamli yer kadastri barcha viloyatlarda joriy etildi',
    slug: 'raqamli-kadastr', thumb: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
    short_description: 'Barcha viloyatlarda yer resurslarini raqamli boshqarish tizimi ishga tushirildi.',
    description: '', status: 'published' as const, status_display: 'published', views_count: 3180,
    images: [], is_active: true, created_at: '2026-06-12T14:00:00Z', updated_at: '2026-06-12T14:00:00Z',
  },
  {
    id: 903, title: 'Yangi klasterlar uchun 800 mln so\'m subsidiya ajratildi',
    slug: 'klaster-subsidiya', thumb: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=600&fit=crop',
    short_description: 'Agrosanoat klasterlarini qo\'llab-quvvatlash uchun byudjetdan mablag\' ajratildi.',
    description: '', status: 'published' as const, status_display: 'published', views_count: 2750,
    images: [], is_active: true, created_at: '2026-06-05T09:30:00Z', updated_at: '2026-06-05T09:30:00Z',
  },
  {
    id: 904, title: 'Suv tejovchi texnologiyalar bo\'yicha xalqaro anjuman',
    slug: 'suv-tejovchi', thumb: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop',
    short_description: 'Toshkentda zamonaviy sug\'orish texnologiyalari bo\'yicha xalqaro konferensiya o\'tkazildi.',
    description: '', status: 'published' as const, status_display: 'published', views_count: 1980,
    images: [], is_active: true, created_at: '2026-05-28T11:00:00Z', updated_at: '2026-05-28T11:00:00Z',
  },
  {
    id: 905, title: 'Intensiv bog\'dorchilikda sun\'iy intellekt qo\'llanilmoqda',
    slug: 'ai-bogdorchilik', thumb: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop',
    short_description: 'AI texnologiyalari yordamida meva bog\'larida hosildorlik monitoringi olib borilmoqda.',
    description: '', status: 'published' as const, status_display: 'published', views_count: 3410,
    images: [], is_active: true, created_at: '2026-05-20T08:00:00Z', updated_at: '2026-05-20T08:00:00Z',
  },
  {
    id: 906, title: 'Fermer xo\'jaliklari uchun yangi kredit dasturi e\'lon qilindi',
    slug: 'yangi-kredit', thumb: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
    short_description: 'Imtiyozli kreditlash dasturi fermerlar uchun yangi imkoniyatlar yaratmoqda.',
    description: '', status: 'published' as const, status_display: 'published', views_count: 5120,
    images: [], is_active: true, created_at: '2026-05-15T16:00:00Z', updated_at: '2026-05-15T16:00:00Z',
  },
]

const NewsSection = ({ currentLang }: NewsSectionProps) => {
  const isFetchingRef = useRef(false)
  const [news, setNews] = useState<News[]>([])
  const [loading, setLoading] = useState(true)
  const t = getTranslation(currentLang)

  useEffect(() => {
    if (isFetchingRef.current) return
    async function fetchNews() {
      if (isFetchingRef.current) return
      isFetchingRef.current = true
      try {
        setLoading(true)
        const response = await getNewsList({ page: 1, ordering: '-created_at' })
        const newsData = response.results.slice(0, 6)
        setNews(newsData.length > 0 ? newsData : fallbackNews)
      } catch (err) {
        console.error('News fetch error, using fallback:', err)
        setNews(fallbackNews)
      } finally {
        setLoading(false)
        isFetchingRef.current = false
      }
    }
    fetchNews()
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const day = date.getUTCDate()
    const months: Record<string, string[]> = {
      uz: ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentabr', 'oktabr', 'noyabr', 'dekabr'],
      ru: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
      en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    }
    const month = months[currentLang][date.getUTCMonth()]
    const year = date.getUTCFullYear()
    return `${day}-${month}, ${year}`
  }

  const featured = news[0]
  const side = news.slice(1, 3)
  const bottom = news.slice(3, 6)

  return (
    <section id="news" className="py-20 bg-paper">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="eyebrow mb-3">
              {currentLang === 'uz' ? "Yangiliklar va e'lonlar" : currentLang === 'ru' ? 'Новости и объявления' : 'News & announcements'}
            </div>
            <h2 className="section-title text-3xl md:text-4xl">
              {t.news.title}
            </h2>
          </div>
          <Link
            href="/news"
            className="text-green-700 font-semibold text-[15px] hover:text-green-800 transition-colors hidden md:block"
          >
            {currentLang === 'uz' ? 'Barcha yangiliklar' : currentLang === 'ru' ? 'Все новости' : 'All news'} →
          </Link>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-16">
            <div className="w-8 h-8 border-2 border-green-700 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {!loading && news.length > 0 && (
          <>
            {/* Top row: featured + 2 side */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
              {/* Featured — large */}
              {featured && (
                <Link
                  href={`/news/${featured.id}`}
                  className="lg:col-span-3 group cursor-pointer"
                >
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5">
                    {featured.thumb ? (
                      <Image
                        src={featured.thumb}
                        alt={featured.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        priority
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-green-700 to-green-900" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                  <div className="font-mono text-sm font-semibold text-gold mb-2">{formatDate(featured.created_at)}</div>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-green-800 leading-tight group-hover:text-green-700 transition-colors mb-3">
                    {featured.title}
                  </h3>
                  <p className="text-muted text-[15px] leading-relaxed line-clamp-2 max-w-xl">
                    {featured.short_description || featured.description.substring(0, 180)}
                  </p>
                </Link>
              )}

              {/* Side — 2 cards stacked */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                {side.map((item) => (
                  <Link
                    key={item.id}
                    href={`/news/${item.id}`}
                    className="group cursor-pointer flex-1"
                  >
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-3">
                      {item.thumb ? (
                        <Image
                          src={item.thumb}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-green-600 to-green-800" />
                      )}
                    </div>
                    <div className="font-mono text-xs font-semibold text-gold mb-1.5">{formatDate(item.created_at)}</div>
                    <h3 className="font-display text-lg font-semibold text-green-800 leading-snug group-hover:text-green-700 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom row: 3 cards */}
            {bottom.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-line">
                {bottom.map((item) => (
                  <Link
                    key={item.id}
                    href={`/news/${item.id}`}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-3">
                      {item.thumb ? (
                        <Image
                          src={item.thumb}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-green-600 to-green-900" />
                      )}
                    </div>
                    <div className="font-mono text-xs font-semibold text-gold mb-1.5">{formatDate(item.created_at)}</div>
                    <h3 className="font-display text-[17px] font-semibold text-green-800 leading-snug group-hover:text-green-700 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                  </Link>
                ))}
              </div>
            )}

            {/* Mobile "all news" link */}
            <div className="mt-8 text-center md:hidden">
              <Link
                href="/news"
                className="inline-flex items-center text-green-700 font-semibold"
              >
                {currentLang === 'uz' ? 'Barcha yangiliklar' : currentLang === 'ru' ? 'Все новости' : 'All news'} →
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default NewsSection
