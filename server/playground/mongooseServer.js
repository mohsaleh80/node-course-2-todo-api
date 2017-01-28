//import mongoose
var {mongoose}= require('../db/mongoose');
var {User} = require('../model/User');
var {Todo} = require('../model/todo');



//create model instance == doc

var newTodo = new Todo({
    text: 'eat Breakfast',
    completed: true,
    completedAt: 123
});

newTodo.save().then((doc)=>{
        console.log('saved todo: '+doc);
    },
    (err)=>{
        console.log('Unable to create Todo with error:'+err);
    });

//create user instance

var newUser = new User({ email: 'moh@hotmail.com '});

newUser.save().then((doc)=>{console.log('doc saved successfully.');console.log(JSON.stringify(doc,undefined,4));})
    .catch((err)=>{console.log('unable to save doc.'); console.log('error :'+err)});/**
 * Created by Mohammad on 1/27/2017.
 */
/**
 * Created by Mohammad on 1/27/2017.
 */
