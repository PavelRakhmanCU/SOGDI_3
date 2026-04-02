import React from "react";
import { Navigate, useParams } from "react-router-dom";
import StandardGalleryImage from "../components/StandardGalleryImage";

const CATEGORIES = {
  color: {
    title: "Color tattoos",
    intro: "Selected color work — add images in `GALLERY_IMAGES.color` when ready.",
  },
  grayscale: {
    title: "Grayscale tattoos",
    intro: "Selected grayscale work — add images in `GALLERY_IMAGES.grayscale` when ready.",
  },
  coverup: {
    title: "Cover-up tattoos",
    intro: "Cover-up projects — add images in `GALLERY_IMAGES.coverup` when ready.",
  },
  "post-mastectomy-reconstruction": {
    title: "Post-mastectomy reconstruction tattoos",
    intro:
      "Restorative tattooing — add images in `GALLERY_IMAGES['post-mastectomy-reconstruction']` when ready.",
  },
};

/** Each entry: { image: string (url), caption: string } */
export const GALLERY_IMAGES = {
  color: [],
  grayscale: [],
  coverup: [],
  "post-mastectomy-reconstruction": [],
};

const SLUGS = Object.keys(CATEGORIES);

function GalleryCategoryPage() {
  const { category } = useParams();

  if (!SLUGS.includes(category)) {
    return <Navigate to="/galleries" replace />;
  }

  const meta = CATEGORIES[category];
  const items = GALLERY_IMAGES[category] ?? [];

  return (
    <div className="gallery-category-page">
      <header className="gallery-category-page__header">
        <h1 className="gallery-category-page__title">{meta.title}</h1>
        <p className="gallery-category-page__intro">{meta.intro}</p>
      </header>

      {items.length === 0 ? (
        <p className="gallery-category-page__empty">Gallery images coming soon.</p>
      ) : (
        <div className="gallery-category-page__grid">
          {items.map((entry, index) => (
            <StandardGalleryImage
              key={`${category}-${index}`}
              image={entry.image}
              caption={entry.caption}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default GalleryCategoryPage;
