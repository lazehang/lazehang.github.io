import * as React from 'react'
import { SkillGroups } from './skillGroup'
import StackGroupFilter from './stackGroupFilter'

const StacksSection = () => (
    <section
        id="stacks"
        className="section-enter scroll-mt-6 py-12 md:py-16 bg-[var(--surface)]"
        style={{
            marginLeft: 'calc(-1 * var(--page-margin))',
            marginRight: 'calc(-1 * var(--page-margin))',
            paddingLeft: 'var(--page-margin)',
            paddingRight: 'var(--page-margin)',
            marginTop: 'var(--section-gap)',
        }}
    >
        <div className="max-w-[var(--column)] md:max-w-none">
            <h2 className="mt-0">Tech stack</h2>
            <p className="text-[var(--muted)] text-[var(--type-body)] mb-0 max-w-[var(--column)]">
                Tools I use day to day, grouped for hiring conversations.
            </p>
            <div className="pt-8">
                <StackGroupFilter />
                <SkillGroups />
            </div>
        </div>
    </section>
)

export default StacksSection
