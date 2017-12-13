const { GraphQLObjectType, GraphQLString } = require('graphql')

const testResolver = require('./resolvers/test_resolver')
const TestType = require('./types/test_type')

module.exports = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    test: {
      type: TestType,
      args: {
        text: { type: GraphQLString },
      },
      resolve: testResolver,
    },
  }),
})
