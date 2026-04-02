import React from "react";
import { Link } from "react-router-dom";

/**
 * Hub card: navigates to a gallery category route.
 * Props: title, description, path
 */
function GalleryTypeCard({ title, description, path }) {
  return (
    <Link className="gallery-type-card" to={path} role="listitem">
      <h2 className="gallery-type-card__title">{title}</h2>
      <p className="gallery-type-card__description">{description}</p>
      <span className="gallery-type-card__cta" aria-hidden="true">
        View gallery
      </span>
    </Link>
  );
}

export default GalleryTypeCard;
