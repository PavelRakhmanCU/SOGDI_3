// Standard gallery tile: background image + caption
const StandardGalleryImage = ({ image, caption }) => {
  return (
    <div className="standard-gallery-image">
      <div
        className="gallery-image-box"
        style={{ backgroundImage: `url(${image})` }}
      />
      {caption ? (
        <p className="gallery-image-caption">{caption}</p>
      ) : null}
    </div>
  );
};

export default StandardGalleryImage;


