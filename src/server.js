
const express = require('express')
const server = express()
const request = require('request')
const path = require('path')

const port = 9030


//Serving files 
server.use(express.static(path.join(__dirname,`../dist`)))
server.use(express.static(path.join(__dirname,`../node_modules`)))


server.get('/sanity', (req, res) => res.send("I'm alive and running"))
server.get('/', (req, res) => res.send("I'm alive, go to the right route"))


// Routes and data
// API --> https://recipes-goodness.herokuapp.com/recipes/YOUR_INGREDIENT

server.get('/recipes/:ingredient', (req, res) => {
    const ingredient = req.params.ingredient
    let apiAddr = `https://recipes-goodness.herokuapp.com/recipes/${ingredient}`
    request(apiAddr, function (error, response, body) {
        let recipeData = JSON.parse(body).results//<-- Se agrega ".results" porque la API entrega: {results: [RECIPES]}, así se obtiene el array final
        let realData = recipeData.map(r => {
            return {
                title: r.title,
                ingredients: r.ingredients,
                thumbnail: r.thumbnail,
                href: r.href,
            }
        })
        res.send(realData)//Why this should be inside the request?? Ask Hunter
        // console.log(path.join(__dirname,`/node_modules`))
    })
})







server.listen(port, () => console.log(`Server running on http://localhost:${port}`))



















































// const express = require('express')
// const server = express()
// const request = require ('request')
// const path = require ('path')

// const port = 8080


// server.get('/sanity',function(req,res){
//     res.send("Oki_doki")
// })

// //Serving the files



// //Accesing the API


// server.get('/recipes/:ingredient', (req, res) => {



//   res.send('GET request to the homepage')
// })


// // request(`https://recipes-goodness.herokuapp.com/recipes/${req.params}`, function (error, response, body){
// //     let data = JSON.parse(body)
// //     let recipeData = req.params
// //     console.log(`Ingredient:${recipeData.ingredient}`)












// server.listen(port, function(){
//     console.log(`Running on http://localhost:${port}`)
// })






