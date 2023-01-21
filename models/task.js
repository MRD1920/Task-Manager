const mongoose = require('mongoose')
const { stringify } = require('querystring')

const tassScheme = new mongoose.Schema({
    name:string,completed:boolean
})