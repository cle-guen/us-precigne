import { readFile, realpath, stat } from 'node:fs/promises'
import { createServer } from 'node:http'
import path from 'node:path'

const root = await realpath('out').catch(() => {
  throw new Error('Lancez pnpm build avant pnpm start')
})
const port = Number(process.env.PORT || 3000)
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
}
createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method || '')) {
    response.writeHead(405, { Allow: 'GET, HEAD' })
    response.end()
    return
  }
  try {
    const pathname = decodeURIComponent(
      new URL(request.url || '/', 'http://localhost').pathname,
    )
    let file = path.resolve(root, `.${pathname}`)
    if (file !== root && !file.startsWith(`${root}${path.sep}`)) {
      response.writeHead(403)
      response.end()
      return
    }
    let status = 200
    try {
      if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html')
      file = await realpath(file)
      if (!file.startsWith(`${root}${path.sep}`))
        throw new Error('Outside export')
      if (!(await stat(file)).isFile()) throw new Error('Not a file')
    } catch {
      status = 404
      file = path.join(root, '404.html')
    }
    const body = await readFile(file)
    response.writeHead(status, {
      'Content-Type': types[path.extname(file)] || 'application/octet-stream',
      'Content-Length': body.length,
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': 'no-store',
    })
    response.end(request.method === 'HEAD' ? undefined : body)
  } catch {
    response.writeHead(400)
    response.end('Requête invalide')
  }
}).listen(port, '127.0.0.1', () =>
  console.log(`Aperçu local : http://localhost:${port}`),
)
