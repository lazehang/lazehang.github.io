import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function gridImage({ className = '' }) {
    return (
        <div className={`relative grid grid-cols-8 grid-rows-6 ${className}`}>
            <StaticImage
                src="../images/profile-pic.jpg"
                width={700}
                height={700}
                alt="Mangal Hang Limbu"
                className="col-start-2 col-span-6 row-start-2 row-span-4"
                imgClassName="rounded-[20px]"
            />
            <div className="col-start-7 col-span-2 row-start-1 row-span-2 overflow-hidden">
                <StaticImage
                    src="../images/portfolio/spotlight.jpg"
                    width={700}
                    alt="Spotlight Studio HK project preview"
                    imgClassName="rounded-md"
                />
            </div>
            <a
                href="https://getbarcode.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md col-start-1 col-end-4 row-start-3 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
                <StaticImage
                    src="../images/portfolio/getbarcode.jpg"
                    width={700}
                    alt="GetBarcode project preview"
                    imgClassName="rounded-md"
                />
            </a>
            <StaticImage
                src="../images/portfolio/dibyadristy.jpg"
                width={700}
                alt="Dibyadristy project preview"
                className="col-start-4 col-span-5 row-start-5 row-span-2 mr-4"
                imgClassName="rounded-md"
            />
        </div>
    )
}
