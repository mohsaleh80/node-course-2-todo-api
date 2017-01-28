/**
 * Created by Mohammad on 1/27/2017.
 */

var mongoose = require('mongoose');

// use promise instead of callbacks
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoAppMongoose').then((conn)=>{ console.log('connected to server');})
    .catch((err)=>{console.log('Unable to connect to server.');
        console.log(err);});

module.exports = { mongoose: mongoose};