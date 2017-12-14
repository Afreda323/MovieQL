const { GraphQLObjectType } = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'RootMutationType',
  description: 'The root mutaions',
  fields: () => ({
    rateMovie: require('./mutations/rateMovieMutation')
  }),
})
