import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'
import { defineConfig, globalIgnores } from 'eslint/config'
export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  globalIgnores([
    '.next/**',
    'out/**',
    'node_modules/**',
    '.pnpm-store/**',
    'next-env.d.ts',
  ]),
])
