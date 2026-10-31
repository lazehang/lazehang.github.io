import * as React from 'react'
import { graphql } from 'gatsby'

import Bio from '../components/bio'
import ClosingCta from '../components/closingCta'
import Projects from '../components/projects'
import StacksSection from '../components/stacksSection'
import Layout from '../components/layout'
import Seo from '../components/seo'

const Index = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <Layout location={location} title={siteTitle}>
            <Bio />
            <Projects />
            <StacksSection />
            <ClosingCta />
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
