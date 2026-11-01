import * as React from 'react'
import { FOCUS_RING_CLASS, MAILTO_HIRING, RESUME_PATH } from '../constants/contact'

const ClosingCta = () => (
    <section aria-labelledby="closing-cta-heading" className="section-enter closing-cta">
        <h2 id="closing-cta-heading" className="mt-0">
            Open to full-stack roles in Hong Kong and remote.
        </h2>
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
    </section>
)

export default ClosingCta
