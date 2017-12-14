const { GraphQLObjectType, GraphQLString } = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'ProductionCountryType',
  description: "The definition of a movies production country.",
  fields: () => ({
    iso_3166_1: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
})
