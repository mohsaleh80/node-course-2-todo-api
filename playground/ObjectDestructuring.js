/**
 * Created by Mohammad on 1/23/2017.
 */

var user = {name: 'Mohammad', age: 36}

var {name}= user;
var {age} = user;
console.log('name: '+name+' , age: '+age);

const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);