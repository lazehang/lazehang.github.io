import * as React from 'react'
import { skillGroupDefs } from './skillGroup'
import { FOCUS_RING_CLASS } from '../constants/contact'

const ALL_ID = 'stacks'

const filters = [
    ...skillGroupDefs.map(g => ({ id: g.id, label: g.title })),
    { id: ALL_ID, label: 'All' },
]

function hashToActiveId() {
    if (typeof window === 'undefined') return ALL_ID
    const hash = window.location.hash.replace(/^#/, '')
    if (!hash || hash === ALL_ID) return ALL_ID
    return filters.some(f => f.id === hash) ? hash : ALL_ID
}

const StackGroupFilter = () => {
    const [activeId, setActiveId] = React.useState(ALL_ID)

    React.useEffect(() => {
        setActiveId(hashToActiveId())
        const onHash = () => setActiveId(hashToActiveId())
        window.addEventListener('hashchange', onHash)
        return () => window.removeEventListener('hashchange', onHash)
    }, [])

    return (
        <nav
            aria-label="Stack groups"
            className="flex flex-wrap gap-x-1 gap-y-2 mb-10 -mx-2"
        >
            {filters.map(({ id, label }) => {
                const href = id === ALL_ID ? '/#stacks' : `/#${id}`
                const isActive = activeId === id
                return (
                    <a
                        key={id}
                        href={href}
                        className={`inline-flex items-center min-h-[44px] px-3 text-[var(--type-body)] text-[var(--ink)] no-underline hover:underline ${FOCUS_RING_CLASS} ${
                            isActive
                                ? 'border-b-2 border-[var(--accent)] pb-0.5 font-semibold'
                                : 'border-b-2 border-transparent'
                        }`}
                        aria-current={isActive ? 'true' : undefined}
                    >
                        {label}
                    </a>
                )
            })}
        </nav>
    )
}

export default StackGroupFilter
