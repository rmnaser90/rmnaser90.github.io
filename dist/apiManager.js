class ApiManager{
    
    async getCityByName(cityName){
        return await $.get(`/weather/${cityName}`)
    }

    async getFavCities(){
        return await $.get('/cities')
    }

    async addToFavCities(city){

    return await $.post('/city',{city})
    }

    async deleteCity(cityName){
        return await $.ajax({
            method: "DELETE",
            url: `/city/${cityName}`
        })
    }
    async getCityByCoords(coord){
         const city = await $.post(`/geoWeather`, coord)
         return city
    }
}

const api = new ApiManager

