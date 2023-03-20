import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import fetchImages from 'helpers/fetchImages';
import { useState, useEffect } from 'react';

export const App = () => {
  const [page, setPage] = useState(1);
  const [imageName, setImageName] = useState('');
  const [images, setImages] = useState([]);

  const getInputData = query => {
    setImageName(query);
  };

  useEffect(() => {
    if (imageName === '') {
      setImages([]);
    }

    fetchImages(imageName, page)
      .then(({ data }) => {
        setImages(prevImages => [
          ...prevImages,
          ...data.hits.map(({ id, webformatURL, largeImageURL }) => ({
            id,
            webformatURL,
            largeImageURL,
          })),
        ]);
      })
      .catch(e => e.message);
  }, [imageName, page]);

  return (
    <div>
      <SearchBar getInputData={getInputData} />
      <ImageGallery images={images} />
    </div>
  );
};
