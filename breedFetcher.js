const breed = process.argv[2]
const request = require('request');
const URL = 'https://api.thecatapi.com/v1/breeds/search?q=${breed}'
request(URL, (error, response, body) => {
  if(error){
    console.log('Error 404: Wrong URL!!!...Meow');
    return
  }
  const data = JSON.parse(body); 
    if (data.length !== 0) {
      console.log('statusCode:', response && response.statusCode);
      console.log('data:', data);
      // console.log(typeof data);
    } 
    else if(breed === undefined){
    console.log('Error 400:', `Type the breed....Meow`);
    }
    else if (data.length === 0) {
      console.log('Error 204:', `There is no CAT breed called ${breed}....Meow`);
    } 
});

