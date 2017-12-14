const { GraphQLNonNull, GraphQLInt } = require('graphql')

const { nowPlayingResolver } = require('../resolvers/movieListResolver')

const MovieListType = require('../types/MovieListType')

module.exports = {
  type: MovieListType,
  description: 'Get a list of movies currently in theaters.',
  args: {
    page: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: nowPlayingResolver,
}
