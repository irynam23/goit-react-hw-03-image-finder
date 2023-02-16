import axios from 'axios';

const BASE_URL =
  'https://pixabay.com/api/?key=32876010-953e9d7ee50a911a8b34edefd&image_type=photo&orientation=horizontal&per_page=12&';

export const getImages = async (query, page) => {
  const params = {
    page,
    q: query,
  };

  try {
    const { data } = await axios.get(BASE_URL, { params });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getNormalisedImages = async (query, page) => {
  const { hits, totalHits } = await getImages(query, page);
  return {
    images: hits.map(({ id, webformatURL, largeImageURL }) => ({
      id,
      webformatURL,
      largeImageURL,
    })),
    totalImages: totalHits,
  };
};
