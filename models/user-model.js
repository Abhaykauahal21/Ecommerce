const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart:{
        type:Array,
        default:[]
    },
    isadmin: Boolean,
    order:{
        type:Array,
        default:[]
    },
    contact: Number,
    address: String,
    picture: String
});

module.exports = mongoose.model('User', userSchema);