import * as React from 'react'
import Nav from './nav'
import { FOCUS_RING_CLASS, MAILTO_HIRING } from '../constants/contact'

const Layout = ({ location, children }) => {
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath

    return (
        <div className="site-shell" data-is-root-path={isRootPath}>
            <Nav />
            <main className="site-main">{children}</main>
            <footer className="site-footer">
                <div className="site-footer__row">
                    <p className="mb-0">
                        <span className="text-[var(--ink)] font-semibold">Mangal Hang Limbu</span>
                        <span aria-hidden="true"> · </span>
                        <span>© 2026</span>
                    </p>
                    <div className="site-footer__links">
                        <a
                            href="https://hk.linkedin.com/in/mangal-limbu-05a951111"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`no-underline hover:underline ${FOCUS_RING_CLASS}`}
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/lazehang"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`no-underline hover:underline ${FOCUS_RING_CLASS}`}
                        >
                            GitHub
                        </a>
                        <a
                            href={MAILTO_HIRING}
                            className={`no-underline hover:underline ${FOCUS_RING_CLASS}`}
                        >
                            Email
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout
