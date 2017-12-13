const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql')

const movieResolver = require('./resolvers/movieResolver')
const MovieType = require('./types/MovieType')

module.exports = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    movie: {
      type: MovieType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: movieResolver,
    },
  }),
})
