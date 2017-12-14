const { GraphQLNonNull, GraphQLInt } = require('graphql')

const { upcomingResolver } = require('../resolvers/movieListResolver')

const MovieListType = require('../types/MovieListType')

module.exports = {
  type: MovieListType,
  description: 'Get a list of movies that are being released in the future.',
  args: {
    page: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: upcomingResolver,
}
