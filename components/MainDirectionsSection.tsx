'use client'

import { useEffect, useRef, useState } from 'react'
import { Language, getTranslation } from '@/lib/i18n'

type MainDirectionsSectionProps = {
  currentLang: Language
}

type DirectionItem = {
  id: number
  icon: JSX.Element
  title: { uz: string; ru: string; en: string }
  desc: { uz: string; ru: string; en: string }
  href: string
  size?: 'wide' | 'tall' | 'normal'
  accent?: boolean
}

const MainDirectionsSection = ({ currentLang }: MainDirectionsSectionProps) => {
  const t = getTranslation(currentLang)
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const directions: DirectionItem[] = [
    {
      id: 2, size: 'wide', accent: true,
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
      title: { uz: 'Statistika', ru: 'Статистика', en: 'Statistics' },
      desc: { uz: 'Statistik ma\'lumotlar va tahlillar', ru: 'Статистические данные и аналитика', en: 'Statistical data and analytics' },
      href: '#statistics',
    },
    {
      id: 3,
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
      title: { uz: 'Ilm-fan', ru: 'Наука и образование', en: 'Science' },
      desc: { uz: 'Ilmiy tadqiqotlar va ta\'lim', ru: 'Научные исследования и образование', en: 'Research and education' },
      href: '#science',
    },
    {
      id: 4, size: 'tall',
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      title: { uz: 'Vakansiyalar', ru: 'Вакансии', en: 'Vacancies' },
      desc: { uz: 'Bo\'sh ish o\'rinlari va karyera imkoniyatlari', ru: 'Актуальные вакансии и карьерные возможности', en: 'Open positions and career opportunities' },
      href: '#vacancies',
    },
    {
      id: 5,
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: { uz: 'Grantlar', ru: 'Международные гранты', en: 'Grants' },
      desc: { uz: 'Xalqaro grant dasturlari', ru: 'Международные грантовые программы', en: 'International grant programs' },
      href: '#grants',
    },
    {
      id: 6, size: 'wide',
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      title: { uz: 'Kreditlar', ru: 'Международные кредиты', en: 'Credits' },
      desc: { uz: 'Imtiyozli kredit dasturlari', ru: 'Программы льготного кредитования', en: 'Preferential lending programs' },
      href: '#credits',
    },
    {
      id: 7,
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
      title: { uz: 'Agroklinika', ru: 'Агроклиника', en: 'Agro-clinic' },
      desc: { uz: 'Agrar kasalliklar diagnostikasi', ru: 'Диагностика аграрных заболеваний', en: 'Agricultural disease diagnostics' },
      href: '#agro-clinic',
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-paper relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="eyebrow mb-3">
              {currentLang === 'uz' ? "Faoliyat yo'nalishlari" : currentLang === 'ru' ? 'Направления деятельности' : 'Activity areas'}
            </div>
            <h2 className="section-title text-3xl md:text-4xl">
              {t.sections.mainDirections}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {directions.map((dir, index) => (
            <a
              key={dir.id}
              href={dir.href}
              className="card p-7 group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: `all 0.5s ease-out ${index * 70}ms`,
              }}
              tabIndex={0}
            >
              <div className="flex justify-between items-center mb-5">
                <span className="text-green-600">{dir.icon}</span>
                <span className="font-mono font-bold text-base text-gold">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="font-bold text-lg text-green-800 mb-2">{dir.title[currentLang]}</h3>
              <p className="text-[15px] leading-relaxed text-muted">{dir.desc[currentLang]}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MainDirectionsSection
