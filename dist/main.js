const weatherApp = new WeatherAPP
const renderer = new Renderer
const background = document.querySelector('#background')

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) =>{
     weatherApp.coords = { 
         lat: position.coords.latitude,
         lon: position.coords.longitude
     }
    
     weatherApp.getCityByCoord().then(function (city) {
       if (city) {
         renderer.renderSearchData(city)
       }else{
         weatherApp.searchCity = weatherApp.data[0]
         renderer.renderSearchData(weatherApp.searchCity)
       }
     })
 })
}

weatherApp.loadFavCities().then(function (cities) {
  renderer.renderFavCities(cities)
})

$('#searchBtn').on('click', async function () {
  const cityName = $('#searchInput').val()
  $('#searchInput').val('')
  const city = await weatherApp.searchForCity(cityName)
  renderer.renderSearchData(city)
})

$('#searchInput').on('keypress', async function (e) {
  if (e.key == 'Enter') {
    const cityName = $('#searchInput').val()
    $('#searchInput').val('')
    const city = await weatherApp.searchForCity(cityName)
    renderer.renderSearchData(city)
  }
})

$('#searchResult').on('click', '.addToFavBtn', function () {
  if (weatherApp.tempAddToFav(weatherApp.searchCity)) {
    renderer.renderFavCities(weatherApp.data)
    weatherApp.addToFavCities(weatherApp.searchCity)
  }
})

$('#favCitiesContainer').on('click', '.removeFromFavBtn', function () {
  $(this).closest('.favCity').css('display', 'none')
  const cityName = $(this).closest('.favCity').find('.favCityName').text()
  weatherApp.removeFromFavCity(cityName)
})

$('#favCitiesContainer').on('click', '.favCity', function () {
  const id = $(this).data('id')
  const city = weatherApp.findById(id)
  weatherApp.searchCity = city
  renderer.renderSearchData(city)
})

