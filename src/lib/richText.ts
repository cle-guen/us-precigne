/** Strip markup so intro text can be used in cards and meta tags. */
export function stripRichText(text: string): string {
  return text
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}
