import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function GridImage({ className = '' }) {
    return (
        <div className={`relative flex justify-center ${className}`}>
            <StaticImage
                src="../images/profile-pic.jpg"
                width={420}
                height={420}
                alt="Mangal Hang Limbu"
                className="relative z-10 w-full max-w-[320px] md:max-w-[380px] mx-auto"
                imgClassName="rounded-2xl grayscale"
            />
        </div>
    )
}
