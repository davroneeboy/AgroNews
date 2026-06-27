'use client'

import { useState } from 'react'
import { Language, getTranslation } from '@/lib/i18n'
import Image from 'next/image'

type PhotoGallerySectionProps = {
  currentLang: Language
}

const PhotoGallerySection = ({ currentLang }: PhotoGallerySectionProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const t = getTranslation(currentLang)

  const photos = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=600&fit=crop',
      title: { uz: 'Mevali bog\'', ru: 'Фруктовый сад', en: 'Fruit orchard' },
    },
    {
      id: 2,
      url: '/gallery/ChatGPT Image 26 июн. 2026 г., 19_39_57.png',
      title: { uz: 'Olma bog\'i', ru: 'Яблоневый сад', en: 'Apple orchard' },
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop',
      title: { uz: 'Hosil yig\'ish', ru: 'Сбор урожая', en: 'Harvest' },
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop',
      title: { uz: 'Dalalar', ru: 'Сельскохозяйственные поля', en: 'Agricultural fields' },
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
      title: { uz: 'Bug\'doy dalalari', ru: 'Пшеничные поля', en: 'Wheat fields' },
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop',
      title: { uz: 'Yashil maydonlar', ru: 'Зелёные угодья', en: 'Green fields' },
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop',
      title: { uz: 'Uzum yig\'ish', ru: 'Сбор винограда', en: 'Grape harvesting' },
    },
    {
      id: 8,
      url: '/gallery/ChatGPT Image 27 июн. 2026 г., 12_16_09.png',
      title: { uz: 'Zamonaviy issiqxona', ru: 'Современная теплица', en: 'Modern greenhouse' },
    },
  ]

  const handleImageClick = (url: string) => {
    setSelectedImage(url)
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="accent-line mb-3" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-800">
              {t.sections.photoGallery}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group animate-fade-in"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
                onClick={() => handleImageClick(photo.url)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleImageClick(photo.url)
                  }
                }}
              >
                <Image
                  src={photo.url}
                  alt={photo.title[currentLang]}
                  fill
                  className="object-cover group-hover:scale-125 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-semibold">{photo.title[currentLang]}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Модальное окно для просмотра фото */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={handleCloseModal}
        >
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-colors"
            aria-label="Закрыть"
            tabIndex={0}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative max-w-6xl max-h-[90vh] animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Увеличенное фото"
              width={1200}
              height={800}
              className="rounded-lg shadow-2xl"
              style={{ maxHeight: '90vh', width: 'auto', height: 'auto' }}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default PhotoGallerySection


