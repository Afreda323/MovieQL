const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'results',
  description: 'Get the videos that have been added to a movie.',
  fields: () => ({
    id: { type: GraphQLID },
    iso_639_1: { type: GraphQLString },
    iso_3166_1: { type: GraphQLString },
    key: { type: GraphQLString },
    name: { type: GraphQLString },
    site: { type: GraphQLString },
    size: { type: GraphQLInt },
    type: { type: GraphQLString },
  }),
})
