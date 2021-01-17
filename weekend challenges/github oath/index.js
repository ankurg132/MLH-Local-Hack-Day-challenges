const express = require('express');
const app = express();

const clientID = '*****'
const clientSecret = '*****'

const axios = require('axios');
// Declare the redirect route
app.get('/welcome', (req, res) => {

  // The req.query object has the query params that were sent to this route.
  const requestToken = req.query.code
  
  axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    // Set the content type header, so that we get the response in JSON
    headers: {
         accept: 'application/json'
    }
    
  }).then((response) => {
    
    const accessToken = response.data.access_token
    console.log(response.data)
    
    // redirect the user to the home page, along with the access token
    res.redirect(`/welcome.html?access_token=${accessToken}`)
  })
})

app.use(express.static(__dirname + '/public'))
app.listen(2401,()=>{
    console.log("Server listening on port : 2401")
})