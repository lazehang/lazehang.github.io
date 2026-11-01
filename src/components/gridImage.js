import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function GridImage({ className = '' }) {
    return (
        <figure className={`m-0 ${className}`}>
            <div className="portrait-frame">
                <StaticImage
                    src="../images/profile-pic.png"
                    width={800}
                    height={800}
                    alt="Mangal Hang Limbu"
                    className="portrait-media w-full mx-auto"
                    imgClassName="w-full h-auto"
                />
            </div>
            <figcaption className="portrait-caption">Based in Hong Kong</figcaption>
        </figure>
    )
}
