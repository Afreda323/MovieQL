const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
} = require('graphql')

// MOVIE
const { movieResolver } = require('./resolvers/movieResolver')
const MovieType = require('./types/MovieType')
// MOVIE LIST
const {
  nowPlayingResolver,
  popularResolver,
  topRatedResolver,
  upcomingResolver,
} = require('./resolvers/movieListResolver')
const MovieListType = require('./types/MovieListType')

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
    nowPlaying: {
      type: MovieListType,
      args: {
        page: { type: GraphQLInt },
      },
      resolve: nowPlayingResolver,
    },
    popular: {
      type: MovieListType,
      args: {
        page: { type: GraphQLInt },
      },
      resolve: popularResolver,
    },
    topRated: {
      type: MovieListType,
      args: {
        page: { type: GraphQLInt },
      },
      resolve: topRatedResolver,
    },
    upcoming: {
      type: MovieListType,
      args: {
        page: { type: GraphQLInt },
      },
      resolve: upcomingResolver,
    },
  }),
})
