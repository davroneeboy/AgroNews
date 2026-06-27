'use client'

import { Language } from '@/lib/i18n'
import { useLanguage } from '@/lib/useLanguage'

const TopBar = () => {
  const { currentLang, setCurrentLang } = useLanguage()

  const languages: Language[] = ['uz', 'ru', 'en']

  return (
    <div className="bg-green-900 h-[42px] flex items-center justify-between px-4 sm:px-8 lg:px-16 text-[13px]">
      <span className="text-white/50 hidden sm:block">
        {currentLang === 'uz' && "O'zbekiston Respublikasi Vazirlar Mahkamasi"}
        {currentLang === 'ru' && 'Кабинет Министров Республики Узбекистан'}
        {currentLang === 'en' && 'Cabinet of Ministers of the Republic of Uzbekistan'}
      </span>
      <div className="flex items-center gap-5 ml-auto">
        <div className="flex items-center gap-2.5">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setCurrentLang(lang)}
              className={`font-semibold transition-colors ${
                currentLang === lang
                  ? 'text-white border-b-2 border-lime pb-0.5'
                  : 'text-white/50 hover:text-white/70'
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
        <span className="text-white/20">|</span>
        <span className="text-white/60">
          {currentLang === 'uz' && 'Ishonch telefoni: '}
          {currentLang === 'ru' && 'Тел. доверия: '}
          {currentLang === 'en' && 'Trust phone: '}
          <a href="tel:+998954505950" className="text-white/80 hover:text-white font-semibold">+99895 450-59-50</a>
        </span>
      </div>
    </div>
  )
}

export default TopBar
