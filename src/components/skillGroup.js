import * as React from 'react'
import SkillChip from './skillChip'

export const skillGroupDefs = [
    {
        id: 'stacks-frontend',
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
        id: 'stacks-backend',
        title: 'Backend',
        skills: ['Node', 'PHP', 'Laravel', 'REST APIs'],
    },
    {
        id: 'stacks-automation-ai',
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
        id: 'stacks-devops',
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
        id: 'stacks-testing',
        title: 'Testing',
        skills: ['Playwright', 'Vitest', 'PHPUnit', 'SSR', 'Core Web Vitals'],
    },
]

const SkillGroup = ({ id, title, skills }) => (
    <section id={id} className="scroll-mt-24 mb-10 last:mb-0">
        <h3 className="text-[var(--type-body)] font-normal text-[var(--muted)] mt-0 mb-4">
            {title}
        </h3>
        <ul className="list-none p-0 m-0 space-y-1">
            {skills.map(skill => (
                <li key={skill}>
                    <SkillChip label={skill} layout="row" />
                </li>
            ))}
        </ul>
    </section>
)

export const SkillGroups = () => (
    <div>
        {skillGroupDefs.map(group => (
            <SkillGroup key={group.id} {...group} />
        ))}
    </div>
)

export default SkillGroup
