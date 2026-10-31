/**
 * One-off script: write Simple Icons SVGs to static/icons/ for skills that have official icons.
 */
const fs = require('fs')
const path = require('path')
const si = require('simple-icons')

const SLUGS = [
    'react',
    'vuedotjs',
    'nuxtdotjs',
    'nextdotjs',
    'typescript',
    'tailwindcss',
    'gatsby',
    'nodedotjs',
    'php',
    'laravel',
    'githubcopilot',
    'amazonaws',
    'docker',
    'githubactions',
    'cloudflare',
    'vite',
    'webpack',
    'playwright',
    'vitest',
    'stripe',
    'javascript',
]

const outDir = path.join(__dirname, '../static/icons')
fs.mkdirSync(outDir, { recursive: true })

const manifest = {}

for (const slug of SLUGS) {
    const key = Object.keys(si).find(
        k => k.startsWith('si') && si[k].slug === slug
    )
    if (!key) {
        console.warn('Missing icon:', slug)
        continue
    }
    const icon = si[key]
    const svg = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="${icon.path}"/></svg>`
    fs.writeFileSync(path.join(outDir, `${slug}.svg`), svg)
    manifest[slug] = { hex: icon.hex, title: icon.title, path: icon.path }
}

fs.writeFileSync(
    path.join(__dirname, '../src/data/skillIconManifest.json'),
    JSON.stringify(manifest, null, 2)
)

console.log('Wrote', Object.keys(manifest).length, 'icons to static/icons/')
