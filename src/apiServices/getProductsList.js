import axios from 'axios';

export const getProductsList = async () => {
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')}`;
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