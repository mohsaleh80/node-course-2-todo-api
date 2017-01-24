/**
 * Created by Mohammad on 1/22/2017.
 */
// DB connection
//const MongoClient = require('mongodb').MongoClient;

//ES6 object destructuring
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

   db.collection('Todos').insertOne({
        text: 'visiting the library...',
        completed: false
    },(err,results)=>{

        if(err){return  console.log('unable to insert todo',err);}
        console.log('todo inserted successfully: ', JSON.stringify(results.ops,undefined,4));

    });

/*
    db.collection('Users').insertOne({
        name: 'Mohammad Saleh',
        age: 36,
        location: 'Miami,FL'
    },(err,results)=>{
         if(err){return console.log('unable to insert user');}
         console.log('user inserted succefully:',JSON.stringify(results.ops,undefined,4));
         console.log(results.ops[0]._id);
        console.log(results.ops[0]._id.getTimestamp());
    });

*/
    db.close();

});
