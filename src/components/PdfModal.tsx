'use client';

import React from 'react';
import Modal from './Modal';

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  file: string;
  label: string;
}

export default function PdfModal({ isOpen, onClose, file, label }: PdfModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <div className="flex flex-col h-full max-h-[85vh]">
        {/* Header */}
        <div className="flex-shrink-0 pb-4 mb-4 border-b border-gray-200">
          <h2 id="modal-title" className="text-xl font-semibold text-gray-900 pr-8">
            {label}
          </h2>
          <div className="mt-3">
            <a
              href={file}
              download
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Télécharger le PDF
            </a>
          </div>
        </div>

        {/* PDF Content */}
        <div className="flex-1 min-h-0">
          <div className="h-full bg-gray-50 rounded-lg border border-gray-200">
            <object
              data={file}
              type="application/pdf"
              width="100%"
              height="100%"
              className="w-full h-full rounded-lg"
              aria-label={`Aperçu de ${label}`}
            >
              {/* Fallback content */}
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
                  <svg 
                    className="w-12 h-12 text-red-400 mx-auto mb-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.081 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-red-800 mb-2">
                    PDF non disponible
                  </h3>
                  <p className="text-red-700 mb-4">
                    Votre navigateur ne peut pas afficher ce PDF directement.
                  </p>
                  <a
                    href={file}
                    download
                    className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Télécharger le PDF
                  </a>
                </div>
              </div>
            </object>
          </div>
        </div>

        {/* Footer - mobile download button */}
        <div className="flex-shrink-0 pt-4 mt-4 border-t border-gray-200 sm:hidden">
          <a
            href={file}
            download
            className="w-full inline-flex justify-center items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Télécharger le PDF
          </a>
        </div>
      </div>
    </Modal>
  );
}