const { GraphQLString, GraphQLNonNull, GraphQLInt } = require('graphql')

const { companyMoviesResolver } = require('../resolvers/companyResolver')

const MoviePlusType = require('../types/MoviePlusType')

module.exports = {
  type: MoviePlusType,
  description: 'Get all of a companies movies',
  args: {
    page: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: companyMoviesResolver,
}
