/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Bio = () => {
    const data = useStaticQuery(graphql`
        query BioQuery {
            site {
                siteMetadata {
                    author {
                        name
                        summary
                    }
                    social {
                        twitter
                    }
                }
            }
        }
    `)

    // Set these values by editing "siteMetadata" in gatsby-config.js
    const author = data.site.siteMetadata?.author

    return (
        <div className="grid md:grid-cols-2 gap-10 items-center justify-center md:py-10">
            <div className="md:order-2">
                <StaticImage
                    src="../images/profile-pic.jpg"
                    width={700}
                    height={700}
                    alt="Profile picture"
                    className="rounded-[20px]"
                />
            </div>
            {author?.name && (
                <div className="md:order-1 bg-white">
                    <h1 className="mt-0">
                        I'm {author.name}, a full-stack web developer.
                    </h1>
                    <p className="max-w-lg pb-2 mb-0">
                        {author?.summary || null}
                    </p>
                    <p className="max-w-lg pb-2">
                        I specialize in building ⚡️ blazing fast, 📉 data
                        driven web solutions. You can connect with me on{' '}
                        <a
                            href="https://hk.linkedin.com/in/mangal-limbu-05a951111"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline font-semibold"
                        >
                            linkedin
                        </a>{' '}
                        or reach me out on{' '}
                        <a
                            href="mailto:hello@lazehang.com"
                            rel="noopener noreferrer"
                            className="underline font-semibold"
                        >
                            hello@lazehang.com
                        </a>
                        {/* <a
                            href="https://github.com/lazehang"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline font-semibold"
                        >
                            Github
                        </a> */}
                        .
                    </p>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block p-3 border border-black rounded text-black font-bold"
                    >
                        Checkout My Resume
                    </a>
                </div>
            )}
        </div>
    )
}

export default Bio
