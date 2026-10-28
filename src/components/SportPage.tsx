import UspLogo from '@/components/UspLogo'
import { Sport } from '@/lib/types'
import Image from 'next/image'
import { FaEnvelope, FaFacebook, FaGlobe, FaPhone } from 'react-icons/fa6'
import PdfSelector from './PdfSelector'
import RichText from './RichText'
import ScheduleTable from './ScheduleTable'
import ScheduleTableFootball from './ScheduleTableFootball'
import ScheduleTableYoga from './ScheduleTableYoga'

interface SportPageProps {
  sport: Sport
}

export default function SportPage({ sport }: SportPageProps) {
  return (
    <div className="min-h-screen md:pt-16">
      <section className="relative min-h-[40vh] max-h-[60vh] flex items-center justify-center max-w-7xl mx-auto overflow-hidden md:rounded-lg">
        <Image
          src={sport.heroImage}
          alt={`Image hero de ${sport.name}`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="relative z-10 text-center text-white px-4">
          {sport.logo && (
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-24 sm:w-20 sm:h-28 md:w-24 md:h-36 flex items-center justify-center">
                <UspLogo
                  className="w-full h-full"
                  bottomText={sport.name.toUpperCase()}
                  centerImageSrc={sport.logo}
                  centerImageScale={0.6}
                  centerImageYOffset={-2}
                />
              </div>
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {sport.name}
          </h1>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Présentation
          </h2>
          <RichText
            text={sport.intro}
            className="text-lg text-gray-700 leading-relaxed"
          />
        </section>

        {/* Content Image */}
        {sport.contentImage && (
          <section className="mb-12">
            <div className="relative h-48 sm:h-64 md:h-80 w-full max-w-4xl mx-auto rounded-lg overflow-hidden">
              <Image
                src={sport.contentImage}
                alt={`Image illustrant le ${sport.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
              />
            </div>
          </section>
        )}

        {/* Schedule */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Horaires
          </h2>
          {sport.slug === 'football' ? (
            <ScheduleTableFootball
              schedule={sport.schedule}
              sportName={sport.name}
              location={sport.location}
            />
          ) : sport.slug === 'yoga' ? (
            <ScheduleTableYoga
              schedule={sport.schedule}
              sportName={sport.name}
              location={sport.location}
            />
          ) : (
            <ScheduleTable
              schedule={sport.schedule}
              sportName={sport.name}
              location={sport.location}
            />
          )}
        </section>

        {/* Contacts */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Contacts
          </h2>
          <div className="bg-gray-50 rounded-lg py-4 sm:py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sport.contacts.phone && (
                <a
                  href={`tel:${sport.contacts.phone}`}
                  className="flex items-center p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <FaPhone className="w-5 h-5 text-gray-600 mr-3" />
                  <span className="text-sm font-medium">
                    {sport.contacts.phone}
                  </span>
                </a>
              )}
              {sport.contacts.email && (
                <a
                  href={`mailto:${sport.contacts.email}`}
                  className="flex items-center p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <FaEnvelope className="w-5 min-w-5 h-5 min-h-5 text-gray-900 mr-3" />
                  <span className="text-xs font-medium">
                    {sport.contacts.email}
                  </span>
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
                  <FaFacebook className="w-5 h-5 text-blue-600 mr-3" />
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
                  <FaGlobe className="w-5 h-5 text-gray-600 mr-3" />
                  <span className="text-sm font-medium">Site web</span>
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Documents */}
        {sport.pdfs && sport.pdfs.length > 0 && (
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Documents
            </h2>
            <PdfSelector pdfs={sport.pdfs} />
          </section>
        )}
      </div>
    </div>
  )
}
