const process = require('process');

const endPoint = "https://go.apis.huit.harvard.edu/ais-openai-direct/v1/models";

console.log("Sending request to:", endPoint);

const reqParams = {
  method: 'GET',
  headers: {
    'api-key': process.env.HUIT_API_KEY_OPENAI,
  },
}

// Start request
fetch(endPoint, reqParams)
  .then(res => res.json())
  .then(json => {
    console.log(json);
    console.log();
    
    if (json.data) {
      const model_names = json.data.map( model => model.id )
        .sort( (a,b) => a.localeCompare(b) );
      console.log(model_names);
    }
  });

