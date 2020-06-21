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

