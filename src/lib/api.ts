import axios from 'axios'

const apiFakeStore = axios.create({
  baseURL: 'https://fakestoreapi.com',
})

const apiZapto = axios.create({
  baseURL: 'http://suporte.zapto.org:8080/PrimeRest/api/v1/',
})

export { apiFakeStore, apiZapto }
