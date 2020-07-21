var axios = require('axios');
var {DateString} = require('./dateFunctions');
var {DateArray} = require('./dateFunctions');


//Request for current picture
async function getPicInfo()
{
  return await axios.default.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').then( 
    res => {return res.data}
  );
}

//getPicInfo().then(res => console.log(res));

//Code to test the dates. 
let currentDate = new Date(); 
let todayString = DateString(currentDate); 
let dateValues = DateArray(currentDate);
dateValues.unshift(todayString); 
//dateValues.forEach(date => console.log(date));

//Make requests for pictures from past 5 days. 
async function getWeekPic(dateValues)
{
  //APOD API Date Format = YYYY-MM-DD
  //Assume: dateValues contains 5 values. 
  return await axios.default.all([
    axios.default.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date='+dateValues[0]), 
    axios.default.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date='+dateValues[1]), 
    axios.default.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date='+dateValues[2]), 
    axios.default.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date='+dateValues[3]), 
    axios.default.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date='+dateValues[4]), 
    ]).then(
      axios.default.spread((res1, res2, res3, res4, res5) =>
      {
        //console.log(res1.data["date"]); 
        //console.log(res2.data["date"]);
        let resArray = new Array(); 
        resArray.push(res1.data); 
        resArray.push(res2.data); 
        resArray.push(res3.data);
        resArray.push(res4.data);
        resArray.push(res5.data);
        return resArray;
        //resArray.forEach( d => console.log(d)); 
      }
    ));
}

//getWeekPic(dateValues); //Testing the function

//ES5 way of exporting
module.exports = {
  getPicInfo: getPicInfo, 
  getWeekPic: getWeekPic
}
