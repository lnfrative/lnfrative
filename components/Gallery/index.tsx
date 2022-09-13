import React from "react"
import ImageGallery from "../ImageGallery"
import GalleryProps from "../../interfaces/GalleryProps"

function Gallery(props: GalleryProps) {
    return (
        <div className="grid grid-cols-2 gap-10 w-full">
            {props.images.map((image) => (
                <ImageGallery key={image.title} src={image.src} title={image.title} />
            ))}
        </div>
    )
}

export default Gallery
