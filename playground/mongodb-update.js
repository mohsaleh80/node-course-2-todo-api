/**
 * Created by Mohammad on 1/24/2017.
 */
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=> {

    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({_id : new ObjectID('58877085bf48945fcfbd1f99')},
                                            {$set :{completed : true} },
                                            {returnOriginal : false})
        .then((result)=>{console.log('Updated : '); console.log(result);})
        .catch((err)=>{console.log(err);});

    db.collection('Users').findOneAndUpdate({_id : new ObjectID('5884dc85a125d51f405fbfeb')},
                                             {$set : {name : 'Mohammad Abdelhafez'},
                                              $inc : {age : 1}
                                             },
                                             {returnOriginal: false})
        .then((result)=>{ console.log('Updated Doc : '); console.log(result)})
        .catch((err)=>{console.log(err);});

});