import * as React from 'react'
import ProjectLedgerEntry from './projectCard'

const projects = [
    {
        title: 'GEMGEM',
        roleKind: 'Full-stack / marketplace',
        dates: '02/2023–October 2026',
        bullets: [
            'Marketplace web app connecting buyers and sellers.',
            'Nuxt front end, migrated from v2 to v3.',
            'Stripe Connect payments and seller payouts.',
        ],
        tech: ['Nuxt', 'Vue', 'Stripe Connect', 'TypeScript', 'JavaScript'],
    },
    {
        title: 'UNDONE',
        roleKind: 'Full-stack',
        dates: '08/2018–01/2023',
        bullets: [
            'Laravel API after migrating from CodeIgniter to Laravel ADR.',
            'Nuxt.js SSR storefront with roughly 50% faster loads (per resume).',
        ],
        tech: ['Laravel', 'PHP', 'Nuxt', 'SSR'],
    },
    {
        title: 'ItineraryEdge',
        roleKind: 'Open-core · not employment',
        sideProject: true,
        bullets: [
            'Edge visa itinerary on Cloudflare Pages, Workers, and D1.',
            'Generate and PDF packet demos for travel workflows.',
        ],
        tech: ['Next.js', 'Workers', 'D1', 'TypeScript'],
        repoUrl: 'https://github.com/lazehang/itineraryedge',
    },
]

const Projects = () => (
    <section
        id="work"
        className="section-enter scroll-mt-6"
        style={{ paddingTop: 'var(--section-gap)', paddingBottom: 'var(--section-gap)' }}
    >
        <h2 className="mt-0 max-w-[var(--column)]">Selected work</h2>
        <p className="max-w-[var(--column)] text-[var(--muted)] text-[var(--type-body)]">
            Roles and products from my resume — side projects labeled as such.
        </p>
        <div className="projects-ledger mt-10">
            {projects.map(project => (
                <ProjectLedgerEntry key={project.title} {...project} />
            ))}
        </div>
    </section>
)

export default Projects
