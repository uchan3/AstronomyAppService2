var express = require('express'); //Indicates to use Express framework. 
var service = express(); 

//Test that server is up and running. 
service.listen(3000, () => {
  console.log("Hello, I am listening on port 3000!");
});