const request = require('request')

const fetchBreedDescription = function (breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`
  request(URL, (error, response, body) => {
    if (error !== null) {
      callback('Error 404: Wrong URL!!!', null)
      return
    }

    const data = JSON.parse(body)
    if (breedName === undefined) {
      callback('Error 400: Type the breed', null)
    }
    if (data.length === 0 && breedName !== undefined) {
      callback(`Error 204: There is no CAT breed called ${breedName}`, null)
    }
    if (data.length !== 0) { // data.length !== 0
      callback(null, `${data[0].description}`)
    }
  })
}

module.exports = { fetchBreedDescription }
