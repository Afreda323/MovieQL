const {
  getNowPlaying,
  getPopular,
  getUpcoming,
  getTopRated,
} = require('../../services/movieList')

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
