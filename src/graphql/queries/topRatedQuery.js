const { GraphQLNonNull, GraphQLInt } = require('graphql')

const { topRatedResolver } = require('../resolvers/movieListResolver')

const MovieListType = require('../types/MovieListType')

module.exports = {
  type: MovieListType,
  description: 'Get a list of the highest ratest movies.',
  args: {
    page: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: topRatedResolver,
}
