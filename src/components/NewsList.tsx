import Link from 'next/link';
import Image from 'next/image';
import { NewsItem } from '@/lib/types';

interface NewsListProps {
  news: NewsItem[];
}

export default function NewsList({ news }: NewsListProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-8">
      {news.map((item) => (
        <article key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
          {item.image && (
            <div className="relative h-48 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="p-6">
            <header className="mb-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
              <time dateTime={item.date} className="text-sm text-gray-500">
                {formatDate(item.date)}
              </time>
            </header>
            <p className="text-gray-600 mb-4">{item.excerpt}</p>
            {item.body && (
              <div className="prose prose-sm max-w-none mb-4">
                <p>{item.body}</p>
              </div>
            )}
            {item.pdf && (
              <div className="mt-4">
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Consulter le document
                </a>
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}