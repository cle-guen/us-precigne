'use client'

import Modal from './Modal'

interface PdfModalProps {
  isOpen: boolean
  onClose: () => void
  file: string
  label: string
}

export default function PdfModal({
  isOpen,
  onClose,
  file,
  label,
}: PdfModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <div className="flex flex-col">
        {/* Header */}
        <div className="pb-2">
          <h2
            id="modal-title"
            className="text-xl font-semibold text-gray-900 pr-8"
          >
            {label}
          </h2>
          <div className="mt-4 flex flex-col gap-4">
            <a
              href={file}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center px-4 py-4 bg-red-700 text-white text-sm font-medium rounded-md hover:bg-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Ouvrir dans un nouvel onglet
            </a>
            <a
              href={file}
              download
              className="w-full sm:w-auto inline-flex justify-center items-center px-4 py-4 bg-gray-600 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Télécharger le PDF
            </a>
          </div>
        </div>
      </div>
    </Modal>
  )
}
