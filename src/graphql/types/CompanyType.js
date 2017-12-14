const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'CompanyType',
  description: 'The definition of a company',
  fields: () => ({
    description: { type: GraphQLString },
    headquarters: { type: GraphQLString },
    homepage: { type: GraphQLString },
    id: { type: GraphQLID },
    logo_path: { type: GraphQLString },
    name: { type: GraphQLString },
    movies: require('../queries/companyMoviesQuery')
  }),
})
