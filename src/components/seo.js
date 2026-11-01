/**
 * SEO metadata for Gatsby Head (https://gatsby.dev/gatsby-head)
 */

import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { absoluteUrl } from '../utils/absoluteUrl'

const OG_IMAGE_PATH = '/og-default.jpg'

const Seo = ({
    description,
    meta = [],
    title,
    home = false,
    pathname = '/'
}) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        siteUrl
                        social {
                            twitter
                        }
                    }
                }
            }
        `
    )

    const metaDescription = description || site.siteMetadata.description
    const defaultTitle = site.siteMetadata?.title
    const siteUrl = site.siteMetadata?.siteUrl || ''
    const ogImage = siteUrl ? `${siteUrl}${OG_IMAGE_PATH}` : OG_IMAGE_PATH
    const canonicalUrl = siteUrl ? absoluteUrl(siteUrl, pathname) : null
    const twitterHandle = site.siteMetadata?.social?.twitter

    const pageTitle = home
        ? defaultTitle
        : defaultTitle && title
          ? `${title} | ${defaultTitle}`
          : title || defaultTitle

    return (
        <>
            <title>{pageTitle}</title>
            <meta name="description" content={metaDescription} />
            {canonicalUrl ? (
                <link rel="canonical" href={canonicalUrl} />
            ) : null}
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content="website" />
            {canonicalUrl ? (
                <meta property="og:url" content={canonicalUrl} />
            ) : null}
            <meta property="og:image" content={ogImage} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={ogImage} />
            {twitterHandle ? (
                <meta name="twitter:creator" content={twitterHandle} />
            ) : null}
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={metaDescription} />
            {meta.map((entry, i) => (
                <meta key={i} {...entry} />
            ))}
        </>
    )
}

Seo.propTypes = {
    description: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
    home: PropTypes.bool,
    pathname: PropTypes.string
}

export default Seo
