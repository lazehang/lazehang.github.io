import * as React from 'react'

const THEME_FOUC_SCRIPT = `(function(){try{var k='lazehang-theme';var s=localStorage.getItem(k);var t=s||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);var m=document.querySelector('meta[name=theme-color]');if(m)m.setAttribute('content',t==='dark'?'#05070d':'#f4f6f9');}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
    setHtmlAttributes({ 'data-theme': 'dark' })
    setHeadComponents([
        <script key="theme-fouc" dangerouslySetInnerHTML={{ __html: THEME_FOUC_SCRIPT }} />,
        <meta key="theme-color" name="theme-color" content="#05070d" />,
    ])
}
