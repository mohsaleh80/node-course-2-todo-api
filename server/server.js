/**
 * Created by Mohammad on 1/26/2017.
 */
var mongoose = require('mongoose');

// use promise instead of callbacks
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoAppMongoose').then((conn)=>{ console.log('connected to server');})
                                                             .catch((err)=>{console.log('Unable to connect to server.');
                                                                            console.log(err);});

//create a model which will represent a collection on db
// Todo model will be transfered to todos collection

var Todo = mongoose.model('Todo',{
    text : { type: String , required : true, minlength: 1 , trim:true},
    completed: {type: Boolean, default: false},
    completedAt: {type: Number , default:null}
});

//create model instance == doc
/*
var newTodo = new Todo({
    text: 'Cook Dinner'
});

newTodo.save().then((doc)=>{
                    console.log('saved todo: '+doc);
                        },
                    (err)=>{
                        console.log('Unable to create Todo with error:'+err);
                    });

var newTodo1 = new Todo({
    text : 'Studying React',
    completed: false,
    completedAt: 123456789
});

newTodo1.save().then((doc)=>{console.log('Saved Doc: '+doc);},
                     (err)=>{console.log('Unable to save doc. with error:'+err);});

*/
// user model

var User = mongoose.model('User',{
    email: {type: String ,required:true, trim:true, minlength: 1}
});

var newUser = new User({ email: 'moh@gmail.com '});

newUser.save().then((doc)=>{console.log('doc saved successfully.');console.log(JSON.stringify(doc,undefined,4));})
              .catch((err)=>{console.log('unable to save doc.'); console.log('error :'+err)});