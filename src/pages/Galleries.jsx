import React from "react";
import GalleryTypeCard from "../components/GalleryTypeCard";

const Galleries=()=>{
    const GalleryTypes=[
        {galleryType: "Color Tattoos", path: "/galleries/color"},
        {galleryType: "Grayscale Tattoos", path: "/galleries/grayscale"},
        {galleryType: "Coverup Tattoos", path: "/galleries/coverup"},
        {galleryType: "Post-Mastectomy Reconstruction Tattoos", path: "/galleries/post-mastectomy-reconstruction"}
    ]
    return(
        <div className="galleries">
            {GalleryTypes.map((gallery, index) => (
                <GalleryTypeCard key={index} galleryType={gallery.galleryType} path={gallery.path} />
            ))}
        </div>
    )
}

export default Galleries;