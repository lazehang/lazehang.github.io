import * as React from 'react'
import manifest from '../data/skillIconManifest.json'
import { skillGroupDefs } from './skillGroup'
import { getSkillSlug } from '../data/skillIcons'
import { FOCUS_RING_CLASS } from '../constants/contact'

const ALL_ID = 'stacks'

function buildSkillIndex() {
    return skillGroupDefs.flatMap(group =>
        group.skills.map(skill => ({
            label: skill,
            groupId: group.id,
        }))
    )
}

const allSkills = buildSkillIndex()

const MosaicTile = ({ label }) => {
    const slug = getSkillSlug(label)
    const icon = slug ? manifest[slug] : null
    const brand = icon ? `#${icon.hex}` : 'var(--accent)'

    return (
        <span
            role="listitem"
            tabIndex={0}
            className={`mosaic-tile group/mos ${FOCUS_RING_CLASS}`}
            style={{ '--skill-brand': brand }}
        >
            {icon && (
                <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-[var(--muted)] group-hover/mos:fill-[var(--skill-brand)] group-focus-visible/mos:fill-[var(--skill-brand)] transition-colors"
                >
                    <path d={icon.path} />
                </svg>
            )}
            <span>{label}</span>
        </span>
    )
}

const StackMosaic = ({ activeGroupId = ALL_ID }) => {
    const filtered =
        activeGroupId === ALL_ID
            ? allSkills
            : allSkills.filter(s => s.groupId === activeGroupId)

    const countLabel =
        activeGroupId === ALL_ID
            ? `Showing all ${filtered.length} tools`
            : `Showing ${filtered.length} tools`

    return (
        <div>
            <div className="mosaic-grid" role="list">
                {filtered.map(({ label }) => (
                    <MosaicTile key={label} label={label} />
                ))}
            </div>
            <p className="mosaic-count mb-0">{countLabel}</p>
        </div>
    )
}

export { ALL_ID }
export default StackMosaic
