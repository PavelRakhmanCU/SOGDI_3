import React from "react";
import StandardGalleryImage from "./StandardGalleryImage";

/**
 * Grayscale-only grid: responsive layout + lightbox via onOpenLightbox(src, alt).
 */
function GrayscaleGallery({ items, onOpenLightbox }) {
  if (!items?.length) return null;

  return (
    <div
      className="grayscale-gallery gallery-category-page__grid gallery-category-page__grid--grayscale"
      role="list"
    >
      {items.map((entry, index) => (
        <div
          className="grayscale-gallery__cell"
          key={`grayscale-${index}-${entry.image}`}
          role="listitem"
        >
          <StandardGalleryImage
            image={entry.image}
            caption={entry.caption}
            onImageClick={(src) =>
              onOpenLightbox(src, entry.caption || "Grayscale tattoo")
            }
          />
        </div>
      ))}
    </div>
  );
}

export default GrayscaleGallery;
