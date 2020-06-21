var express = require('express'); //Indicates to use Express framework. 
var axios = require('axios'); //Used for making http requests to external APIs. 
var service = express(); 

//Test that server is up and running. 
service.listen(3000, () => {
  console.log("Hello, I am listening on port 3000!");
});

//Get current astronomy picture of day. 
service.get('/CurrentPicture', function(req, res) 
{
  getPicInfo().then(
    function(result)
    {
      return res.send(result);
    }
  );
});

//Get astronomy pictures for the last five days. 
service.get('/LastWeekPic', function(req, res)
{
  return res.json('Placeholder for last 5 days of pictures.');
});


//Request for current picture
async function getPicInfo()
{
  return await axios.default.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').then( 
    function(response)
    {
      return response.data; //Focus on retrieving data. 
    }  
  );
}