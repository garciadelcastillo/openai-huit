// curl --location 'https://go.apis.huit.harvard.edu/ais-openai-direct/v1/chat/completions' --header 'Content-Type: application/json' --header 'api-key: YOUR KEY HERE' --data '{"model": "gpt-4o",     "messages": [{"role": "user", "content": "To what extent does scientific conservatism limit new discoveries?"}], "temperature": 0.7}'

const process = require('process');

const endPoint = "https://go.apis.huit.harvard.edu/ais-openai-direct/v1/chat/completions";
const reqBody = {
  "model": "gpt-5",
  "messages": [{
    "role": "user",
    "content": "How would you define the concept of 'Enactive Design'? How does it relate to the concept of 'Enactivism' in the cognitive sciences?"
  }],
  // "temperature": 0.7
};

console.log("Sending request:", reqBody);

const reqParams = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept-Encoding': '*',  // apigee was giving encoding problems 
    'api-key': process.env.HUIT_API_KEY_OPENAI,
  },
  body: JSON.stringify(reqBody)
}

// Start request
fetch(endPoint, reqParams)
  .then(res => res.json())
  .then(json => {
    console.log(json);
    console.log();
    
    json.choices.forEach((choice, i) => {
      console.log("RESPONSE #", i);
      console.log(choice.message.content);
      console.log();
    }); 
  });

