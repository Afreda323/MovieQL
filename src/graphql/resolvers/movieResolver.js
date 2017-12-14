const { getMovie } = require('../../services/movies')

module.exports = (_, { id }) => {
  return getMovie(id)
}
