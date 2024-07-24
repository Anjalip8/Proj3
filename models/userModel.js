const mongoose = require('mongoose');
 
const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    employeeId: {
        type: String,
        required: true,
        unique:true
    },
    // role:{
    //     type: String,
    //     required: true,
    //     enum: ['user','admin','approver'],
    //     default: 'user'
    // }
})
 
module.exports=mongoose.model('User', userSchema)