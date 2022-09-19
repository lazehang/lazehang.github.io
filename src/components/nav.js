import * as React from 'react'
import { Link } from 'gatsby'

export default function Nav() {
    return (
        <nav className="pb-2 md:pb-5">
            <Link to={'/'} className="font-bold">
                lazehang.
            </Link>
        </nav>
    )
}
