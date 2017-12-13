const axios = require('axios')
const { MOVIE_KEY, MOVIE_URL } = process.env

const instance = axios.create({
  baseURL: MOVIE_URL,
  params: {
    api_key: MOVIE_KEY,
  },
  timeout: 10000,
})

