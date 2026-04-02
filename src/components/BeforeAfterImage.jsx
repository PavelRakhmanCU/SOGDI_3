import React from "react";

/**
 * Before / after pair for cover-up and post-mastectomy galleries.
 * Responsive: images stack on narrow screens, sit side-by-side from ~480px.
 */
function BeforeAfterImage({ beforeImage, afterImage, caption }) {
  const cap = caption?.trim() || "Tattoo";

  return (
    <article className="before-after-image">
      <div className="before-after-image__row">
        <figure className="before-after-image__figure">
          <span className="before-after-image__badge">Before</span>
          <div className="before-after-image__media-wrap">
            <img
              className="before-after-image__img"
              src={beforeImage}
              alt={`Before — ${cap}`}
              loading="lazy"
              decoding="async"
            />
          </div>
        </figure>
        <figure className="before-after-image__figure">
          <span className="before-after-image__badge">After</span>
          <div className="before-after-image__media-wrap">
            <img
              className="before-after-image__img"
              src={afterImage}
              alt={`After — ${cap}`}
              loading="lazy"
              decoding="async"
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
