import * as React from 'react'
import { skillGroupDefs } from './skillGroup'
import StackMosaic, { ALL_ID } from './stackMosaic'
import { FOCUS_RING_CLASS } from '../constants/contact'

const filters = [
    { id: ALL_ID, label: 'All' },
    ...skillGroupDefs.map(g => ({ id: g.id, label: g.title })),
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
        <>
            <nav aria-label="Stack groups" className="filter-pills">
                {filters.map(({ id, label }) => {
                    const href = id === ALL_ID ? '/#stacks' : `/#${id}`
                    const isActive = activeId === id
                    return (
                        <a
                            key={id}
                            href={href}
                            className={`filter-pill ${isActive ? 'is-active' : ''} ${FOCUS_RING_CLASS}`}
                            aria-current={isActive ? 'true' : undefined}
                            onClick={() => setActiveId(id)}
                        >
                            {label}
                        </a>
                    )
                })}
            </nav>
            <StackMosaic activeGroupId={activeId} />
        </>
    )
}

export default StackGroupFilter
