const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat,
  GraphQLUnionType,
} = require('graphql')

// Session
const { sessionResolver } = require('./resolvers/sessionResolver')
const SessionType = require('./types/SessionType')

// Movie
const { movieResolver } = require('./resolvers/movieResolver')
const MovieType = require('./types/MovieType')

// Movie List
const {
  nowPlayingResolver,
  popularResolver,
  topRatedResolver,
  upcomingResolver,
  searchResolver,
  discoverResolver,
} = require('./resolvers/movieListResolver')

const MovieListType = require('./types/MovieListType')
const MoviePlusType = require('./types/MoviePlusType')

module.exports = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'The root querys',
  fields: () => ({
    session: require('./queries/sessionQuery'),
    movie: require('./queries/movieQuery'),
    nowPlaying: require('./queries/nowPlayingQuery'),
    popular: require('./queries/popularQuery'),
    topRated: require('./queries/topRatedQuery'),
    upcoming: require('./queries/upcomingQuery'),
    search: require('./queries/searchQuery'),
    discover: require('./queries/discoverQuery'),
  }),
})
