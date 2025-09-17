'use client';

import React, { useState } from 'react';
import PdfModal from './PdfModal';

interface PdfItem {
  label: string;
  file: string;
}

interface PdfSelectorProps {
  pdfs: PdfItem[];
}

export default function PdfSelector({ pdfs }: PdfSelectorProps) {
  const [selectedPdf, setSelectedPdf] = useState<PdfItem | null>(null);

  const openPdf = (pdf: PdfItem) => {
    setSelectedPdf(pdf);
  };

  const closePdf = () => {
    setSelectedPdf(null);
  };

  if (!pdfs || pdfs.length === 0) {
    return null;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pdfs.map((pdf, index) => (
          <button
            key={index}
            onClick={() => openPdf(pdf)}
            className="group relative p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label={`Ouvrir ${pdf.label}`}
          >
            {/* PDF Icon */}
            <div className="flex items-center mb-3">
              <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                <svg 
                  className="w-6 h-6 text-red-600" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v1h-1.5V7h3v1.5zM9 9.5h1v-1H9v1z"/>
                </svg>
              </div>
              
              {/* Hover indicator */}
              <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg 
                  className="w-5 h-5 text-blue-500" 
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
              </div>
            </div>
            
            {/* PDF Title */}
            <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
              {pdf.label}
            </h3>
            
            {/* Action hint */}
            <p className="mt-2 text-xs text-gray-500 group-hover:text-blue-500 transition-colors">
              Cliquer pour ouvrir
            </p>

            {/* Visual indicator on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity pointer-events-none" />
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
  );
}