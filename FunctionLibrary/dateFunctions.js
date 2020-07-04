var currentDate = new Date();
var yesterday = new Date(currentDate); 
/*We use setDate() to define a new date. 
getDate() retrieves date of month.
So, we subtract 1 to get yesterday's date.*/
yesterday.setDate(yesterday.getDate()-1); 

var todayString = DateString(currentDate); 
var yesterdayString = DateString(yesterday); 

console.log(todayString); 
console.log(yesterdayString); 

function DateString(dateValue)
{
  //UTC: a time standard used by the world
  var year = dateValue.getUTCFullYear(); 
  var month = dateValue.getUTCMonth() + 1;  //Increment by one. Month returns value btwn 0 and 11. 
  var dateNumber = dateValue.getUTCDate(); 
  var DateString = year + '-' + month + '-' + dateNumber; 
  return DateString; 
}

//Listing methods of date here for reference. 
// currentDate.getDate(); //Day of month
// currentDate.getFullYear(); //Year 
// currentDate.getMonth(); //Month

