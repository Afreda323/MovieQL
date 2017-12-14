const { GraphQLSchema } = require('graphql')
const query = require('./RootQuery')
const mutation = require('./RootMutation')

module.exports = new GraphQLSchema({
  query,
  mutation
})
