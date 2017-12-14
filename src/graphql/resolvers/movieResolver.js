const {
  getMovie,
  getRecommendations,
  getSimilar,
  getDiscover
} = require('../../services/movies')

module.exports.movieResolver = (_, { id }) => {
  return getMovie(id)
}
module.exports.recommendationsResolver = ({ id }, { page }) => {
  return getRecommendations(id, page)
}
module.exports.similarResolver = ({ id }, { page }) => {
  return getSimilar(id, page)
}
module.exports.discoverResolver = (_, args) => {
  return getDiscover(args)
}

