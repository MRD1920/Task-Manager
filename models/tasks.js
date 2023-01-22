const mongoose = require('mongoose')
const { stringify } = require('querystring')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required:[true,'must provide name'],
        maxlength:[20,'Name cannot be more than 20 characters']
    },
    completed: {
        default: false,
        type: Boolean
    }
})
module.exports = mongoose.model('Task',taskSchema)