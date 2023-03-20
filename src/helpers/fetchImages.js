import axios from 'axios';

const fetchImages = (imageName, page) => {
  const BASE_URL = 'https://pixabay.com/api/';

  const searchParams = new URLSearchParams({
    page,
    key: '34583723-adca8083bb9b59f4f995b8ad0',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });

  return axios.get(`${BASE_URL}?q=${imageName}&${searchParams}`);
};

export default fetchImages;
