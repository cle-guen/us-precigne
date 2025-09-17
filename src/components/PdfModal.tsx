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
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-red-700 text-white text-sm font-medium rounded-md hover:bg-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Ouvrir dans un nouvel onglet
            </a>
            <a
              href={file}
              download
              className="inline-flex items-center px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
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
            <iframe
              src={`${file}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`}
              width="100%"
              height="100%"
              className="w-full h-full rounded-lg"
              title={`Aperçu de ${label}`}
              sandbox="allow-same-origin allow-scripts"
              onError={() => {
                // En cas d'erreur, on affiche le fallback
                console.warn('Erreur lors du chargement du PDF:', file);
              }}
            >
              {/* Fallback content si iframe ne fonctionne pas */}
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-md">
                  <svg 
                    className="w-12 h-12 text-blue-600 mx-auto mb-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">
                    Aperçu PDF
                  </h3>
                  <p className="text-blue-700 mb-4">
                    L'aperçu peut être bloqué par votre navigateur pour des raisons de sécurité.
                  </p>
                  <p className="text-blue-700 mb-4">
                    Utilisez le bouton de téléchargement pour ouvrir ce document.
                  </p>
                  <a
                    href={file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-red-700 text-white text-sm font-medium rounded-md hover:bg-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 mr-2"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Ouvrir dans un nouvel onglet
                  </a>
                  <a
                    href={file}
                    download
                    className="inline-flex items-center px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Télécharger
                  </a>
                </div>
              </div>
            </iframe>
          </div>
        </div>

      </div>
    </Modal>
  );
}