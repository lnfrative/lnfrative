import React from "react"
import className from "classnames"
import ImageGallery from "../ImageGallery"
import GalleryProps from "../../interfaces/GalleryProps"

function Gallery(props: GalleryProps) {
    return (
        <div className={className(
            "grid grid-cols-1 gap-10 w-full",
            "md:grid-cols-2"
        )}>
            {props.images.map((image) => (
                <ImageGallery key={image.title} src={image.src} title={image.title} />
            ))}
        </div>
    )
}

export default Gallery
