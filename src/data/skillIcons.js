/** Maps display labels to Simple Icons slugs (null = text-only chip). */
export const skillLabelToSlug = {
    React: 'react',
    Vue: 'vuedotjs',
    Nuxt: 'nuxtdotjs',
    'Next.js': 'nextdotjs',
    TypeScript: 'typescript',
    Tailwind: 'tailwindcss',
    Gatsby: 'gatsby',
    Node: 'nodedotjs',
    PHP: 'php',
    Laravel: 'laravel',
    'GitHub Copilot': 'githubcopilot',
    AWS: 'amazonaws',
    Docker: 'docker',
    'GitHub Actions': 'githubactions',
    Cloudflare: 'cloudflare',
    'Cloudflare CDN': 'cloudflare',
    Vite: 'vite',
    Webpack: 'webpack',
    Playwright: 'playwright',
    Vitest: 'vitest',
    'Stripe Connect': 'stripe',
    JavaScript: 'javascript',
    Workers: 'cloudflare',
}

export const getSkillSlug = label => skillLabelToSlug[label] ?? null
