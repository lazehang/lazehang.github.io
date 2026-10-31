/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import GridImage from './gridImage'
import { FOCUS_RING_CLASS, MAILTO_HIRING, RESUME_PATH } from '../constants/contact'

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
        <header className="section-enter grid md:grid-cols-2 gap-10 md:gap-12 items-center pb-10 md:py-12">
            <div className="md:order-2 flex justify-center">
                <GridImage />
            </div>
            {author?.name && (
                <div className="md:order-1 max-w-[var(--column)]">
                    <h1 className="mt-0 mb-4">Mangal Hang Limbu</h1>
                    <p className="text-[var(--ink)] mb-4">{author?.summary || null}</p>
                    <p className="text-[var(--type-body)] mb-8">
                        You can connect with me on{' '}
                        <a
                            href="https://hk.linkedin.com/in/mangal-limbu-05a951111"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`font-semibold ${FOCUS_RING_CLASS}`}
                        >
                            LinkedIn
                        </a>
                        ,{' '}
                        <a
                            href="https://github.com/lazehang"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`font-semibold ${FOCUS_RING_CLASS}`}
                        >
                            GitHub
                        </a>
                        , or{' '}
                        <a
                            href="mailto:lazehang@gmail.com"
                            className={`font-semibold ${FOCUS_RING_CLASS}`}
                        >
                            lazehang@gmail.com
                        </a>
                        .
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <a href={MAILTO_HIRING} className={`btn-primary ${FOCUS_RING_CLASS}`}>
                            Email me
                        </a>
                        <a
                            href={RESUME_PATH}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`link-secondary text-[var(--type-small)] min-h-[44px] inline-flex items-center ${FOCUS_RING_CLASS}`}
                        >
                            Download resume
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Bio
