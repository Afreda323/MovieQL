const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'StatusType',
  description: 'A requests response status',
  fields: () => ({
    status_code: { type: GraphQLInt },
    status_message: { type: GraphQLString },
  }),
})
