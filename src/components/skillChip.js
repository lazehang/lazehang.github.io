import * as React from 'react'
import manifest from '../data/skillIconManifest.json'
import { getSkillSlug } from '../data/skillIcons'

const SkillChip = ({ label }) => {
    const slug = getSkillSlug(label)
    const icon = slug ? manifest[slug] : null

    if (!icon) {
        return (
            <span className="inline-flex items-center text-sm px-3 py-1.5 mr-2 mb-2 border border-neutral-300 rounded-full bg-white/90 text-neutral-800">
                {label}
            </span>
        )
    }

    const brand = `#${icon.hex}`

    return (
        <span
            tabIndex={0}
            className="group/chip inline-flex items-center gap-2 text-sm px-3 py-1.5 mr-2 mb-2 border border-neutral-300 rounded-full bg-white/90 text-neutral-800 transition-colors hover:border-neutral-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            style={{ '--skill-brand': brand }}
        >
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="w-4 h-4 shrink-0 fill-neutral-500 transition-colors group-hover/chip:fill-[var(--skill-brand)] group-focus-visible/chip:fill-[var(--skill-brand)]"
            >
                <path d={icon.path} />
            </svg>
            <span>{label}</span>
        </span>
    )
}

export default SkillChip
