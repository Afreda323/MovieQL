const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'MoviePlusType',
  fields: () => {
    const MovieType = require('./MovieType')
    return {
      page: { type: GraphQLInt },
      results: { type: new GraphQLList(MovieType) },
      total_pages: { type: GraphQLInt },
      total_results: { type: GraphQLInt },
    }
  },
})
