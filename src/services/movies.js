const axios = require('axios')
const { MOVIE_KEY, MOVIE_URL } = process.env



const getMoviePlus = async (id, page, endpoint) => {
  const res = await axios.get(`${MOVIE_URL}movie/${id}/${endpoint}`, {
    params: {
      page,
      api_key: MOVIE_KEY,
    },
  })
  return res.data
}

module.exports.getRecommendations = async (id, page) =>
  await getMoviePlus(id, page, 'recommendations')

module.exports.getSimilar = async (id, page) =>
  await getMoviePlus(id, page, 'similar')

module.exports.getMovie = async id => {
  const res = await axios.get(`${MOVIE_URL}movie/${id}`, {
    params: {
      api_key: MOVIE_KEY,
      append_to_response: 'videos',
    },
  })
  return res.data
}