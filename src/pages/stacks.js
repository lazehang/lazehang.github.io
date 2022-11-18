import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

export default function Stacks({ data, location }) {
    useEffect(() => {
        const script = document.createElement('script')

        script.src = 'https://cdn1.stackshare.io/javascripts/client-code.js'
        script.async = true

        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    return (
        <Layout location={location}>
            <>
                <h2 className="">Tech Stacks</h2>
                <a
                    data-theme="light"
                    data-layers="1,2,3,4"
                    data-stack-embed="true"
                    href="https://embed.stackshare.io/stacks/embed/772aaecebae68c21ab029d4508561b"
                ></a>
            </>
        </Layout>
    )
}

export const Head = () => <Seo title="Stacks" />

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
