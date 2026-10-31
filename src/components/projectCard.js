import * as React from 'react'
import SkillChip from './skillChip'
import { FOCUS_RING_CLASS } from '../constants/contact'

const ProjectLedgerEntry = ({
    title,
    roleKind,
    dates,
    sideProject = false,
    bullets,
    tech,
    liveUrl,
    repoUrl,
}) => (
    <article className="project-ledger-entry max-w-[var(--column)]">
        <header className="mb-3">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="mt-0 mb-0 text-[1.125rem] md:text-[1.25rem] font-semibold text-inherit">
                    {title}
                </h3>
                {dates && (
                    <span className="text-[var(--type-small)] tabular-nums text-inherit shrink-0">
                        {dates}
                    </span>
                )}
            </div>
            <p className="text-[var(--type-small)] text-[var(--muted)] mb-0 mt-1 flex flex-wrap items-center gap-2">
                <span>{roleKind}</span>
                {sideProject && (
                    <span className="text-[var(--type-caption)] px-2.5 py-1 rounded-full bg-[var(--surface)] text-[var(--ink)]">
                        Side project
                    </span>
                )}
            </p>
        </header>
        <ul className="mt-4 mb-4 pl-5 list-disc">
            {bullets.map((item, i) => (
                <li key={i} className="mb-2 text-inherit text-[var(--type-body)]">
                    {item}
                </li>
            ))}
        </ul>
        <div className="mb-3 flex flex-wrap">
            {tech.map(t => (
                <SkillChip key={t} label={t} />
            ))}
        </div>
        {(liveUrl || repoUrl) && (
            <div className="space-x-4 text-[var(--type-small)] font-semibold">
                {liveUrl && (
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={FOCUS_RING_CLASS}
                    >
                        Live
                    </a>
                )}
                {repoUrl && (
                    <a
                        href={repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={FOCUS_RING_CLASS}
                    >
                        Repo
                    </a>
                )}
            </div>
        )}
    </article>
)

export default ProjectLedgerEntry
