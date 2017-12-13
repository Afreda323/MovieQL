const { GraphQLObjectType, GraphQLString } = require('graphql')

const testResolver = require('./resolvers/testResolver')
const TestType = require('./types/TestType')

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
