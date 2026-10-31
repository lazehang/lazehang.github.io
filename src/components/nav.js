import * as React from 'react'
import { Link } from 'gatsby'

export default function Nav() {
    return (
        <nav className="pb-2 md:pb-5 flex justify-between items-center gap-4">
            <Link to={'/'} className="font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                lazehang.
            </Link>
            <div className="space-x-6 text-sm font-semibold">
                <Link
                    to={'/stacks'}
                    className="text-black underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Stacks
                </Link>
                <a
                    href="/Resume-Mangal-Hang-Limbu.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Resume
                </a>
            </div>
        </nav>
    )
}
