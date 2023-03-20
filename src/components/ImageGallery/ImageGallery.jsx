import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <ul className="gallery">
      {images.map((image, i) => (
        <ImageGalleryItem
          key={i}
          id={image.id}
          webformatURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
