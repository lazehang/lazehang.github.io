import * as React from 'react'

const THEME_FOUC_SCRIPT = `(function(){try{var k='lazehang-theme';var s=localStorage.getItem(k);var t=s||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);var m=document.querySelector('meta[name=theme-color]');if(m)m.setAttribute('content',t==='dark'?'#05070d':'#f4f6f9');}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`

/** Preload weights used above the fold (h1 @ 500, body/lead @ 400). */
const INTER_WOFF2_PRELOADS = [
    '/fonts/inter-latin-400-normal.woff2',
    '/fonts/inter-latin-500-normal.woff2',
]

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
    setHtmlAttributes({ 'data-theme': 'dark' })
    setHeadComponents([
        <script key="theme-fouc" dangerouslySetInnerHTML={{ __html: THEME_FOUC_SCRIPT }} />,
        <meta key="theme-color" name="theme-color" content="#05070d" />,
        ...INTER_WOFF2_PRELOADS.map(href => (
            <link
                key={`preload-${href}`}
                rel="preload"
                href={href}
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
            />
        )),
    ])
}
