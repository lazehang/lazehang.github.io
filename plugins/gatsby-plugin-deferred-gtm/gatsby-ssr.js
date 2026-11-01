const React = require('react')

const GTM_ID = 'GTM-KP5ZTGH'

exports.onRenderBody = ({ setPreBodyComponents }) => {
    if (process.env.NODE_ENV !== 'production') {
        return
    }

    setPreBodyComponents([
        React.createElement(
            'noscript',
            { key: 'gtm-noscript' },
            React.createElement('iframe', {
                src: `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`,
                height: '0',
                width: '0',
                style: { display: 'none', visibility: 'hidden' },
                'aria-hidden': 'true',
                title: 'Google Tag Manager',
            })
        ),
    ])
}
