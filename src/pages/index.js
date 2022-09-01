import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const posts = data.allMarkdownRemark.nodes

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="Home" />
            <Bio />
            {/* <div>
        <h2>Latest Articles</h2>
        <ol style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small>{post.frontmatter.date}</small>
                  </header>
                </article>
              </li>
            )
          })}
        </ol>
      </div> */}
            {/* <section>
        <h2>Projects</h2>
        <div style={{ display: "flex", flexWrap: "wrap", margin: "0 -5px" }}>
          {posts.map((post, index) => (
            <div
              style={{
                width: index === 0 ? "100%" : "50%",
                padding: "5px",
                height: "100%",
              }}
            >
              <div style={{ border: "1px solid black", padding: "5px" }}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">
                          {post.frontmatter.title || post.fields.slug}
                        </span>
                      </Link>
                    </h2>
                  </header>
                  <p>{post.frontmatter.description}</p>
                </article>
              </div>
            </div>
          ))}
        </div>
      </section> */}
        </Layout>
    )
}

export default BlogIndex

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
