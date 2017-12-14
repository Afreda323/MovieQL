const axios = require('axios')
const { MOVIE_KEY, MOVIE_URL } = process.env

module.exports.getDiscover = async args => {
  const res = await axios.get(`${MOVIE_URL}discover/movie`, {
    params: {
      api_key: MOVIE_KEY,
      include_video: true,
      page: args.page,
    },
  })
  return res.data
}