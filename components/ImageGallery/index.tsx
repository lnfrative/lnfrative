import React from "react"
import Image from "next/image"
import className from "classnames"

// assets
import dogecOverview from "../../images/portfolio/dogec-app/dogec_overview.png"

function ImageGallery() {
    return (
        <div className="w-full rounded-xl overflow-hidden relative flex">
            <Image className="object-cover object-center hover:blur-lg" src={dogecOverview} />
            <div className="opacity-0 hover:opacity-100 transition-all ease-in-out duration-500">
                <div
                    className={className(
                        "absolute top-0 left-0 w-full h-full z-10 bg-black rounded-xl opacity-75"
                    )}
                />
                <div
                    className={className(
                        "absolute top-0 left-0 w-full h-full flex items-center justify-center text-white z-20"
                    )}
                >
                    Hellow world
                </div>
            </div>
        </div>
    )
}

export default ImageGallery
