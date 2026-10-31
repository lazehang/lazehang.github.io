import * as React from 'react'
import { SkillGroups } from './skillGroup'

const StacksSection = () => (
    <section
        id="stacks"
        className="relative py-12 md:py-16 scroll-mt-6 rounded-xl overflow-hidden"
    >
        <div
            className="absolute inset-0 bg-cover bg-right-bottom bg-no-repeat opacity-[0.22] pointer-events-none"
            style={{ backgroundImage: `url(/stacks-section-bg.jpg)` }}
            aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/88 to-white/92 pointer-events-none" />
        <div className="relative">
            <h2 className="mt-0">Tech stack</h2>
            <p className="max-w-2xl text-neutral-700 mb-0">
                Tools I use day to day, grouped for hiring conversations.
            </p>
            <div className="pt-8">
                <SkillGroups />
            </div>
        </div>
    </section>
)

export default StacksSection
