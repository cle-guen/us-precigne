import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
const root = path.resolve('out')
const expected = [
  'index.html',
  'actualites/index.html',
  'mentions-legales/index.html',
  'sports/football/index.html',
  'sports/gym/index.html',
  'sports/judo/index.html',
  'sports/tennis/index.html',
  'sports/yoga/index.html',
  '404.html',
  'sitemap.xml',
  'robots.txt',
]
for (const file of expected)
  assert(fs.existsSync(path.join(root, file)), `Export manquant : ${file}`)
let checked = 0
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name !== '_next') walk(file)
      continue
    }
    if (!entry.name.endsWith('.html')) continue
    const html = fs.readFileSync(file, 'utf8')
    assert(
      !html.includes('/_next/image?'),
      `Optimisation serveur inattendue dans ${file}`,
    )
    for (const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
      const resource = decodeURIComponent(match[1])
      if (resource.startsWith('//')) continue
      const resolved = path.join(root, resource)
      assert(
        fs.existsSync(resolved) ||
          fs.existsSync(path.join(resolved, 'index.html')),
        `Lien local cassé : ${resource} dans ${file}`,
      )
      checked++
    }
  }
}
walk(root)
console.log(
  `Export vérifié : ${expected.length} fichiers attendus, ${checked} références locales valides, aucune API d’image serveur.`,
)
