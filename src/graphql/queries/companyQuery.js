const { GraphQLString, GraphQLNonNull, GraphQLInt } = require('graphql')

const { companyResolver } = require('../resolvers/companyResolver')

const CompanyType = require('../types/CompanyType')

module.exports = {
  type: CompanyType,
  description: 'Get a companies details',
  args: {
    company_id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: companyResolver,
}
