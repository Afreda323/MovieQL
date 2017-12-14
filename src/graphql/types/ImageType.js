const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat,
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'image',
  description: 'Get the videos that have been added to a movie.',
  fields: () => ({
    aspect_ratio: { type: GraphQLFloat },
    file_path: { type: GraphQLString },
    height: { type: GraphQLInt },
    iso_639_1: { type: GraphQLString },
    average: { type: GraphQLInt },
    count: { type: GraphQLInt },
    width: { type: GraphQLInt },
  }),
})
