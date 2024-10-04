const ImageGallery = ({ items }) => {
  return (
    <div className="image-gallery">
      {items.map((item, index) => (
        <div key={index} className="image-gallery-item">
          <img src={item.original} alt={`Image ${index}`} />
        </div>
      ))}
      {/* <div className="image-gallery-thumbnails">
        {items.map((item, index) => (
          <div key={index} className="image-gallery-thumbnail">
            <img src={item.thumbnail} alt={`Thumbnail ${index}`} />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default ImageGallery;
