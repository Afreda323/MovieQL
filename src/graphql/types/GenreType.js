const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'GenreType',
  description: "The definition of a movies genre.",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  }),
})