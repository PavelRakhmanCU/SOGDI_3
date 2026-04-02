import React from "react";

/**
 * Before / after pair for cover-up and post-mastectomy galleries.
 * Optional onImageClick(src, phase) opens lightbox when an image is activated.
 */
function BeforeAfterImage({
  beforeImage,
  afterImage,
  caption,
  onImageClick,
}) {
  const cap = caption?.trim() || "Tattoo";

  const handleImgClick = (src, phase) => {
    if (!onImageClick) return;
    onImageClick(src, phase);
  };

  const handleImgKeyDown = (e, src, phase) => {
    if (!onImageClick) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onImageClick(src, phase);
    }
  };

  return (
    <article className="before-after-image">
      <div className="before-after-image__row">
        <figure className="before-after-image__figure">
          <span className="before-after-image__badge">Before</span>
          <div
            className={`before-after-image__media-wrap${
              onImageClick ? " before-after-image__media-wrap--clickable" : ""
            }`}
            onClick={
              onImageClick
                ? () => handleImgClick(beforeImage, "before")
                : undefined
            }
            onKeyDown={
              onImageClick
                ? (e) => handleImgKeyDown(e, beforeImage, "before")
                : undefined
            }
            role={onImageClick ? "button" : undefined}
            tabIndex={onImageClick ? 0 : undefined}
            aria-label={
              onImageClick ? `View larger before — ${cap}` : undefined
            }
          >
            <img
              className="before-after-image__img"
              src={beforeImage}
              alt={`Before — ${cap}`}
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </div>
        </figure>
        <figure className="before-after-image__figure">
          <span className="before-after-image__badge">After</span>
          <div
            className={`before-after-image__media-wrap${
              onImageClick ? " before-after-image__media-wrap--clickable" : ""
            }`}
            onClick={
              onImageClick
                ? () => handleImgClick(afterImage, "after")
                : undefined
            }
            onKeyDown={
              onImageClick
                ? (e) => handleImgKeyDown(e, afterImage, "after")
                : undefined
            }
            role={onImageClick ? "button" : undefined}
            tabIndex={onImageClick ? 0 : undefined}
            aria-label={
              onImageClick ? `View larger after — ${cap}` : undefined
            }
          >
            <img
              className="before-after-image__img"
              src={afterImage}
              alt={`After — ${cap}`}
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </div>
        </figure>
      </div>
      {caption ? (
        <p className="before-after-image__caption">{caption}</p>
      ) : null}
    </article>
  );
}

export default BeforeAfterImage;
