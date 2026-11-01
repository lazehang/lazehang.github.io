/**
 * Build an absolute URL from siteUrl + pathname (home always ends with /).
 */
export function absoluteUrl(siteUrl, pathname) {
    const base = (siteUrl || '').replace(/\/$/, '')
    if (!pathname || pathname === '/') {
        return `${base}/`
    }
    const path = pathname.startsWith('/') ? pathname : `/${pathname}`
    return `${base}${path}`
}
