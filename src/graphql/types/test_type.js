const { GraphQLObjectType, GraphQLString } = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'TestType',
  fields: () => ({
    hello: { type: GraphQLString },
  }),
})
