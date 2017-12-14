const { GraphQLNonNull, GraphQLString } = require('graphql')

const { movieResolver } = require('../resolvers/movieResolver')

const MovieType = require('../types/MovieType')

module.exports = {
  type: MovieType,
  description: 'Search for a movie by ID',
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: movieResolver,
}
