const { GraphQLString, GraphQLNonNull, GraphQLFloat } = require('graphql')

const { removeRatingResolver } = require('../resolvers/sessionResolver')

const StatusType = require('../types/StatusType')

module.exports = {
  type: StatusType,
  description: 'Remove rating',
  args: {
    user_id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    movie_id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: removeRatingResolver,
}
