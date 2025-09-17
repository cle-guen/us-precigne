'use client';

interface PdfViewerProps {
  file: string;
  label: string;
}

export default function PdfViewer({ file, label }: PdfViewerProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-4">
      <h4 className="font-medium text-gray-900 mb-3">{label}</h4>
      <div className="mb-3">
        <object
          data={file}
          type="application/pdf"
          width="100%"
          height="400"
          className="border border-gray-300 rounded"
          aria-label={`Aperçu de ${label}`}
        >
          <div className="bg-gray-50 p-4 text-center rounded border border-gray-300">
            <p className="text-gray-600 mb-2">
              Votre navigateur ne peut pas afficher ce PDF.
            </p>
            <a
              href={file}
              download
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Télécharger le PDF
            </a>
          </div>
        </object>
      </div>
      <a
        href={file}
        download
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Télécharger
      </a>
    </div>
  );
}