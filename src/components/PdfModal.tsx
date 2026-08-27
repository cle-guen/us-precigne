'use client'

import { FaArrowUpRightFromSquare, FaDownload } from 'react-icons/fa6'
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
              className="w-full sm:w-auto inline-flex justify-center items-center px-4 py-4 bg-accent text-white text-sm font-medium rounded-md hover:bg-accent-hover transition-colors focus:outline-hidden focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <FaArrowUpRightFromSquare className="w-4 h-4 mr-2" />
              Ouvrir dans un nouvel onglet
            </a>
            <a
              href={file}
              download
              className="w-full sm:w-auto inline-flex justify-center items-center px-4 py-4 bg-gray-600 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors focus:outline-hidden focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              <FaDownload className="w-4 h-4 mr-2" />
              Télécharger le PDF
            </a>
          </div>
        </div>
      </div>
    </Modal>
  )
}
