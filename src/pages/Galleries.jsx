import React from "react";
import GalleryTypeCard from "../components/GalleryTypeCard";

const GALLERY_ITEMS = [
  {
    title: "Color tattoos",
    description:
      "Vibrant color work—realism, micro-realism, and painterly pieces tailored to your vision.",
    path: "/galleries/color",
  },
  {
    title: "Grayscale tattoos",
    description:
      "Black and grey tattoos with depth, contrast, and fine detail for timeless monochrome art.",
    path: "/galleries/grayscale",
  },
  {
    title: "Cover-up tattoos",
    description:
      "Transforming or concealing existing work with thoughtful design and technical precision.",
    path: "/galleries/coverup",
  },
  {
    title: "Post-mastectomy reconstruction",
    description:
      "Restorative tattooing to support healing and confidence with sensitivity and care.",
    path: "/galleries/post-mastectomy-reconstruction",
  },
];

const Galleries = () => {
  return (
    <div className="galleries-page">
      <header className="galleries-page__header">
        <h1 className="galleries-page__title">Galleries</h1>
        <p className="galleries-page__lead">
          Browse by category. Each gallery opens a collection of selected work.
        </p>
      </header>

      <div className="galleries__grid" role="list">
        {GALLERY_ITEMS.map((item) => (
          <GalleryTypeCard
            key={item.path}
            title={item.title}
            description={item.description}
            path={item.path}
          />
        ))}
      </div>
    </div>
  );
};

export default Galleries;
