/**
 * Created by Mohammad on 1/27/2017.
 */

var mongoose = require('mongoose');
//create a model which will represent a collection on db
// Todo model will be transfered to todos collection

var Todo = mongoose.model('Todo',{
    text : { type: String , required : true, minlength: 1 , trim:true},
    completed: {type: Boolean, default: false},
    completedAt: {type: Number , default:null}
});

module.exports = {Todo:Todo};