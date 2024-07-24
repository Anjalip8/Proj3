const mongoose = require('mongoose');

const connectDB= async()=>{
    try{
        await mongoose.connect("mongodb+srv://catherin143015:ldsfKyzWMG7H8zBT@task-tracker.z0ectso.mongodb.net/userManagement?retryWrites=true&w=majority&appName=task-tracker");
        console.log('mongoDb connnection successfull')
    }
    catch(error){
        console.log('mongodb connection error', error.message)
    };
}
module.exports = connectDB;