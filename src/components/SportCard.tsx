import Link from 'next/link';
import Image from 'next/image';
import { Sport } from '@/lib/types';

interface SportCardProps {
  sport: Sport;
}

export default function SportCard({ sport }: SportCardProps) {
  return (
    <Link href={`/sports/${sport.slug}`} className="group">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <div className="relative h-48 w-full">
          <Image
            src={sport.heroImage}
            alt={`Image de ${sport.name}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {sport.logo && (
            <div className="absolute top-3 right-3 w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Image
                src={sport.logo}
                alt={`Logo ${sport.name}`}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
          )}
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-2">
            {sport.logo && (
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                <Image
                  src={sport.logo}
                  alt={`Logo ${sport.name}`}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
            )}
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{sport.name}</h3>
          </div>
          <p className="text-gray-600 text-sm line-clamp-3">{sport.intro}</p>
          <div className="mt-4">
            <span className="inline-flex items-center text-red-700 text-sm font-medium group-hover:text-red-800">
              Découvrir
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}