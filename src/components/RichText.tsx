interface RichTextProps {
  text: string
  className?: string
}

function toHtml(text: string): string {
  return text
    .split(/\n\n+/)
    .filter((paragraph) => paragraph.trim())
    .map(
      (paragraph) =>
        `<p class="mb-4 last:mb-0">${paragraph.replace(/\n/g, '<br>')}</p>`,
    )
    .join('')
}

export default function RichText({ text, className }: RichTextProps) {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: toHtml(text) }}
    />
  )
}
