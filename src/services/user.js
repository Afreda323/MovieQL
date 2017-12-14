const axios = require('axios')
const { MOVIE_KEY, MOVIE_URL } = process.env

module.exports.getSession = async id => {
  const res = await axios.get(`${MOVIE_URL}authentication/guest_session/new`, {
    params: {
      api_key: MOVIE_KEY,
    },
  })
  return res.data
}

module.exports.getRatings = async (id, sort_by) => {
  const params = {
    api_key: MOVIE_KEY,
  }
  if (sort_by) {
    params.sort_by = sort_by
  }
  const res = await axios.get(`${MOVIE_URL}guest_session/${id}/rated/movies`, {
    params,
  })
  return res.data
}
module.exports.rateMovie = async (user_id, movie_id, value) => {
  const qs = `?api_key=${MOVIE_KEY}&guest_session_id=${user_id}`

  const res = await axios.post(`${MOVIE_URL}movie/${movie_id}/rating${qs}`, {
    value,
  })

  return res.data
}
