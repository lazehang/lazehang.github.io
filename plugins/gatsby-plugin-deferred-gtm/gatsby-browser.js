const GTM_ID = 'GTM-KP5ZTGH'
const DATA_LAYER_NAME = 'dataLayer'

const listOfMetricsSend = new Set()

function debounce(fn, timeout) {
    let timer = null
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(fn, timeout, ...args)
    }
}

function sendToGTM({ name, value, id }, dataLayer) {
    dataLayer.push({
        event: 'core-web-vitals',
        webVitalsMeasurement: {
            name,
            id,
            value: Math.round(name === 'CLS' ? value * 1000 : value),
        },
    })
}

function sendWebVitals() {
    const win = window

    function sendData(data) {
        if (listOfMetricsSend.has(data.name)) {
            return
        }
        listOfMetricsSend.add(data.name)
        sendToGTM(data, win[DATA_LAYER_NAME])
    }

    return import('web-vitals/base').then(({ getLCP, getFID, getCLS }) => {
        const debouncedCLS = debounce(sendData, 3000)
        const debouncedLCP = debounce(sendData, 3000)
        getCLS(debouncedCLS, true)
        getFID(sendData, true)
        getLCP(debouncedLCP, true)
    })
}

function injectGtmScript() {
    if (typeof window === 'undefined' || window.__lazehangGtmLoaded) {
        return
    }
    window.__lazehangGtmLoaded = true

    window[DATA_LAYER_NAME] = window[DATA_LAYER_NAME] || []
    window[DATA_LAYER_NAME].push({ platform: 'gatsby' })
    window[DATA_LAYER_NAME].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js',
    })

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
    document.head.appendChild(script)

    if (process.env.NODE_ENV === 'production') {
        sendWebVitals().catch(() => {})
    }
}

/** Fallback if the visitor never interacts (still after load + idle). */
const GTM_FALLBACK_MS = 8000

function scheduleGtmAfterLoad() {
    const loadOnIdle = () => {
        if ('requestIdleCallback' in window) {
            window.requestIdleCallback(() => injectGtmScript(), { timeout: 2000 })
        } else {
            injectGtmScript()
        }
    }

    window.setTimeout(loadOnIdle, GTM_FALLBACK_MS)

    const onInteraction = () => {
        injectGtmScript()
    }
    window.addEventListener('pointerdown', onInteraction, {
        once: true,
        passive: true,
    })
    window.addEventListener('keydown', onInteraction, { once: true })
    window.addEventListener('touchstart', onInteraction, {
        once: true,
        passive: true,
    })
}

function deferGtmUntilAfterLoad() {
    if (document.readyState === 'complete') {
        scheduleGtmAfterLoad()
    } else {
        window.addEventListener('load', scheduleGtmAfterLoad, { once: true })
    }
}

exports.onClientEntry = () => {
    if (process.env.NODE_ENV !== 'production') {
        return
    }
    deferGtmUntilAfterLoad()
}

exports.onRouteUpdate = () => {
    if (process.env.NODE_ENV !== 'production' || !window.__lazehangGtmLoaded) {
        return
    }
    window.setTimeout(() => {
        const dataLayer = window[DATA_LAYER_NAME]
        if (dataLayer) {
            dataLayer.push({ event: 'gatsby-route-change' })
        }
    }, 50)
}
