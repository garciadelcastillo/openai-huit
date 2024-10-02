// curl --location 'https://go.apis.huit.harvard.edu/ais-openai-direct/v1/chat/completions' --header 'Content-Type: application/json' --header 'api-key: YOUR KEY HERE' --data '{"model": "gpt-4o",     "messages": [{"role": "user", "content": "To what extent does scientific conservatism limit new discoveries?"}], "temperature": 0.7}'

const process = require('process');

const endPoint = "https://go.apis.huit.harvard.edu/ais-openai-direct/v1/models";

console.log("Sending request to:", endPoint);

const reqParams = {
  method: 'GET',
  headers: {
    // 'Content-Type': 'application/json',
    // 'Accept-Encoding': '*',  // apigee was giving encoding problems 
    'api-key': process.env.HUIT_API_KEY_OPENAI,
  },
  // body: JSON.stringify(reqBody)
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

