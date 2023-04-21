import Axios from "axios";
const baseURL = 'https://www.albertsons.com/shop/search-results.html'

export const Albertsons = Axios.create({
    baseURL,
    timeout: 8000
})