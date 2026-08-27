import { config } from '@/lib/config'
import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = config.baseUrl || 'https://www.unionsportiveprecigne.com/'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/admin/'],
    },
    sitemap: `${baseUrl}sitemap.xml`,
  }
}
