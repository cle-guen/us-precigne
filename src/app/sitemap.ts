import { sports } from '@/data/sports'
import { config } from '@/lib/config'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Pages statiques
  const staticPages = [
    {
      url: config.baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${config.baseUrl}/actualites`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${config.baseUrl}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ]

  // Pages dynamiques des sports
  const sportPages = sports.map((sport) => ({
    url: `${config.baseUrl}/sports/${sport.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [...staticPages, ...sportPages]
}
