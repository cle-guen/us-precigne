'use client'

import { useState } from 'react'
import { FaArrowUpRightFromSquare, FaFilePdf } from 'react-icons/fa6'
import PdfModal from './PdfModal'

interface PdfItem {
  label: string
  file: string
}

interface PdfSelectorProps {
  pdfs: PdfItem[]
}

export default function PdfSelector({ pdfs }: PdfSelectorProps) {
  const [selectedPdf, setSelectedPdf] = useState<PdfItem | null>(null)

  const openPdf = (pdf: PdfItem) => {
    setSelectedPdf(pdf)
  }

  const closePdf = () => {
    setSelectedPdf(null)
  }

  if (!pdfs || pdfs.length === 0) {
    return null
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {pdfs.map((pdf, index) => (
          <button
            key={index}
            onClick={() => openPdf(pdf)}
            className="group relative p-4 sm:p-6 bg-white border border-gray-200 rounded-lg shadow-xs hover:shadow-md hover:border-red-300 transition-all duration-200 text-left focus:outline-hidden focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            aria-label={`Ouvrir ${pdf.label}`}
          >
            {/* PDF Icon */}
            <div className="flex items-center mb-3">
              <div className="shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                <FaFilePdf className="text-accent" />
              </div>

              {/* Hover indicator */}
              <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <FaArrowUpRightFromSquare className="w-5 h-5 text-red-600" />
              </div>
            </div>

            {/* PDF Title */}
            <h3 className="text-sm font-medium text-gray-900 group-hover:text-accent transition-colors line-clamp-2">
              {pdf.label}
            </h3>

            {/* Action hint */}
            <p className="mt-2 text-xs text-gray-500 group-hover:text-red-600 transition-colors">
              Cliquer pour ouvrir
            </p>

            {/* Visual indicator on hover */}
            <div className="absolute inset-0 bg-linear-to-r from-red-50 to-red-100 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity pointer-events-none" />
          </button>
        ))}
      </div>

      {/* PDF Modal */}
      {selectedPdf && (
        <PdfModal
          isOpen={!!selectedPdf}
          onClose={closePdf}
          file={selectedPdf.file}
          label={selectedPdf.label}
        />
      )}
    </>
  )
}
