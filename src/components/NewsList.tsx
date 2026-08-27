'use client'

import { sports } from '@/data/sports'
import { NewsItem } from '@/lib/types'
import Image from 'next/image'
import { useState } from 'react'
import { FaFileLines, FaMagnifyingGlassPlus } from 'react-icons/fa6'
import ImageModal from './ImageModal'

interface NewsListProps {
  news: NewsItem[]
}

export default function NewsList({ news }: NewsListProps) {
  const [modalState, setModalState] = useState<{
    isOpen: boolean
    images: string[]
    currentIndex: number
  }>({ isOpen: false, images: [], currentIndex: 0 })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const getSportLogo = (sportSlug?: string) => {
    if (!sportSlug) return null
    const sport = sports.find((s) => s.slug === sportSlug)
    return sport?.logo || null
  }

  const openModal = (images: string[], index: number = 0) => {
    setModalState({ isOpen: true, images, currentIndex: index })
  }

  const closeModal = () => {
    setModalState({ isOpen: false, images: [], currentIndex: 0 })
  }

  const navigateModal = (index: number) => {
    setModalState((prev) => ({ ...prev, currentIndex: index }))
  }

  const firstImageArticleIndex = news.findIndex(
    (item) => item.additionalImages && item.additionalImages.length > 0,
  )

  return (
    <>
      <div className="space-y-8">
        {news.map((item, itemIndex) => (
          <article
            key={item.id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden"
          >
            <div className="p-6 relative">
              {/* Logo du sport en haut à droite */}
              {getSportLogo(item.sportSlug) && (
                <div className="absolute top-4 right-4">
                  <Image
                    src={getSportLogo(item.sportSlug)!}
                    alt={`Logo ${item.sportSlug}`}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
              )}
              <header className="mb-4 pr-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h2>
                {item.date && (
                  <time dateTime={item.date} className="text-sm text-gray-500">
                    {formatDate(item.date!)}
                  </time>
                )}
              </header>
              {item.body && (
                <div className="prose prose-sm max-w-none mb-4">
                  <p>{item.body}</p>
                </div>
              )}
              {/* Images supplémentaires */}
              {item.additionalImages && item.additionalImages.length > 0 && (
                <div className="mt-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {item.additionalImages.map((imageSrc, index) => {
                      const isLcpImage =
                        itemIndex === firstImageArticleIndex && index === 0

                      return (
                        <button
                          key={index}
                          onClick={() =>
                            openModal(item.additionalImages!, index)
                          }
                          className="relative aspect-square rounded-lg overflow-hidden hover:ring-2 hover:ring-red-500 transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-red-500"
                        >
                          <Image
                            src={imageSrc}
                            alt={`Image ${index + 1} - ${item.title}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-200"
                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            priority={isLcpImage}
                          />
                          <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-opacity duration-200 flex items-center justify-center">
                            <FaMagnifyingGlassPlus className="w-6 h-6 text-white opacity-0 hover:opacity-100 transition-opacity duration-200" />
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {item.pdf && (
                <div className="mt-4">
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-accent text-white text-sm font-medium rounded-md hover:bg-accent-hover transition-colors"
                  >
                    <FaFileLines className="w-4 h-4 mr-2" />
                    Consulter le document
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Modal pour afficher les images en grand */}
      <ImageModal
        images={modalState.images}
        currentIndex={modalState.currentIndex}
        isOpen={modalState.isOpen}
        onClose={closeModal}
        onNavigate={navigateModal}
      />
    </>
  )
}
