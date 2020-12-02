const express = require('express')
const WeatherApi = require('./services')
const weatherApi = new WeatherApi
const router = express.Router()
const moment = require('moment')
const mongoose = require('mongoose')
const City = require('../models/city')




router.get('/weather/:city', async function (req,res) {
    const {city} = req.params
    const result = await weatherApi.getWetherBycity(city)

    const weather = {
        name: result.data.name,
        temprature: result.data.main.temp,
        condition: result.data.weather[0].description,
        conditionPic: `http://openweathermap.org/img/wn/${result.data.weather[0].icon}.png`,
        date : new Date()
    }
    res.send(weather)
})

router.get('/cities', async function (req,res) {
    const result = await City.find({})
    
res.send(result)
})

router.post('/city', function (req,res) {
    const requestCity = req.body
    const city = new City(requestCity)
    city.save().then(function (err,result) {
        res.send(result)
    })
})

router.delete('/city/:name', async function (req,res) {
    const cityName = req.params
    const result = await City.findOneAndDelete(cityName)
    res.send(result)
})




module.exports = router