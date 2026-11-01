import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

/** Authorized Open Design mockup stills — StaticImage src must be string literals. */
const CaseWorkMedia = ({ title, alt }) => {
    switch (title) {
        case 'GEMGEM':
            return (
                <StaticImage
                    src="../images/work/gemgem.jpg"
                    alt={alt}
                    layout="fullWidth"
                    objectFit="cover"
                    loading="lazy"
                    className="case-media__gatsby"
                    imgClassName="case-media__img"
                />
            )
        case 'UNDONE':
            return (
                <StaticImage
                    src="../images/work/undone.jpg"
                    alt={alt}
                    layout="fullWidth"
                    objectFit="cover"
                    loading="lazy"
                    className="case-media__gatsby"
                    imgClassName="case-media__img"
                />
            )
        case 'ItineraryEdge':
            return (
                <StaticImage
                    src="../images/work/itineraryedge.png"
                    alt={alt}
                    layout="fullWidth"
                    objectFit="cover"
                    loading="lazy"
                    className="case-media__gatsby"
                    imgClassName="case-media__img"
                />
            )
        default:
            return null
    }
}

export default CaseWorkMedia
