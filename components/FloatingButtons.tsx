'use client'

import { useState, useEffect } from 'react'

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleAudioClick = () => {
    // Функционал для озвучивания текста
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(
        'Добро пожаловать на сайт агентства сельскохозяйственного развития'
      )
      utterance.lang = 'ru-RU'
      speechSynthesis.speak(utterance)
    }
  }

  const handleChatClick = () => {
    // Открытие чата
    alert('Чат будет открыт')
  }

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col space-y-4">
      {/* Кнопка звука */}
      <button
        onClick={handleAudioClick}
        className="w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Озвучить текст"
        tabIndex={0}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      </button>

      {/* Кнопка прокрутки наверх */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className="w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl animate-fade-in"
          aria-label="Прокрутить наверх"
          tabIndex={0}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* Кнопка чата */}
      <button
        onClick={handleChatClick}
        className="w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Открыть чат"
        tabIndex={0}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
    </div>
  )
}

export default FloatingButtons

