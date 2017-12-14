const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
} = require('graphql')
const MovieType = require('./MovieType')

module.exports = new GraphQLObjectType({
  name: 'MovieListType',
  fields: () => ({
    page: { type: GraphQLInt },
    results: { type: new GraphQLList(MovieType) },
    total_pages: { type: GraphQLInt },
    total_results: { type: GraphQLInt },
    dates: {
      type: new GraphQLObjectType({
        name: 'dates',
        fields: () => ({
          maximum: { type: GraphQLString },
          minimum: { type: GraphQLString },
        }),
      }),
    },
  }),
})
