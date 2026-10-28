import sanitizeHtml from 'sanitize-html'

/** Strip markup so intro text can be used in cards and meta tags. */
export function stripRichText(text: string): string {
  return text
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

export function richTextToHtml(text: string): string {
  return text
    .split(/\n\n+/)
    .filter((paragraph) => paragraph.trim())
    .map((paragraph) => {
      const safe = sanitizeHtml(paragraph, {
        allowedTags: ['b', 'strong', 'em', 'i', 'u', 'br'],
        allowedAttributes: {},
      })
      return `<p class="mb-4 last:mb-0">${safe.replace(/\n/g, '<br>')}</p>`
    })
    .join('')
}
