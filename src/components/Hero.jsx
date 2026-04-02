import React, { useState } from "react";

const ARTIST_NAME = "Sogdiana Kashaeva";
const ARTIST_SPECIALIZATION =
  "Realism, micro-realism, and painterly tattoos";

const PORTRAIT_PATH = `${process.env.PUBLIC_URL}/images/artist_portrait_2.jpg`;

const Hero = () => {
  const [portraitFailed, setPortraitFailed] = useState(false);

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__content">
        <h1 id="hero-heading" className="artist-name">
          {ARTIST_NAME}
        </h1>
        <p className="artist-specialization">{ARTIST_SPECIALIZATION}</p>
      </div>
      <div className="artist-portrait-wrap">
        {!portraitFailed ? (
          <img
            className="artist-portrait"
            src={PORTRAIT_PATH}
            alt={`Portrait of tattoo artist ${ARTIST_NAME}`}
            width={480}
            height={640}
            onError={() => setPortraitFailed(true)}
          />
        ) : (
          <div
            className="artist-portrait artist-portrait--placeholder"
            role="img"
            aria-label={`Placeholder portrait for ${ARTIST_NAME}`}
          >
            <span className="artist-portrait__initials" aria-hidden="true">
              SK
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
