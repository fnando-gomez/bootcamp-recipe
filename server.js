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
    request(`https://recipes-goodness.herokuapp.com/recipes/${req.params}`, function (error, response, body){
        let data = JSON.parse(body)
        let recipeData = req.params
        console.log(`Ingredient:${recipeData.ingredient}`)

        
        


       res.send(data)
    })






})















server.listen(port, function(){
    console.log(`Running on port ${port}`)
})

