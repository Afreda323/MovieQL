const axios = require('axios')
const { MOVIE_KEY, MOVIE_URL } = process.env

module.exports.getCompany = async company_id => {
  const res = await axios.get(`${MOVIE_URL}company/${company_id}`, {
    params: {
      api_key: MOVIE_KEY,
    },
  })
  return res.data
}
module.exports.getCompanyMovies = async (company_id, page) => {
  const res = await axios.get(`${MOVIE_URL}company/${company_id}/movies`, {
    params: {
      api_key: MOVIE_KEY,
      page,
    },
  })
  return res.data
}
