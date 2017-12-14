const { GraphQLString, GraphQLNonNull, GraphQLInt } = require('graphql')

const { sessionRatingsResolver } = require('../resolvers/sessionResolver')

const MoviePlusType = require('../types/MoviePlusType')

module.exports = {
  type: MoviePlusType,
  description: 'Get a users rated movies',
  args: {
    user_id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    sort_by: {
      type: GraphQLString,
      description: 'Allowed Values: created_at.asc, created_at.desc',
    },
  },
  resolve: sessionRatingsResolver,
}
