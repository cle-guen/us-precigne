import { news } from '@/data/news'
import { sports } from '@/data/sports'
import { richTextToHtml } from '@/lib/richText'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
describe('contenus publics', () => {
  it('préserve la mise en forme utile et supprime scripts, attributs et liens exécutables', () => {
    const html = richTextToHtml(
      '<b onclick="alert(1)">Club</b>\nBienvenue\n\n<script>alert(1)</script><img src=x onerror=alert(1)><a href="javascript:alert(1)">Lien</a>',
    )
    expect(html).toContain('<b>Club</b><br>Bienvenue')
    expect(html).not.toMatch(/<script|onclick|onerror|javascript:|<img|<a /)
    expect(html).toContain('Lien')
  })
  it('vérifie toutes les images et tous les PDF déclarés', () => {
    const assets = [
      ...sports.flatMap((s) => [
        s.logo,
        s.heroImage,
        s.contentImage,
        ...(s.pdfs?.map((p) => p.file) ?? []),
      ]),
      ...news.flatMap((n) => [n.image, n.pdf, ...(n.additionalImages ?? [])]),
    ].filter((v): v is string => Boolean(v))
    for (const file of assets) {
      expect(file.startsWith('/')).toBe(true)
      expect(existsSync(path.join(process.cwd(), 'public', file)), file).toBe(
        true,
      )
    }
    expect(new Set(sports.map((s) => s.slug)).size).toBe(sports.length)
    expect(new Set(news.map((n) => n.id)).size).toBe(news.length)
  })
})
