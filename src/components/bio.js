/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import GridImage from './gridImage'
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
        <div className="grid md:grid-cols-2 gap-10 items-center justify-center pb-10 md:py-10">
            <div className="md:order-2 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full h-[75%] w-[95%] bg-gradient-to-r to-[#3730a3] via-yellow-100 from-[#e8ce69] shadow-md" />
                <GridImage />
            </div>
            {author?.name && (
                <div className="md:order-1 bg-white">
                    <h1 className="mt-0">
                        I'm {author.name}, a full-stack web developer.
                    </h1>
                    <p className="max-w-lg pb-2 mb-0">
                        {author?.summary || null}
                    </p>
                    <p className="max-w-lg">
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
                    <div className="mt-16 md:mt-0 text-center md:text-left max-w-xs mx-auto md:mx-0">
                        <div className="text-left text-sm pb-1 pr-4 border-black font-semibold">
                            Got a project?
                        </div>
                        <a
                            href="mailto:hello@lazehang.com"
                            className="text-base text-center block mx-auto md:inline-block px-6 py-2 border border-black text-white bg-black font-semibold "
                        >
                            Connect with me{' '}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 inline-block"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                />
                            </svg>
                        </a>
                    </div>
                    <div className="text-center md:text-left">
                        <span className="text-sm">or </span>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 text-sm underline inline-block font-semibold"
                        >
                            Checkout resume
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Bio
