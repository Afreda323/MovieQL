const {
  getNowPlaying,
  getPopular,
  getUpcoming,
  getTopRated,
  searchMovies,
} = require('../../services/movieList')

const { getDiscover } = require('../../services/discover')

module.exports.nowPlayingResolver = (_, { page }) => {
  return getNowPlaying(page)
}
module.exports.popularResolver = (_, { page }) => {
  return getPopular(page)
}
module.exports.upcomingResolver = (_, { page }) => {
  return getUpcoming(page)
}
module.exports.topRatedResolver = (_, { page }) => {
  return getTopRated(page)
}
module.exports.searchResolver = (_, { query, page }) => {
  return searchMovies(query, page)
}
module.exports.discoverResolver = (_, args) => {
  return getDiscover(args)
}
