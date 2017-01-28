/**
 * Created by Mohammad on 1/26/2017.
 */

var express = require('express');
var bodyParser = require('body-parser');

//import mongoose
   var {mongoose}= require('./db/mongoose');
   var {User} = require('./model/User');
   var {Todo} = require('./model/todo');

var app = express();

//middleware
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{

   var newTodo = new Todo({
      text : req.body.text
   });
   newTodo.save().then((doc)=>{ console.log('todo was saved successfully :'); console.log(JSON.stringify(doc,undefined,4));
                                res.send(doc)},
                       (err)=>{ console.log('unable to save todo : '+err); res.status(400).send(err);});
//console.log(req.body);

});


app.listen(3000, ()=>{ console.log('started at port 3000');});
