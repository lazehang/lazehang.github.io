import * as React from 'react'
import { Link } from 'gatsby'

export default function Nav() {
    return (
        <nav className="pb-2 md:pb-5 flex justify-between">
            <Link to={'/'} className="font-bold">
                lazehang.
            </Link>
            <Link to={'/stacks'} className="text-black">
                <img src="https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat" />
            </Link>
        </nav>
    )
}
