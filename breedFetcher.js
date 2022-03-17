const breed = process.argv[2]
const request = require('request');
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  const data = JSON.parse(body)

  // request.use((req, res, next) => {
  //   res.status(404).send({
  //   status: 404,
  //   error: ‘PAGE NOT FOUND’
  //   })
  //  })

  if (data.length !== 0) {
    console.log('statusCode:', response && response.statusCode);
    console.log('data:', data);
    // console.log(typeof data);
  }
  else {
    console.log(error, `There is no CAT breed ${breed}....Meow`);
  }
});

