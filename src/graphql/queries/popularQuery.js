const { GraphQLNonNull, GraphQLInt } = require('graphql')

const { popularResolver } = require('../resolvers/movieListResolver')

const MovieListType = require('../types/MovieListType')

module.exports = {
  type: MovieListType,
  description: 'Get a list of the most popular movies right now.',
  args: {
    page: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: popularResolver,
}
