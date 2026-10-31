import * as React from 'react'
import ProjectCard from './projectCard'

const projects = [
    {
        title: 'GEMGEM',
        meta: 'Full-stack / marketplace · 02/2023–October 2026',
        bullets: [
            'Marketplace web app connecting buyers and sellers.',
            'Nuxt front end, migrated from v2 to v3.',
            'Stripe Connect payments and seller payouts.',
        ],
        tech: ['Nuxt', 'Vue', 'Stripe Connect', 'TypeScript', 'JavaScript'],
    },
    {
        title: 'UNDONE',
        meta: 'Full-stack · 08/2018–01/2023',
        bullets: [
            'Laravel API after migrating from CodeIgniter to Laravel ADR.',
            'Nuxt.js SSR storefront with roughly 50% faster loads (per resume).',
        ],
        tech: ['Laravel', 'PHP', 'Nuxt', 'SSR'],
    },
    {
        title: 'ItineraryEdge',
        meta: 'Open-core · not employment',
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
    <section className="py-10 pb-16">
        <h2 className="mt-0">Selected work</h2>
        <p className="max-w-2xl text-neutral-700">
            Roles and products from my resume — side projects labeled as such.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {projects.map(project => (
                <ProjectCard key={project.title} {...project} />
            ))}
        </div>
    </section>
)

export default Projects
