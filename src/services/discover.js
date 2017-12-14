const axios = require('axios')
const { MOVIE_KEY, MOVIE_URL } = process.env

module.exports.getDiscover = async args => {
  const params = {
    api_key: MOVIE_KEY,
    include_video: true,
    page: args.page,
  }
  // check for certain vals and add them to params
  if (args.sort_by) {
    params.sort_by = args.sort_by
  }
  if (args.primary_release_year) {
    params.primary_release_year = args.primary_release_year
  }
  if (args.year) {
    params.year = args.year
  }
  if (args.primary_release_date_gte) {
    params['primary_release_date.gte'] = args.primary_release_date_gte
  }
  if (args.primary_release_date_lte) {
    params['primary_release_date.lte'] = args.primary_release_date_lte
  }
  if (args.release_date_gte) {
    params['release_date.gte'] = args.release_date_gte
  }
  if (args.release_date_lte) {
    params['release_date.lte'] = args.release_date_lte
  }
  if (args.vote_count_gte) {
    params['vote_count.gte'] = args.vote_count_gte
  }
  if (args.vote_count_lte) {
    params['vote_count.lte'] = args.vote_count_lte
  }
  if (args.vote_average_gte) {
    params['vote_average.gte'] = args.vote_average_gte
  }
  if (args.vote_average_lte) {
    params['vote_average.lte'] = args.vote_average_lte
  }
  const res = await axios.get(`${MOVIE_URL}discover/movie`, { params })
  return res.data
}
