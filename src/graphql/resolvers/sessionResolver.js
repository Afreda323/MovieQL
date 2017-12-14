const {
  getSession,
  getRatings,
  rateMovie,
  removeRating,
} = require('../../services/user')

module.exports.sessionResolver = () => getSession()

module.exports.sessionRatingsResolver = (_, { user_id, sort_by }) =>
  getRatings(user_id, sort_by)

module.exports.rateMovieResolver = (_, { user_id, movie_id, value }) =>
  rateMovie(user_id, movie_id, value)

module.exports.removeRatingResolver = (_, { user_id, movie_id }) =>
  removeRating(user_id, movie_id)
