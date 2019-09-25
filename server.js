const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const axios = require('axios')

const app = express();
app.use(cors());
app.use(parser.json());

app.get("/", (req, res)=>{
  res.send('success')
})

app.post("/search", (request, response)=>{
  let searchInput = request.body.input
  // console.log(searchInput)
  axios.get(`https://www.mediawiki.org/w/api.php?action=opensearch&search=${searchInput}`)
    .then((res)=>{
      // console.log('data: ', res.data)
      response.send(res.data)
    })
})

let port = process.env.PORT || 3000;
app.listen(port, ()=>{
  console.log(`Listening on port ${port}...`)
})