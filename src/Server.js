//creating server
const express  = require('express')
const app = express()
const PORT = 8002
const dotenv = require('dotenv').config()
const mongoose = require("mongoose")

//importing route---> to be done after done with route
const userRoute = require('../route/Route')

//import cors
const cors = require('cors')

//use cors to connect to frontend
app.use(cors(
    {origin: ['http://localhost:3000']}
))

//send request--->to be done after done with route
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/user', userRoute)




// creating server
mongoose.connect(process.env.AUTHURL)
.then ((req, res)=>{
    app.listen (PORT,()=>{
        console.log(`server is now running ${PORT}` );
    })
    console.log('db connected');
    app.get('/',(req, res)=>{
        res.send('home page')
    })    
})
    .catch((err)=>{
    console.log(err);
})