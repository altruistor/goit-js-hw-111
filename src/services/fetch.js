import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = "37932169-8370cfb0b0e4566d06b842034";

let page = 1;
const perPage = 40;

async function fetchPhoto(userFetch, page) {
     try {
     const response = await axios.get(`${BASE_URL}?key=${API_KEY}&image_type=photo&orientation=horizontal&safesearch=true&q=${userFetch}&page=${page}&per_page=${perPage}`)
     console.log(response.data);
          return response.data

} catch (error) {
 console.log(error.message)
}
}

 console.log(fetchPhoto('cat'));
export { fetchPhoto, perPage };