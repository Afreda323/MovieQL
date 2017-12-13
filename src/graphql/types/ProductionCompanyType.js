const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'ProductionCompanyType',
  fields: () => ({
    name: { type: GraphQLString },
    id: { type: GraphQLInt },
  }),
})
