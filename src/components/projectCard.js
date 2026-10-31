import * as React from 'react'
import SkillChip from './skillChip'

const ProjectCard = ({
    title,
    meta,
    sideProject = false,
    bullets,
    tech,
    liveUrl,
    repoUrl,
}) => (
    <article className="border border-neutral-200 rounded-lg p-6 bg-white h-full flex flex-col shadow-sm hover:shadow-md transition-shadow duration-200">
        <header>
            <h3 className="mt-0 mb-2 text-xl font-semibold">{title}</h3>
            <p className="text-sm text-neutral-600 mb-0 flex flex-wrap items-center gap-2">
                <span>{meta}</span>
                {sideProject && (
                    <span className="text-xs font-semibold uppercase tracking-wide px-2 py-0.5 border border-neutral-400 rounded-full">
                        Side project
                    </span>
                )}
            </p>
        </header>
        <ul className="mt-4 mb-4 pl-5 list-disc flex-grow">
            {bullets.map((item, i) => (
                <li key={i} className="mb-2 text-neutral-800">
                    {item}
                </li>
            ))}
        </ul>
        <div className="mb-4 flex flex-wrap">
            {tech.map(t => (
                <SkillChip key={t} label={t} />
            ))}
        </div>
        {(liveUrl || repoUrl) && (
            <div className="space-x-4 text-sm font-semibold">
                {liveUrl && (
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Live
                    </a>
                )}
                {repoUrl && (
                    <a
                        href={repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Repo
                    </a>
                )}
            </div>
        )}
    </article>
)

export default ProjectCard
