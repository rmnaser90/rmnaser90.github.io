
class WeatherAPP {
    constructor(
    ) {
        this.apiManger = new ApiManager
        this.data = []
        this.searchCity = {}
        this.coords = {}
    }

    tempAddToFav(city) {
        const ifExist = this.data.find(c => city.name == c.name)
        if (ifExist) {
            console.log('already fav');
            return false
        } else {
            this.data.push(city)
            return true
        }
    }
    
    findById(id) {
        const city = this.data.find(c => c._id == id)
        return city
    }

    async loadFavCities() {
        const result = await this.apiManger.getFavCities()
        this.data = result
        return this.data
    }
    async addToFavCities(city) {
        city = JSON.stringify(city)
        await this.apiManger.addToFavCities(city)
        return await this.loadFavCities()
    }

    async searchForCity(cityName) {
        const city = await this.apiManger.getCityByName(cityName)
        this.searchCity = city
        return this.searchCity
    }
    async removeFromFavCity(cityName) {
        await this.apiManger.deleteCity(cityName)
        return await this.loadFavCities()
    }

    async getCityByCoord() {
        const city = await this.apiManger.getCityByCoords(this.coords)
        this.searchCity = city
        return city
    }

}


