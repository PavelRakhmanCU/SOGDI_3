import React, { useEffect } from "react";
import { createPortal } from "react-dom";

/**
 * Full-screen image lightbox. Close: dimmed area, Escape, or close control.
 */
function Lightbox({ isOpen, src, alt, onClose }) {
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !src) return null;

  const content = (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged image"
      onClick={onClose}
    >
      <button
        type="button"
        className="lightbox__close"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close"
      >
        ×
      </button>
      <div
        className="lightbox__inner"
        onClick={(e) => e.stopPropagation()}
      >
        <img className="lightbox__img" src={src} alt={alt || ""} />
      </div>
    </div>
  );

  return createPortal(content, document.body);
}

export default Lightbox;
