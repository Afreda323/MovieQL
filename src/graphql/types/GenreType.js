const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'GenreType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  }),
})