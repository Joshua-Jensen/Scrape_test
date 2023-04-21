import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const Albertsons = Axios.create({
  baseURL: 'https://www.albertsons.com/shop/search-results.html',
  timeout: 8000
})
