const { GraphQLObjectType, GraphQLString } = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'ProductionCountryType',
  fields: () => ({
    iso_3166_1: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
})
