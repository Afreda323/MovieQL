const { GraphQLSchema } = require('graphql')
const query = require('./RootQuery')

module.exports = new GraphQLSchema({
  query,
})
