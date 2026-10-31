import * as React from 'react'
import manifest from '../data/skillIconManifest.json'
import { getSkillSlug } from '../data/skillIcons'
import { FOCUS_RING_CLASS } from '../constants/contact'

const chipBase =
    'inline-flex items-center gap-2 text-[var(--type-small)] px-3 py-2 mr-2 mb-2 rounded-[var(--radius-chip)] bg-[var(--surface-2)] text-[var(--ink)] min-h-[44px]'

const SkillChip = ({ label, layout = 'chip' }) => {
    const slug = getSkillSlug(label)
    const icon = slug ? manifest[slug] : null
    const rowClass =
        layout === 'row'
            ? 'flex w-full max-w-md justify-between items-center mr-0 mb-0 rounded-none bg-transparent px-0 py-0 min-h-[44px] hover:bg-[var(--surface-2)] hover:rounded-[var(--radius-control)] hover:px-2'
            : chipBase

    if (!icon) {
        return (
            <span className={`${rowClass} ${layout === 'chip' ? '' : 'text-[var(--muted)]'}`}>
                {label}
            </span>
        )
    }

    const brand = `#${icon.hex}`

    return (
        <span
            tabIndex={0}
            className={`group/chip ${rowClass} transition-colors ${FOCUS_RING_CLASS}`}
            style={{ '--skill-brand': brand }}
        >
            <span className="inline-flex items-center gap-2">
                <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 shrink-0 fill-[var(--muted)] transition-colors group-hover/chip:fill-[var(--skill-brand)] group-focus-visible/chip:fill-[var(--skill-brand)]"
                >
                    <path d={icon.path} />
                </svg>
                <span>{label}</span>
            </span>
        </span>
    )
}

export default SkillChip
