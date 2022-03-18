const mongoose = require('mongoose')
const Schema = mongoose.Schema

const citySchema= new Schema({
    name: String,
    coord: Object,
    openWeatherId: Number,
    temprature: String,
    conditionPic: String,
    condition: String,
    photoUrl: String,
    date: Date
})

const City = mongoose.model('city', citySchema)

module.exports = City