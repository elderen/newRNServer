const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const axios = require('axios')

const app = express();
app.use(cors());
app.use(parser.json());

app.post("/search", (request, response)=>{
  let searchInput = request.body.input
  axios.get(`https://www.mediawiki.org/w/api.php?action=opensearch&search=${searchInput}`)
  response.send('success')
})

let port = 3000;
app.listen(port, ()=>{
  console.log(`Listening on port ${port}...`)
})