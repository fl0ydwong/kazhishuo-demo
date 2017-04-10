const mongoose = require('mongoose')
const init = require('./init.json')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    pwd: String,
    nick:String,
    portraitUrl:String,
    introduction:String,
    email:String,
    tags:String
})

const cardSchema = new Schema({
    title: String,
    author: String,
    content: String,
    bgurl: String,
    createTime: String,
    modifyTime: String,
    category: String,
    creator: String,
    tags: String,
    boardID: String,
    userID: String,
    state:String
})

const boardSchema = new Schema({
    name: String,
    tags: String,
    description: String,
    userID: String,
    userName: String,
})

const Models = {
    User: mongoose.model('User', userSchema),
    Card: mongoose.model('Card', cardSchema),
    Board: mongoose.model('Board', boardSchema),
    initialized: false
}

const initialize = function () {
    Models.User.find(null, function (err, doc) {
        if (err) {
            console.log(err)
        } else if (!doc.length) {
            console.log('Database opens for the first time...')
            Promise.all(init.map(item => new Models[item.type](item).save()))
                .then(() => console.log('Initialize successfully.'))
                .catch(() => console.log('Something went wrong during initializing.'))
        } else {
            Models.initialized = true
        }
    })
}

mongoose.connect('mongodb://127.0.0.1/test')
// mongoose.set('debug', true)

const db = mongoose.connection

db.on('error', function () {
    console.log('Database connection error.')
})

db.once('open', function () {
    console.log('The database has connected.')
    initialize()
})

module.exports = Models
