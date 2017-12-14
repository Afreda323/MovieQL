const { GraphQLObjectType, GraphQLString, GraphQLBoolean } = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'SessionType',
  description: 'A user guest session.',
  fields: () => ({
    success: { type: GraphQLBoolean },
    guest_session_id: { type: GraphQLString },
    expires_at: { type: GraphQLString },
  }),
})
