const {
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLFloat,
} = require('graphql')

// Import needed custom types
const SpokenLanguageType = require('./SpokenLanguageType')
const ProductionCountryType = require('./ProductionCountryType')
const GenreType = require('./GenreType')
const ProductionCompanyType = require('./ProductionCompanyType')
const VideoType = require('./VideoType')

module.exports = new GraphQLObjectType({
  name: 'MovieType',
  fields: () => ({
    adult: { type: GraphQLBoolean },
    backdrop_path: { type: GraphQLString },
    budget: { type: GraphQLInt },
    genres: {
      type: new GraphQLList(GenreType),
    },
    homepage: { type: GraphQLString },
    id: { type: GraphQLID },
    imdb_id: { type: GraphQLID },
    original_language: { type: GraphQLString },
    original_title: { type: GraphQLString },
    overview: { type: GraphQLString },
    popularity: { type: GraphQLFloat },
    poster_path: { type: GraphQLString },
    production_companies: {
      type: new GraphQLList(ProductionCompanyType),
    },
    production_countries: {
      type: new GraphQLList(ProductionCountryType),
    },
    release_date: { type: GraphQLString },
    revenue: { type: GraphQLInt },
    runtime: { type: GraphQLInt },
    spoken_languages: { type: new GraphQLList(SpokenLanguageType) },
    status: { type: GraphQLString },
    tagline: { type: GraphQLString },
    title: { type: GraphQLString },
    video: { type: GraphQLBoolean },
    vote_average: { type: GraphQLFloat },
    vote_count: { type: GraphQLInt },
    videos: {
      type: new GraphQLObjectType({
        name: 'videos',
        fields: () => ({
          results: {
            type: new GraphQLList(VideoType),
          },
        }),
      }),
    },
  }),
})

