/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import GridImage from './gridImage'

const RESUME_PATH = '/Resume-Mangal-Hang-Limbu.pdf'

const Bio = () => {
    const data = useStaticQuery(graphql`
        query BioQuery {
            site {
                siteMetadata {
                    author {
                        name
                        summary
                    }
                }
            }
        }
    `)

    const author = data.site.siteMetadata?.author

    return (
        <div className="grid md:grid-cols-2 gap-10 items-center justify-center pb-10 md:py-10">
            <div className="md:order-2 relative flex justify-center py-4">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-[min(88%,320px)] aspect-square bg-gradient-to-br from-[#e8ce69]/70 via-[#f3e8c4]/50 to-[#3730a3]/65 blur-[1px] opacity-80"
                    aria-hidden="true"
                />
                <GridImage />
            </div>
            {author?.name && (
                <div className="md:order-1 bg-white relative z-10">
                    <h1 className="mt-0">
                        I'm {author.name}, a full-stack web developer.
                    </h1>
                    <p className="max-w-lg pb-2 mb-0">{author?.summary || null}</p>
                    <p className="max-w-lg mb-0">
                        You can connect with me on{' '}
                        <a
                            href="https://hk.linkedin.com/in/mangal-limbu-05a951111"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            LinkedIn
                        </a>
                        ,{' '}
                        <a
                            href="https://github.com/lazehang"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            GitHub
                        </a>
                        , or{' '}
                        <a
                            href="mailto:lazehang@gmail.com"
                            className="underline font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            lazehang@gmail.com
                        </a>
                        .
                    </p>
                    <div className="mt-10 md:mt-8 text-center md:text-left max-w-xs mx-auto md:mx-0">
                        <div className="text-left text-sm pb-2 font-semibold">
                            Open to opportunities
                        </div>
                        <a
                            href="mailto:lazehang@gmail.com"
                            className="text-base text-center block mx-auto md:inline-block min-h-[44px] min-w-[44px] leading-[44px] px-6 border border-black text-white bg-black font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Email me
                        </a>
                    </div>
                    <div className="text-center md:text-left mt-4">
                        <a
                            href={RESUME_PATH}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm underline inline-block font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Download resume
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Bio
