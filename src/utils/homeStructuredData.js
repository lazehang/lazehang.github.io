const GITHUB_URL = 'https://github.com/lazehang'
const LINKEDIN_URL = 'https://hk.linkedin.com/in/mangal-limbu-05a951111'

/**
 * JSON-LD @graph for home: Person + WebSite (facts from siteMetadata / content locks only).
 */
export function homeStructuredData({ siteUrl, description, authorName, jobTitle }) {
    const url = (siteUrl || 'https://www.lazehang.com').replace(/\/$/, '')

    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Person',
                name: authorName || 'Mangal Hang Limbu',
                alternateName: ['Laze', 'lazehang'],
                url: `${url}/`,
                email: 'lazehang@gmail.com',
                jobTitle: jobTitle || 'full-stack developer',
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Hong Kong'
                },
                sameAs: [GITHUB_URL, LINKEDIN_URL]
            },
            {
                '@type': 'WebSite',
                name: authorName || 'Mangal Hang Limbu',
                alternateName: 'lazehang',
                url: `${url}/`,
                description: description || undefined
            }
        ]
    }
}
