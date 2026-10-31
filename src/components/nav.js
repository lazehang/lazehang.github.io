import * as React from 'react'
import { Link } from 'gatsby'
import { FOCUS_RING_CLASS, RESUME_PATH } from '../constants/contact'

const navLinkClass = `text-[var(--ink)] font-semibold no-underline hover:underline underline-offset-4 ${FOCUS_RING_CLASS}`

export default function Nav() {
    return (
        <nav
            className="min-h-[56px] md:min-h-[64px] flex justify-between items-center gap-4 py-2"
            aria-label="Primary"
        >
            <Link
                to="/"
                className={`font-semibold text-[var(--ink)] no-underline hover:underline ${FOCUS_RING_CLASS}`}
            >
                lazehang.
            </Link>
            <div className="flex flex-wrap justify-end gap-x-6 gap-y-1 text-[var(--type-small)] font-semibold">
                <Link to="/#work" className={navLinkClass}>
                    Work
                </Link>
                <Link to="/#stacks" className={navLinkClass}>
                    Stacks
                </Link>
                <a
                    href={RESUME_PATH}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={navLinkClass}
                >
                    Resume
                </a>
            </div>
        </nav>
    )
}
