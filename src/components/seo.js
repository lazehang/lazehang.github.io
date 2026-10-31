/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ description, lang, meta, title, home = false }) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
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
    const pageTitle = home
        ? defaultTitle
        : defaultTitle && title
          ? `${title} | ${defaultTitle}`
          : title || defaultTitle

    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            title={pageTitle}
            meta={[
                {
                    name: `description`,
                    content: metaDescription
                },
                {
                    property: `og:title`,
                    content: pageTitle
                },
                {
                    property: `og:description`,
                    content: metaDescription
                },
                {
                    property: `og:type`,
                    content: `website`
                },
                {
                    name: `twitter:card`,
                    content: `summary`
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata?.social?.twitter || ``
                },
                {
                    name: `twitter:title`,
                    content: pageTitle
                },
                {
                    name: `twitter:description`,
                    content: metaDescription
                }
            ].concat(meta)}
        />
    )
}

Seo.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``
}

Seo.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
    home: PropTypes.bool
}

export default Seo
