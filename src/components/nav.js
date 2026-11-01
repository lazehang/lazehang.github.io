import * as React from 'react'
import { Link } from 'gatsby'
import { FOCUS_RING_CLASS, RESUME_PATH } from '../constants/contact'
import ThemeToggle from './themeToggle'

export default function Nav() {
    const [scrolled, setScrolled] = React.useState(false)

    React.useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <nav
            className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}
            aria-label="Primary"
        >
            <Link
                to="/"
                className={`site-nav__link font-semibold no-underline hover:underline ${FOCUS_RING_CLASS}`}
            >
                lazehang.
            </Link>
            <div className="site-nav__links">
                <Link to="/#work" className={`site-nav__link ${FOCUS_RING_CLASS}`}>
                    Work
                </Link>
                <Link to="/#stacks" className={`site-nav__link ${FOCUS_RING_CLASS}`}>
                    Stacks
                </Link>
                <a
                    href={RESUME_PATH}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`nav-cta ${FOCUS_RING_CLASS}`}
                >
                    Resume
                </a>
                <ThemeToggle />
            </div>
        </nav>
    )
}
