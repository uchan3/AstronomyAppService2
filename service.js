var express = require('express'); //Indicates to use Express framework. 
var axios = require('axios'); //Used for making http requests to external APIs. 

//List of modules to import into
var axiosLib = require('./FunctionLibrary/axiosFunctions');
var dateFunc = require('./FunctionLibrary/dateFunctions'); 

var service = express(); 

//Test that server is up and running. 
service.listen(3000, () => {
  console.log("Hello, I am listening on port 3000!");
});

//Get current astronomy picture of day. 
service.get('/CurrentPicture', function(req, res) 
{
  axiosLib.getPicInfo().then(
    function(result)
    {
      return res.send(result); 
    }
  )
});

//Get astronomy pictures for the last five days. 
service.get('/LastWeekPic', function(req, res)
{
  //return res.json('Placeholder for last 5 days of pictures.');
  let currentDate = new Date(); 
  let todayString = dateFunc.DateString(currentDate); 
  let dateValues = dateFunc.DateArray(currentDate);
  dateValues.unshift(todayString); 
  axiosLib.getWeekPic(dateValues).then(
    function(result)
    {
      return res.send(result);
    }
  )
});

