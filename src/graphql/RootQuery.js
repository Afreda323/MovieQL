const { GraphQLObjectType } = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'The root querys',
  fields: () => ({
    session: require('./queries/sessionQuery'),
    sessionRatings: require('./queries/sessionRatingsQuery'),
    movie: require('./queries/movieQuery'),
    nowPlaying: require('./queries/nowPlayingQuery'),
    popular: require('./queries/popularQuery'),
    topRated: require('./queries/topRatedQuery'),
    upcoming: require('./queries/upcomingQuery'),
    search: require('./queries/searchQuery'),
    discover: require('./queries/discoverQuery'),
    company: require('./queries/companyQuery'),
  }),
})
