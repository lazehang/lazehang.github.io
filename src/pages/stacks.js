import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { SkillGroups } from '../components/skillGroup'

export default function Stacks({ location }) {
    return (
        <Layout location={location}>
            <h1 className="mt-0">Tech stacks</h1>
            <p className="max-w-2xl text-neutral-700">
                Tools I use day to day, grouped for hiring conversations.
            </p>
            <div className="py-10">
                <SkillGroups />
            </div>
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
