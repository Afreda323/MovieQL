const { getCompany, getCompanyMovies } = require('../../services/company')

const { getDiscover } = require('../../services/discover')

module.exports.companyResolver = (_, { company_id }) => {
  return getCompany(company_id)
}
module.exports.companyMoviesResolver = ({ id }, { page }) => {
  return getCompanyMovies(id, page)
}
