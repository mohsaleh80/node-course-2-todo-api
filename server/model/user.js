/**
 * Created by Mohammad on 1/27/2017.
 */

var mongoose = require('mongoose');

var User = mongoose.model('User',{
    email: {type: String ,required:true, trim:true, minlength: 1}
});

module.exports = {User : User};