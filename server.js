// import the app dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// instantiate the app
const app = express()

// the port the server is running on
const PORT = process.env.PORT || 5050;

// configure the app to use body-parser and cors
app.use(express.json())
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
  
// the get enpoint that returns the json response
app.get('/', (request, response)=>{
    response.status(200).json({
     "slackUsername": "Pere-ebi", "backend": true, "age": 28, "bio": "I love to eat, read, travel and be creative with my hands"
    })
 });

// listen on the port 
app.listen(PORT, ()=>{
    console.log(`Server is successfully running on PORT: ${PORT}`);
});

