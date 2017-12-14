const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'CastType',
  fields: () => ({
    cast_id: { type: GraphQLInt },
    character: { type: GraphQLString },
    credit_id: { type: GraphQLString },
    gender: { type: GraphQLInt },
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    order: { type: GraphQLInt },
    profile_path: { type: GraphQLString },
  }),
})
