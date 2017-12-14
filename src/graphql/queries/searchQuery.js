const { GraphQLString, GraphQLNonNull, GraphQLInt } = require('graphql')

const { searchResolver } = require('../resolvers/movieListResolver')

const MoviePlusType = require('../types/MoviePlusType')

module.exports = {
  type: MoviePlusType,
  description: 'Search for movies.',
  args: {
    query: { type: new GraphQLNonNull(GraphQLString) },
    page: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: searchResolver,
}
