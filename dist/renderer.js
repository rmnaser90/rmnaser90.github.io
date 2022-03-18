class Renderer {

    renderSearchData(city) {
        const searchResult = $('#searchResult')
        searchResult.empty()
        $('#background').remove()
        $('body').append($(`
        <img class="body" onload="startMoving(this)"id="background" src="${city.photoUrl}" alt="">
        `))
        
        const source = $('#search-template').html()
        const template = Handlebars.compile(source)
        const html = template(city)
        searchResult.append(html)
    }
    renderFavCities(cities){
        $('#favCitiesContainer').empty()
        const source = $('#fav-template').html()
        const template = Handlebars.compile(source)
        const html = template({cities})
        $('#favCitiesContainer').append(html)
    }
}
