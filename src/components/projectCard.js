import * as React from 'react'
import SkillChip from './skillChip'
import { FOCUS_RING_CLASS } from '../constants/contact'

const caseAccentMap = {
    GEMGEM: 'var(--accent-cyan)',
    UNDONE: 'var(--accent)',
    ItineraryEdge: 'var(--accent-violet)',
}

const ProjectCaseCard = ({
    title,
    roleKind,
    dates,
    sideProject = false,
    bullets,
    tech,
    liveUrl,
    repoUrl,
    mediaSrc,
    mediaAlt,
}) => (
    <article
        className="case-card"
        style={{ '--case-accent': caseAccentMap[title] || 'var(--accent)' }}
    >
        <div className="case-grid">
            <div className="case-meta">
                {dates && <div className="tabular-nums">{dates}</div>}
                <div className="case-meta__role">{roleKind}</div>
                {sideProject && <span className="case-meta__badge">Side project</span>}
            </div>
            <div className="case-main">
                <div className="case-media" aria-hidden={!mediaSrc}>
                    {mediaSrc ? (
                        <img src={mediaSrc} alt={mediaAlt || `${title} project`} />
                    ) : null}
                </div>
                <h3 className="case-title">{title}</h3>
                <ul className="case-bullets">
                    {bullets.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                <div className="mb-3 flex flex-wrap">
                    {tech.map(t => (
                        <SkillChip key={t} label={t} />
                    ))}
                </div>
                {(liveUrl || repoUrl) && (
                    <div className="space-x-4 text-[var(--text-sm)] font-semibold">
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
            </div>
        </div>
    </article>
)

export default ProjectCaseCard
