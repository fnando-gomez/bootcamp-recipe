class Renderer {

    renderRecipes(realData) {
        let source = $('#recipes-template').html()
        let template = Handlebars.compile(source)
        let newHTML = template({ realData })
        $('#container').empty().append(newHTML)
    }
}