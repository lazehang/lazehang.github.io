import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function GridImage({ className = '' }) {
    return (
        <figure className={`m-0 ${className}`}>
            <div className="portrait-frame">
                <StaticImage
                    src="../images/profile-pic.jpg"
                    width={560}
                    height={560}
                    alt="Mangal Hang Limbu"
                    className="portrait-media w-full mx-auto"
                    imgClassName="grayscale w-full h-auto"
                />
            </div>
            <figcaption className="portrait-caption">Based in Hong Kong</figcaption>
        </figure>
    )
}
