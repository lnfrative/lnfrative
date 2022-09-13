import React from "react"
import ImageGallery from "../ImageGallery"

function Gallery() {
    return (
        <div className="grid grid-cols-2 gap-10 w-full">
            <ImageGallery />
            <ImageGallery />
            <ImageGallery />
            <ImageGallery />
        </div>
    )
}

export default Gallery
