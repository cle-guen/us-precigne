'use client'

import { useDialog } from '@/lib/useDialog'
import Image from 'next/image'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaXmark } from 'react-icons/fa6'

interface ImageModalProps {
  images: string[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function ImageModal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: ImageModalProps) {
  const modalRef = useDialog(isOpen && Boolean(images[currentIndex]))
  if (!isOpen || !images[currentIndex]) return null

  const currentImage = images[currentIndex]
  const hasMultipleImages = images.length > 1

  return (
    <dialog
      ref={modalRef}
      aria-label={`Image ${currentIndex + 1} sur ${images.length}`}
      aria-modal="true"
      className="m-auto w-[calc(100%-2rem)] max-w-7xl bg-transparent p-0 text-white backdrop:bg-black/90"
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft' && currentIndex > 0) {
          event.preventDefault()
          onNavigate(currentIndex - 1)
        }
        if (event.key === 'ArrowRight' && currentIndex < images.length - 1) {
          event.preventDefault()
          onNavigate(currentIndex + 1)
        }
      }}
    >
      <div
        className="relative max-w-7xl h-[90vh] w-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-white"
          aria-label="Fermer le modal"
        >
          <FaXmark className="w-6 h-6" />
        </button>

        {/* Navigation gauche */}
        {hasMultipleImages && currentIndex > 0 && (
          <button
            onClick={() => onNavigate(currentIndex - 1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-white"
            aria-label="Image précédente"
          >
            <FaChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Navigation droite */}
        {hasMultipleImages && currentIndex < images.length - 1 && (
          <button
            onClick={() => onNavigate(currentIndex + 1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-white"
            aria-label="Image suivante"
          >
            <FaChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Image principale */}
        <div className="relative w-full h-full flex items-center justify-center">
          <ModalImage key={currentImage} src={currentImage} />
        </div>

        {/* Indicateurs de pagination */}
        {hasMultipleImages && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => onNavigate(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-white ${
                  index === currentIndex
                    ? 'bg-white'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Compteur d'images */}
        {hasMultipleImages && (
          <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </dialog>
  )
}

function ModalImage({ src }: { src: string }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <>
      {!loaded && (
        <p className="absolute text-white" role="status">
          Chargement de l’image…
        </p>
      )}
      <Image
        src={src}
        alt="Image en grand format"
        fill
        sizes="100vw"
        priority
        className={`object-contain transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
      />
    </>
  )
}
