var currentDate = new Date();

var todayString = DateString(currentDate); 

var dateValues = DateArray(currentDate); 
dateValues.unshift(todayString); 

//Testing that dates are showing. 
//console.log(todayString); 
dateValues.forEach(value => console.log(value)); 

function DateArray(dateValue)
{
  //Return previous 4 days. 
  var DateArray = new Array(); 
  var i;
  for(i = 1; i<=4; i++)
  {
    var tempDate = new Date(dateValue); 
    /*We use setDate() to define a new date. 
    getDate() retrieves date of month.
    So, we subtract 1 to get yesterday's date.*/
    tempDate.setDate(tempDate.getDate()-i); 
    var tempString = DateString(tempDate); 
    DateArray.push(tempString); 
  }
  return DateArray; 
}

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

