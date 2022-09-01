import * as React from 'react'
import Nav from './nav'

const Layout = ({ location, children }) => {
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath

    return (
        <div
            className="max-w-[1024px] mx-auto p-5 min-h-screen flex flex-col"
            data-is-root-path={isRootPath}
        >
            <Nav />
            <main className="m-auto">{children}</main>
            <footer className="mt-auto text-center">
                <div className="space-x-4">
                    <a
                        href="https://hk.linkedin.com/in/mangal-limbu-05a951111"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-semibold"
                    >
                        linkedin
                    </a>
                    <a
                        href="https://github.com/lazehang"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-semibold"
                    >
                        Github
                    </a>
                </div>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a>
            </footer>
        </div>
    )
}

export default Layout
