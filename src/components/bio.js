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
            <div className="md:order-2 relative grid grid-cols-8 grid-rows-6">
                <StaticImage
                    src="../images/profile-pic.jpg"
                    width={700}
                    height={700}
                    alt="Profile picture"
                    className="rounded-[20px] col-start-2 col-span-6 row-start-2 row-span-4"
                />
                <StaticImage
                    src="../images/portfolio/spotlight.jpg"
                    width={700}
                    alt="spotlight studio hk"
                    className="rounded-md col-start-1 col-span-2 row-start-1 row-span-2"
                />
                <StaticImage
                    src="../images/portfolio/getbarcode.jpg"
                    width={700}
                    alt="getbarcode"
                    className="rounded-md col-start-6 col-end-9 row-start-3"
                />
                <StaticImage
                    src="../images/portfolio/dibyadristy.jpg"
                    width={700}
                    alt="Dibya dristy"
                    className="rounded-md col-start-4 col-span-5 row-start-5 row-span-2 mr-4"
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
                        href="/Resume-Mangal-Limbu.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block p-3 border border-black rounded text-black font-semibold"
                    >
                        Checkout My Resume
                    </a>
                </div>
            )}
        </div>
    )
}

export default Bio
