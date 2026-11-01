import * as React from 'react'
import { FOCUS_RING_CLASS } from '../constants/contact'

const STORAGE_KEY = 'lazehang-theme'

function getPreferredTheme() {
    if (typeof window === 'undefined') return 'dark'
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme)
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) {
        meta.setAttribute('content', theme === 'dark' ? '#05070d' : '#f4f6f9')
    }
}

export default function ThemeToggle() {
    const [theme, setTheme] = React.useState('dark')

    React.useEffect(() => {
        const fromDom = document.documentElement.getAttribute('data-theme')
        const initial =
            fromDom === 'light' || fromDom === 'dark' ? fromDom : getPreferredTheme()
        setTheme(initial)
        applyTheme(initial)
    }, [])

    const toggle = () => {
        const next = theme === 'dark' ? 'light' : 'dark'
        setTheme(next)
        localStorage.setItem(STORAGE_KEY, next)
        applyTheme(next)
    }

    const label = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'

    return (
        <button
            type="button"
            className={`theme-toggle ${FOCUS_RING_CLASS}`}
            onClick={toggle}
            aria-label={label}
            title={label}
        >
            {theme === 'dark' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                    <path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                    />
                </svg>
            ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                        fill="currentColor"
                        d="M21 14.5A7.5 7.5 0 0 1 9.5 3a6.5 6.5 0 1 0 11.5 11.5Z"
                    />
                </svg>
            )}
        </button>
    )
}
