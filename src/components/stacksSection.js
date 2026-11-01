import * as React from 'react'
import StackGroupFilter from './stackGroupFilter'
import SignatureStack from './signatureStack'

const StacksSection = () => (
    <section id="stacks" className="section-enter stacks-section scroll-mt-[var(--nav-h)]">
        <h2 className="mt-0">Tech stack</h2>
        <p className="text-[var(--muted)] max-w-[42ch] mb-0">
            Tools I use day to day, grouped for hiring conversations.
        </p>
        <div className="pt-10">
            <SignatureStack />
            <StackGroupFilter />
        </div>
    </section>
)

export default StacksSection
