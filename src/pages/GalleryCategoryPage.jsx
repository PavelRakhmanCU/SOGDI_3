import React, { useState, useCallback } from "react";
import { Navigate, useParams } from "react-router-dom";
import StandardGalleryImage from "../components/StandardGalleryImage";
import Lightbox from "../components/Lightbox";
import {
  GALLERY_CATEGORY_META,
  GALLERY_IMAGES,
} from "../data/galleryImages";

const SLUGS = Object.keys(GALLERY_CATEGORY_META);

/** Split stored body copy into paragraphs (one block per non-empty line, as in source files). */
function galleryBodyParagraphs(body) {
  if (!body?.trim()) return [];
  return body.split("\n").map((p) => p.trim()).filter(Boolean);
}

function GalleryCategoryPage() {
  const { category } = useParams();
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = useCallback((src, alt) => {
    setLightbox({ src, alt: alt || "Gallery image" });
  }, []);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  if (!SLUGS.includes(category)) {
    return <Navigate to="/galleries" replace />;
  }

  const meta = GALLERY_CATEGORY_META[category];
  const items = GALLERY_IMAGES[category] ?? [];
  const isGrayscale = category === "grayscale";

  return (
    <div className="gallery-category-page">
      <Lightbox
        isOpen={!!lightbox}
        src={lightbox?.src}
        alt={lightbox?.alt}
        onClose={closeLightbox}
      />

      <header className="gallery-category-page__header">
        <h1 className="gallery-category-page__title">{meta.title}</h1>
        {meta.intro ? (
          <p className="gallery-category-page__intro">{meta.intro}</p>
        ) : null}
      </header>

      {meta.body ? (
        <div className="gallery-category-page__body">
          {galleryBodyParagraphs(meta.body).map((para, i) => (
            <p key={`body-${i}`} className="gallery-category-page__body-p">
              {para}
            </p>
          ))}
        </div>
      ) : null}

      {items.length === 0 ? (
        <p className="gallery-category-page__empty">Gallery images coming soon.</p>
      ) : (
        <div
          className={
            isGrayscale
              ? "grayscale-gallery gallery-category-page__grid gallery-category-page__grid--grayscale"
              : "gallery-category-page__grid"
          }
          role="list"
        >
          {items.map((entry, index) => (
            <div
              className={isGrayscale ? "grayscale-gallery__cell" : undefined}
              key={`${category}-${entry.image}-${index}`}
              role="listitem"
            >
              <StandardGalleryImage
                image={entry.image}
                caption={entry.caption}
                onImageClick={(src) =>
                  openLightbox(
                    src,
                    entry.caption?.trim() || meta.title || "Gallery image"
                  )
                }
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GalleryCategoryPage;
