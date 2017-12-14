const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat,
  GraphQLUnionType,
  inp,
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
  searchResolver,
  discoverResolver
} = require('./resolvers/movieListResolver')

const MovieListType = require('./types/MovieListType')
const MoviePlusType = require('./types/MoviePlusType')

module.exports = new GraphQLObjectType({
  name: 'RootQueryType',
  description: "The root querys",
  fields: () => ({
    movie: {
      type: MovieType,
      description: "Search for a movie by ID",
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: movieResolver,
    },
    nowPlaying: {
      type: MovieListType,
      description: "Get a list of movies currently in theaters.",
      args: {
        page: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: nowPlayingResolver,
    },
    popular: {
      type: MovieListType,
      description: "Get a list of the most popular movies right now.",
      args: {
        page: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: popularResolver,
    },
    topRated: {
      type: MovieListType,
      description: "Get a list of the highest ratest movies.",
      args: {
        page: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: topRatedResolver,
    },
    upcoming: {
      type: MovieListType,
      description: "Get a list of movies that are being released in the future.",
      args: {
        page: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: upcomingResolver,
    },
    search: {
      type: MoviePlusType,
      description: "Search for movies.",
      args: {
        query: { type: new GraphQLNonNull(GraphQLString) },
        page: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: searchResolver,
    },
    discover: {
      type: MoviePlusType,
      description: "Get a list of movies based on a wide range of optional filters.",
      args: {
        page: { type: new GraphQLNonNull(GraphQLInt) },
        sort_by: {
          type: GraphQLString,
          description:
            'Allowed Values: popularity.asc, popularity.desc, release_date.asc, release_date.desc, revenue.asc, revenue.desc, primary_release_date.asc, primary_release_date.desc, original_title.asc, original_title.desc, vote_average.asc, vote_average.desc, vote_count.asc, vote_count.desc',
        },
        primary_release_year: { type: GraphQLInt },
        year: { type: GraphQLInt },
        primary_release_date_gte: { type: GraphQLString },
        primary_release_date_lte: { type: GraphQLString },
        release_date_gte: { type: GraphQLString },
        release_date_lte: { type: GraphQLString },
        vote_count_gte: { type: GraphQLInt },
        vote_count_lte: { type: GraphQLInt },
        vote_average_gte: { type: GraphQLFloat },
        vote_average_lte: { type: GraphQLFloat },
      },
      // include_video
      resolve: discoverResolver,
    },
  }),
})
