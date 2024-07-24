const express = require('express');
const app = express();
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

connectDB();
app.use(express.json());
app.use('/api',userRoutes)

//const PORT = process.env.PORT

app.listen(3000,()=>{
    console.log('server is running on the port 3000')
})