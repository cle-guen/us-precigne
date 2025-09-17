import Image from 'next/image';
import { Sport } from '@/lib/types';
import ScheduleTable from './ScheduleTable';
import PdfSelector from './PdfSelector';

interface SportPageProps {
  sport: Sport;
}

export default function SportPage({ sport }: SportPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={sport.heroImage}
            alt={`Image hero de ${sport.name}`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{sport.name}</h1>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Présentation</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{sport.intro}</p>
        </section>

        {/* Content Image */}
        {sport.contentImage && (
          <section className="mb-12">
            <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
              <Image
                src={sport.contentImage}
                alt={`Image illustrant le ${sport.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
              />
            </div>
          </section>
        )}

        {/* Schedule */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Horaires</h2>
          <ScheduleTable schedule={sport.schedule} sportName={sport.name} />
        </section>

        {/* Contacts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contacts</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sport.contacts.phone && (
                <a
                  href={`tel:${sport.contacts.phone}`}
                  className="flex items-center p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm font-medium">{sport.contacts.phone}</span>
                </a>
              )}
              {sport.contacts.email && (
                <a
                  href={`mailto:${sport.contacts.email}`}
                  className="flex items-center p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-medium">{sport.contacts.email}</span>
                </a>
              )}
              {sport.contacts.facebook && (
                <a
                  href={sport.contacts.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label={`Page Facebook de ${sport.name}`}
                >
                  <svg className="w-5 h-5 text-blue-700 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-sm font-medium">Facebook</span>
                </a>
              )}
              {sport.contacts.website && (
                <a
                  href={sport.contacts.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c0-5 0-9 0-9m0 0c0 5 0 9 0 9" />
                  </svg>
                  <span className="text-sm font-medium">Site web</span>
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Documents */}
        {sport.pdfs && sport.pdfs.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Documents</h2>
            <PdfSelector pdfs={sport.pdfs} />
          </section>
        )}
      </div>
    </div>
  );
}