import React, { useState, useCallback } from "react";
import { Navigate, useParams } from "react-router-dom";
import StandardGalleryImage from "../components/StandardGalleryImage";
import BeforeAfterImage from "../components/BeforeAfterImage";
import Lightbox from "../components/Lightbox";
import { BEFORE_AFTER_BY_CATEGORY } from "../data/beforeAfterGalleries";

const CATEGORIES = {
  color: {
    title: "Color tattoos",
    intro: "Selected color work — new pieces are added here over time.",
  },
  grayscale: {
    title: "Grayscale tattoos",
    intro: "Black and grey work — selected pieces from the studio.",
  },
  coverup: {
    title: "Cover-up tattoos",
    intro:
      "Before and after sets documenting cover-up work — each card shows the same piece in sequence.",
  },
  "post-mastectomy-reconstruction": {
    title: "Post-mastectomy reconstruction tattoos",
    intro:
      "Restorative tattooing — before and after documentation with care and respect.",
  },
};

/** Each entry: { image: string (url), caption: string } — color / grayscale */
export const GALLERY_IMAGES = {
  color: [],
  grayscale: [],
  coverup: [],
  "post-mastectomy-reconstruction": [],
};

const SLUGS = Object.keys(CATEGORIES);

const BEFORE_AFTER_SLUGS = new Set([
  "coverup",
  "post-mastectomy-reconstruction",
]);

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

  const meta = CATEGORIES[category];
  const items = GALLERY_IMAGES[category] ?? [];
  const beforeAfterItems = BEFORE_AFTER_BY_CATEGORY[category] ?? [];
  const isBeforeAfterGallery = BEFORE_AFTER_SLUGS.has(category);

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
        <p className="gallery-category-page__intro">{meta.intro}</p>
      </header>

      {isBeforeAfterGallery ? (
        beforeAfterItems.length === 0 ? (
          <p className="gallery-category-page__empty">
            Gallery pairs coming soon.
          </p>
        ) : (
          <div
            className="gallery-category-page__grid gallery-category-page__grid--before-after"
            role="list"
          >
            {beforeAfterItems.map((entry, index) => (
              <div
                className="gallery-category-page__before-after-cell"
                key={`${category}-ba-${index}`}
                role="listitem"
              >
                <BeforeAfterImage
                  beforeImage={entry.beforeImage}
                  afterImage={entry.afterImage}
                  caption={entry.caption}
                  onImageClick={(src, phase) =>
                    openLightbox(
                      src,
                      `${phase === "before" ? "Before" : "After"} — ${
                        entry.caption?.trim() || "Tattoo"
                      }`
                    )
                  }
                />
              </div>
            ))}
          </div>
        )
      ) : items.length === 0 ? (
        <p className="gallery-category-page__empty">Gallery images coming soon.</p>
      ) : (
        <div className="gallery-category-page__grid">
          {items.map((entry, index) => (
            <StandardGalleryImage
              key={`${category}-${index}`}
              image={entry.image}
              caption={entry.caption}
              onImageClick={(src) =>
                openLightbox(src, entry.caption || "Gallery image")
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default GalleryCategoryPage;
