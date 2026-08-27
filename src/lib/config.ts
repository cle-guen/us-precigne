const rawBaseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://www.unionsportiveprecigne.com'

/** Origin without trailing slash, e.g. https://www.unionsportiveprecigne.com */
export const siteOrigin = rawBaseUrl.replace(/\/+$/, '')

/**
 * Absolute page URL matching next.config trailingSlash.
 * pageUrl() → https://…/
 * pageUrl('actualites') → https://…/actualites/
 * pageUrl('/sports/gym/') → https://…/sports/gym/
 */
export function pageUrl(path = ''): string {
  const cleaned = path.replace(/^\/+|\/+$/g, '')
  return cleaned ? `${siteOrigin}/${cleaned}/` : `${siteOrigin}/`
}

export const config = {
  baseUrl: `${siteOrigin}/`,
} as const
