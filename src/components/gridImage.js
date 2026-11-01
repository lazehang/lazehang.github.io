import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function GridImage({ className = '' }) {
    return (
        <figure className={`m-0 ${className}`}>
            <div className="portrait-frame">
                <StaticImage
                    src="../images/profile-pic.jpg"
                    width={420}
                    height={420}
                    alt="Mangal Hang Limbu"
                    className="w-full max-w-[min(42vw,380px)] mx-auto"
                    imgClassName="rounded-[var(--radius-media)] grayscale w-full h-auto"
                />
            </div>
            <figcaption className="portrait-caption">Based in Hong Kong</figcaption>
        </figure>
    )
}
