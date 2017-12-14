const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat,
} = require('graphql')

const {
  discoverResolver,
} = require('../resolvers/movieListResolver')

const MoviePlusType = require('../types/MoviePlusType')

module.exports = {
  type: MoviePlusType,
  description:
    'Get a list of movies based on a wide range of optional filters.',
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
  resolve: discoverResolver,
}
