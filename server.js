const express = require('express')
const server = express()

const port = 8080

server.get('/sanity',function(req,resp){
    resp.send("Oki_doki")
})















server.listen(port, function(){
    console.log(`Running on port ${port}`)
})

