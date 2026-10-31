import * as React from 'react'

const SkillChip = ({ label }) => (
    <span className="inline-block text-sm px-3 py-1 mr-2 mb-2 border border-neutral-300 rounded-full bg-neutral-50 text-neutral-800">
        {label}
    </span>
)

const SkillGroup = ({ title, skills }) => (
    <section className="mb-10">
        <h2 className="text-lg font-semibold mt-0 mb-4">{title}</h2>
        <div>{skills.map(skill => (
            <SkillChip key={skill} label={skill} />
        ))}</div>
    </section>
)

const skillGroups = [
    {
        title: 'Frontend',
        skills: [
            'React',
            'Vue',
            'Nuxt',
            'Next.js',
            'TypeScript',
            'Tailwind',
            'Gatsby',
        ],
    },
    {
        title: 'Backend',
        skills: ['Node', 'PHP', 'Laravel', 'REST APIs'],
    },
    {
        title: 'Automation / AI',
        skills: [
            'n8n (self-hosted)',
            'Cursor',
            'Grok',
            'GitHub Copilot',
            'CodeRabbit',
        ],
    },
    {
        title: 'DevOps',
        skills: [
            'AWS',
            'Docker',
            'GitHub Actions',
            'CI/CD',
            'Cloudflare CDN',
            'Memcached',
            'Vite',
            'Webpack',
        ],
    },
    {
        title: 'Testing',
        skills: ['Playwright', 'Vitest', 'PHPUnit', 'SSR', 'Core Web Vitals'],
    },
]

export const SkillGroups = () => (
    <div>
        {skillGroups.map(group => (
            <SkillGroup key={group.title} {...group} />
        ))}
    </div>
)

export default SkillGroup
