const axios = require('axios')
const { MOVIE_KEY, MOVIE_URL } = process.env

const getList = async (endpoint, page) => {
  const res = await axios.get(`${MOVIE_URL}movie/${endpoint}`, {
    params: {
      page,
      api_key: MOVIE_KEY,
    },
  })
  return res.data
}

module.exports.getPopular = async page => await getList('popular', page)
module.exports.getUpcoming = async page => await getList('upcoming', page)
module.exports.getTopRated = async page => await getList('top_rated', page)
module.exports.getNowPlaying = async page => await getList('now_playing', page)
