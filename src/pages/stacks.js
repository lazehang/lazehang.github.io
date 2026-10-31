import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const SITE_URL = 'https://www.lazehang.com'

export default function StacksRedirect({ location }) {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.location.replace(`${window.location.origin}/#stacks`)
        }
    }, [])

    return (
        <Layout location={location}>
            <p className="text-neutral-700">
                Redirecting to the home page stacks section…{' '}
                <a href="/#stacks" className="font-semibold underline">
                    Continue
                </a>
            </p>
        </Layout>
    )
}

export const Head = () => (
    <>
        <Seo title="Stacks" />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta httpEquiv="refresh" content={`0;url=${SITE_URL}/#stacks`} />
    </>
)

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
