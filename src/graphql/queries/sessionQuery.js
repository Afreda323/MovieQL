const { GraphQLNonNull, GraphQLString } = require('graphql')

const { sessionResolver } = require('../resolvers/sessionResolver')

const SessionType = require('../types/SessionType')

module.exports = {
  type: SessionType,
  description: 'Get a guest session',
  resolve: sessionResolver,
}
