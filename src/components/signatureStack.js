import * as React from 'react'
import manifest from '../data/skillIconManifest.json'
import { getSkillSlug } from '../data/skillIcons'
import { FOCUS_RING_CLASS } from '../constants/contact'

const signatureItems = [
    { label: 'React', category: 'Frontend' },
    { label: 'Vue / Nuxt', slug: 'vuedotjs', category: 'Frontend' },
    { label: 'TypeScript', category: 'Language' },
    { label: 'Node', category: 'Backend' },
    { label: 'Laravel', category: 'Backend' },
    { label: 'Cloudflare', slug: 'cloudflare', category: 'DevOps' },
]

const SignatureStack = () => (
    <div>
        <p className="signature-label">Signature stack</p>
        <div className="signature-grid">
            {signatureItems.map(item => {
                const slug = item.slug || getSkillSlug(item.label.split(' / ')[0])
                const icon = slug ? manifest[slug] : null
                const brand = icon ? `#${icon.hex}` : 'var(--accent)'

                return (
                    <div
                        key={item.label}
                        tabIndex={0}
                        className={`signature-tile group/sig ${FOCUS_RING_CLASS}`}
                        style={{ '--skill-brand': brand }}
                    >
                        {slug && (
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                className="w-8 h-8 shrink-0 fill-[var(--muted)] group-hover/sig:fill-[var(--skill-brand)] group-focus-visible/sig:fill-[var(--skill-brand)] transition-colors"
                            >
                                <path d={icon.path} />
                            </svg>
                        )}
                        <span className="font-semibold text-[var(--ink)]">{item.label}</span>
                        <span className="signature-tile__category">{item.category}</span>
                    </div>
                )
            })}
        </div>
    </div>
)

export default SignatureStack
