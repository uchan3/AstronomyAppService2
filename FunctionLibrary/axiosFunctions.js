var axios = require('axios');

//TODO: See if this is okay to include JS functions here?

//Request for current picture
async function getPicInfo()
{
  return await axios.default.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').then( 
    res => {return res.data}
  );
}

getPicInfo().then(res => console.log(res));

//Make requests for pictures from past 5 days. 
async function getFivePic()
{
  //APOD API Date Format = YYYY-MM-DD
  var CurrentDay = new Date().getDate();
  //axios.default.all()

}
