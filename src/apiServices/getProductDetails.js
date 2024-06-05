import axios from 'axios';

export const getProductDetails = async (productId) => {
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${productId}&media=podcast&entity=podcastEpisode&limit=20`)}`;
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      return response.data.contents;
    } else {
      throw new Error('Network response was not ok.');
    }
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return null;
  }
};