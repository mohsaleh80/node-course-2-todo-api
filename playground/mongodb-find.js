/**
 * Created by Mohammad on 1/23/2017.
 */
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
     db.collection('Todos').find({}).toArray()
                                           .then((docs)=>{
                                                  console.log('Retreived Dos:');
                                                  console.log(JSON.stringify(docs,undefined,4));
                                              })
                                           .catch((err)=>{
                                                  console.log((err));
                                              });


    db.collection('Todos').find({completed:true}).count().then((count)=>{
                                                console.log('count: '+count);
                                              },(err)=>{
                                                console.log((err));
                                              });



   db.collection('Users').find().toArray().then((results)=>{
                                               console.log('Users');
                                               console.log(JSON.stringify(results,undefined,4));
                                              },(err)=>{
                                                  console.log((err));
                                               });
    //nested promises
    db.collection('Users').find({name : 'Mohammad Raddad'}).count().then((count)=>{
                                                                   console.log('Raddad count'+ count);
                                                                   return db.collection('Users').find({name : 'Mohammad Saleh'}).count();
                                                                   }).then((count)=>{
                                                                    console.log('Saleh count'+ count);
                                                                    })
                                                                   .catch((err)=>{console.log((err));});

    /*
    db.collection('Users').find({name : 'Mohammad Saleh'}).count().then((count)=>{
                                                                   console.log('Saleh count'+ count);

                                                                   })
                                                                   .catch((err)=>{console.log((err));});
     */
    //db.close();

});
