import React from "react";

const StandardGalleryImage = ({ image, caption, onImageClick }) => {
  const label = caption
    ? `View larger: ${caption}`
    : "View larger image";

  const open = () => {
    onImageClick?.(image);
  };

  const handleKeyDown = (e) => {
    if (!onImageClick) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      open();
    }
  };

  return (
    <div className="standard-gallery-image">
      <div
        className={`gallery-image-box${onImageClick ? " gallery-image-box--clickable" : ""}`}
        style={{ backgroundImage: `url(${image})` }}
        onClick={onImageClick ? open : undefined}
        onKeyDown={onImageClick ? handleKeyDown : undefined}
        role={onImageClick ? "button" : undefined}
        tabIndex={onImageClick ? 0 : undefined}
        aria-label={onImageClick ? label : undefined}
      />
      {caption ? (
        <p className="gallery-image-caption">{caption}</p>
      ) : null}
    </div>
  );
};

export default StandardGalleryImage;
