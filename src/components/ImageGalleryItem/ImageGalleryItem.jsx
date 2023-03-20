const ImageGalleryItem = ({ id, webformatURL, largeImageURL }) => {
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt={id} />
    </li>
  );
};

export default ImageGalleryItem;
