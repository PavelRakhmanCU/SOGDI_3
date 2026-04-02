//GalleryTypeCard will be used on the Galleries page to allow the user to select the type of gallery they would like to navigate to
//Gallery type selection: color, grayscale, coverup, post-mastectomy reconstruction tattoos
import React from "react";
import { useNavigate } from "react-router-dom";
const GalleryTypeCard = ({ galleryType, path }) => {
    const navigate = useNavigate();
    return(
        <div className="gallery-type-card">
<h4>{galleryType}</h4>
            <button onClick={() => navigate(path)}>View Gallery</button>
        </div>
    )
}

export default GalleryTypeCard