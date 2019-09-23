let axios = require('axios')

const KEY = process.env['YELP_API_KEY']

const search_url = 'https://api.yelp.com/v3/businesses/search'

module.exports = function(city, searchTerm) {

    /* To authenticate, add the API key in the request header
    https://www.yelp.com/developers/documentation/v3/authentication */

    let header = { 'Authorization': 'BEARER ' + KEY}

    /* Provide filters for the search as described at 
    https://www.yelp.com/developers/documentation/v3/business_search */

    let query = { 
        location: city,
        term: searchTerm,
        categories: 'restaurants',
        radius: 10000,      // in meters - about 10km ~ 6 miles
        price: 1,     // lowest price bracket
        limit: 50     // as many results as are permitted
    }
    
    return axios.get( search_url, { params: query, headers: header })

}