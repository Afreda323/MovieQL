const { GraphQLObjectType, GraphQLString } = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'SpokenLanguageType',
  fields: () => ({
    iso_639_1: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
})
