/**
 * Created by Mohammad on 1/24/2017.
 */
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=> {

    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    //deleteMany
    /*
     db.collection('Todos').deleteMany({text : 'eat launch'}).then((result)=>{
     console.log(result);
     },(err)=>{ console.log(err);});



     // deleteOne
     db.collection('Todos').deleteOne({text : 'eat lunch'}).then((result)=>{ console.log(result);})
     .catch((err)=>{ console.log(err)});


    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result)=> {
        console.log(result);
    })
        .catch((err)=> {
            console.log(err);
        });

     */

    //deleteMany
    db.collection('Users').deleteMany({name : 'Mohammad Saleh'}).then((result)=>{
                                                                 console.log(result);
        return db.collection('Users').findOneAndDelete({_id : new ObjectID('5885fd14e21f9322dc635976')})
                                                                 })
                                                                 .then((result2)=>{
                                                                    console.log('Object Deleted:');
                                                                     console.log(result2);
                                                                 })
                                                                 .catch((err)=>{ console.log(err)});

});