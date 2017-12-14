const { GraphQLString, GraphQLNonNull, GraphQLFloat } = require('graphql')

const { rateMovieResolver } = require('../resolvers/sessionResolver')

const StatusType = require('../types/StatusType')

module.exports = {
  type: StatusType,
  description: 'Get a users rated movies',
  args: {
    user_id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    movie_id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    value: {
      type: new GraphQLNonNull(GraphQLFloat),
      description: 'Decimal between .5 and 10.0',
    },
  },
  resolve: rateMovieResolver,
}
