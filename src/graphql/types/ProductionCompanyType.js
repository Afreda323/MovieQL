const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'ProductionCompanyType',
  description: "The definition of a movies production company.",
  fields: () => ({
    name: { type: GraphQLString },
    id: { type: GraphQLInt },
  }),
})
