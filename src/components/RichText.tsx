import { richTextToHtml } from '@/lib/richText'

interface RichTextProps {
  text: string
  className?: string
}

export default function RichText({ text, className }: RichTextProps) {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: richTextToHtml(text) }}
    />
  )
}
