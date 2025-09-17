'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { NewsItem } from '@/lib/types';
import ImageModal from './ImageModal';

interface NewsListProps {
  news: NewsItem[];
}

export default function NewsList({ news }: NewsListProps) {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    images: string[];
    currentIndex: number;
  }>({ isOpen: false, images: [], currentIndex: 0 });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const openModal = (images: string[], index: number = 0) => {
    setModalState({ isOpen: true, images, currentIndex: index });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, images: [], currentIndex: 0 });
  };

  const navigateModal = (index: number) => {
    setModalState(prev => ({ ...prev, currentIndex: index }));
  };

  return (
    <>
    <div className="space-y-8">
      {news.map((item) => (
        <article key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
          {item.image && (
            <div className="relative h-48 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="p-6">
            <header className="mb-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
              <time dateTime={item.date} className="text-sm text-gray-500">
                {formatDate(item.date)}
              </time>
            </header>
            <p className="text-gray-600 mb-4">{item.excerpt}</p>
            {item.body && (
              <div className="prose prose-sm max-w-none mb-4">
                <p>{item.body}</p>
              </div>
            )}
            {/* Images supplémentaires */}
            {item.additionalImages && item.additionalImages.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Images de l'actualité</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {item.additionalImages.map((imageSrc, index) => (
                    <button
                      key={index}
                      onClick={() => openModal(item.additionalImages!, index)}
                      className="relative aspect-square rounded-lg overflow-hidden hover:ring-2 hover:ring-blue-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <Image
                        src={imageSrc}
                        alt={`Image ${index + 1} - ${item.title}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-200"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      {/* Icône pour indiquer que l'image est cliquable */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-200 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white opacity-0 hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {item.pdf && (
              <div className="mt-4">
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
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
  );
}