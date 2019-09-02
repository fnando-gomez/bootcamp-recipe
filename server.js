const express = require('express')
const server = express()
const request = require ('request')
const path = require ('path')

const port = 8080

server.get('/sanity',function(req,res){
    res.send("Oki_doki")
})


//Accesing the API
server.get ('/recipes/:ingredient',(req,res) => {
    request('https://recipes-goodness.herokuapp.com/recipes/YOUR_INGREDIENT', function (error, response, body){
        let reqData = JSON.parse(body)
        let recipeData = req.params
        console.log(`Recipe:${recipeData.ingredient}`)

        console.log(reqData)


        res.send("testing")
    })




})















server.listen(port, function(){
    console.log(`Running on port ${port}`)
})

