import * as React from 'react'
import { graphql } from 'gatsby'

import Bio from '../components/bio'
import Projects from '../components/projects'
import Layout from '../components/layout'
import Seo from '../components/seo'

const Index = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <Layout location={location} title={siteTitle}>
            <Bio />
            <Projects />
        </Layout>
    )
}

export const Head = () => <Seo home />

export default Index

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
            nodes {
                excerpt
                fields {
                    slug
                }
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    description
                }
            }
        }
    }
`
