import * as React from 'react'

const RESUME_PATH = '/Resume-Mangal-Hang-Limbu.pdf'

const ClosingCta = () => (
    <section
        aria-labelledby="closing-cta-heading"
        className="py-12 md:py-14 my-4 rounded-xl border border-neutral-200 bg-neutral-50 text-center md:text-left"
    >
        <h2 id="closing-cta-heading" className="mt-0 text-xl md:text-2xl">
            Let&apos;s talk
        </h2>
        <p className="max-w-xl text-neutral-700 mb-6 mx-auto md:mx-0">
            Open to full-stack roles and contract work in Hong Kong and remote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start">
            <a
                href="mailto:lazehang@gmail.com"
                className="text-base inline-flex items-center justify-center min-h-[44px] px-6 border border-black text-white bg-black font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-shadow hover:shadow-md"
            >
                Email me
            </a>
            <a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base inline-flex items-center justify-center min-h-[44px] px-6 border border-black text-black bg-white font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-shadow hover:shadow-md"
            >
                Download resume
            </a>
        </div>
    </section>
)

export default ClosingCta
