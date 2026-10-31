import * as React from 'react'
import SkillChip from './skillChip'

const SkillGroup = ({ title, skills }) => (
    <section className="mb-10">
        <h3 className="text-lg font-semibold mt-0 mb-4">{title}</h3>
        <div className="flex flex-wrap">
            {skills.map(skill => (
                <SkillChip key={skill} label={skill} />
            ))}
        </div>
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
