import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '58561666-a1b8648f8ae60e419cc6af7ad';

export async function getImagesByQuery(query, page = 1) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 15,
    },
  });

  return response.data;
}
