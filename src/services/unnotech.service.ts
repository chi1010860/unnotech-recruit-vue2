import axios from 'axios'

const baseURL = 'https://fe-interview-api.unnotech.com/'

export const unnotechService = axios.create({
  baseURL,
})
