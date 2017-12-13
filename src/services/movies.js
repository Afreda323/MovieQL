const axios = require('axios')
const { MOVIE_KEY, MOVIE_URL } = process.env

module.exports.getMovie = async id => {
  const res = await axios.get(`${MOVIE_URL}movie/${id}`, {
    params: {
      api_key: MOVIE_KEY,
      append_to_response: 'videos',
    },
  })
  return res.data
}
