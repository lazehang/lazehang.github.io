import * as React from 'react'
import { FOCUS_RING_CLASS, MAILTO_HIRING, RESUME_PATH } from '../constants/contact'

const ClosingCta = () => (
    <section
        aria-labelledby="closing-cta-heading"
        className="section-enter text-center md:text-left"
        style={{
            paddingTop: 'min(30svh, 8rem)',
            paddingBottom: 'min(30svh, 8rem)',
        }}
    >
        <p
            id="closing-cta-heading"
            className="mt-0 mb-6 text-[clamp(1.125rem,2vw,1.375rem)] font-normal text-[var(--ink)] max-w-[var(--column)] mx-auto md:mx-0"
        >
            Open to full-stack roles in Hong Kong and remote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center md:items-center justify-center md:justify-start">
            <a href={MAILTO_HIRING} className={`btn-primary ${FOCUS_RING_CLASS}`}>
                Email me
            </a>
            <a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className={`link-secondary text-[var(--type-body)] min-h-[44px] inline-flex items-center ${FOCUS_RING_CLASS}`}
            >
                Download resume
            </a>
        </div>
    </section>
)

export default ClosingCta
