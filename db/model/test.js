const mongoose = require('mongoose')
const test = mongoose.Schema({
    path:String
})
module.exports= mongoose.model('test',test)