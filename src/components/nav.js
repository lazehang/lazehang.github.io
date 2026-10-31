import * as React from 'react'
import { Link } from 'gatsby'

const navLinkClass =
    'text-black underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'

export default function Nav() {
    return (
        <nav className="pb-2 md:pb-5 flex justify-between items-center gap-4">
            <Link
                to="/"
                className="font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
                lazehang.
            </Link>
            <div className="flex flex-wrap justify-end gap-x-6 gap-y-1 text-sm font-semibold">
                <Link to="/#work" className={navLinkClass}>
                    Work
                </Link>
                <Link to="/#stacks" className={navLinkClass}>
                    Stacks
                </Link>
                <a
                    href="/Resume-Mangal-Hang-Limbu.pdf"
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
