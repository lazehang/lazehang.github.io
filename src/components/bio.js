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
        <header id="top" className="section-enter hero-section scroll-mt-6">
            <div className="hero-grid">
                {author?.name && (
                    <div className="hero-grid__copy">
                        <h1 className="mt-0 mb-4">Mangal Hang Limbu</h1>
                        <p className="hero-lead mb-4">{author?.summary || null}</p>
                        <p className="text-[var(--muted)] mb-8">
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
                        <div className="hero-actions">
                            <a href={MAILTO_HIRING} className={`btn-primary ${FOCUS_RING_CLASS}`}>
                                Email me
                            </a>
                            <a
                                href={RESUME_PATH}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`btn-secondary ${FOCUS_RING_CLASS}`}
                            >
                                Download resume
                            </a>
                        </div>
                    </div>
                )}
                <div className="hero-grid__media flex justify-center md:justify-end">
                    <GridImage />
                </div>
            </div>
        </header>
    )
}

export default Bio
