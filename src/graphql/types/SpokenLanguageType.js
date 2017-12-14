const { GraphQLObjectType, GraphQLString } = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'SpokenLanguageType',
  description: "The definition of a movies languages.",
  fields: () => ({
    iso_639_1: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
})
