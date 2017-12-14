const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'CrewType',
  description: "The definition of a movie crew member",
  fields: () => ({
    credit_id: { type: GraphQLString },
    department: { type: GraphQLString },
    gender: { type: GraphQLInt },
    id: { type: GraphQLID },
    job: { type: GraphQLString },
    name: { type: GraphQLString },
    profile_path: { type: GraphQLString },
  }),
})
