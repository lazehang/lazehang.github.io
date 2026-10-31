import * as React from 'react'
import Nav from './nav'
import { FOCUS_RING_CLASS } from '../constants/contact'

const Layout = ({ location, children }) => {
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath

    return (
        <div
            className="max-w-[1120px] mx-auto min-h-screen flex flex-col bg-[var(--ground)]"
            style={{ padding: 'var(--page-margin)' }}
            data-is-root-path={isRootPath}
        >
            <Nav />
            <main className="w-full flex-1">{children}</main>
            <footer className="mt-auto pt-12 pb-4 text-[var(--type-caption)] text-[var(--muted)]">
                <p className="mb-0 text-center md:text-left">
                    <span className="text-[var(--ink)] font-semibold">Mangal Hang Limbu</span>
                    <span aria-hidden="true"> · </span>
                    <a
                        href="https://hk.linkedin.com/in/mangal-limbu-05a951111"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-[var(--ink)] font-semibold ${FOCUS_RING_CLASS}`}
                    >
                        LinkedIn
                    </a>
                    <span aria-hidden="true"> · </span>
                    <a
                        href="https://github.com/lazehang"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-[var(--ink)] font-semibold ${FOCUS_RING_CLASS}`}
                    >
                        GitHub
                    </a>
                    <span aria-hidden="true"> · </span>
                    <span>© {new Date().getFullYear()}</span>
                </p>
            </footer>
        </div>
    )
}

export default Layout
