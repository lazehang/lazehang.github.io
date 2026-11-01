import * as React from 'react'
import manifest from '../data/skillIconManifest.json'
import { getSkillSlug } from '../data/skillIcons'
import { FOCUS_RING_CLASS } from '../constants/contact'

const SkillChip = ({ label }) => {
    const slug = getSkillSlug(label)
    const icon = slug ? manifest[slug] : null
    const brand = icon ? `#${icon.hex}` : 'var(--accent)'

    return (
        <span
            tabIndex={0}
            className={`skill-chip group/chip ${FOCUS_RING_CLASS}`}
            style={{ '--skill-brand': brand }}
        >
            {icon && (
                <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path d={icon.path} />
                </svg>
            )}
            <span>{label}</span>
        </span>
    )
}

export default SkillChip
