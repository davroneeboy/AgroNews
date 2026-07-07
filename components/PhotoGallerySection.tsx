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
      url: '/gallery/gallery-01.png',
      title: { uz: 'Olma bog\'i', ru: 'Яблоневый сад', en: 'Apple orchard' },
    },
    {
      id: 2,
      url: '/gallery/gallery-02.png',
      title: { uz: 'Zamonaviy issiqxona', ru: 'Современная теплица', en: 'Modern greenhouse' },
    },
    {
      id: 3,
      url: '/gallery/gallery-03.png',
      title: { uz: 'Uzum hosilini yig\'ish', ru: 'Сбор урожая винограда', en: 'Grape harvest' },
    },
    {
      id: 4,
      url: '/gallery/gallery-04.png',
      title: { uz: 'Qishloq xo\'jaligi maydonlari yuqoridan', ru: 'Сельхозугодья с высоты', en: 'Farmland from above' },
    },
    {
      id: 5,
      url: '/gallery/gallery-05.png',
      title: { uz: 'Olma bog\'idagi hosil', ru: 'Урожай в яблоневом саду', en: 'Apple orchard harvest' },
    },
    {
      id: 6,
      url: '/gallery/gallery-06.png',
      title: { uz: 'Yashil o\'tloqlar', ru: 'Зелёные угодья с высоты', en: 'Green farmland from above' },
    },
    {
      id: 7,
      url: '/gallery/gallery-07.png',
      title: { uz: 'Uzumzor tepaliklar', ru: 'Виноградники на холмах', en: 'Hillside vineyards' },
    },
    {
      id: 8,
      url: '/gallery/gallery-08.png',
      title: { uz: 'Aniq dehqonchilik texnologiyalari', ru: 'Точное земледелие и дроны', en: 'Precision farming and drones' },
    },
    {
      id: 9,
      url: '/gallery/gallery-09.png',
      title: { uz: 'Eksportga tayyorlangan mahsulot', ru: 'Продукция готовая к экспорту', en: 'Produce ready for export' },
    },
    {
      id: 10,
      url: '/gallery/gallery-10.png',
      title: { uz: 'Farg\'ona vodiysi manzarasi', ru: 'Панорама Ферганской долины', en: 'Fergana Valley panorama' },
    },
    {
      id: 11,
      url: '/gallery/gallery-11.png',
      title: { uz: 'Tomchilatib sug\'orish', ru: 'Капельное орошение', en: 'Drip irrigation' },
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


