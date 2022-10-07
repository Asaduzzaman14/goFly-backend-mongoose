const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const collors = require('colors');
const express = require('express');
const app = express();
const cors = require('cors');

// middleware
app.use(express.json());
app.use(cors())

//server
const port = process.env.PORT || 5000


//database connecton
mongoose.connect('mongodb+srv://outshade:3YWJBswXsspgt4Kn@cluster0.lu4d88g.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log("Database is connection is Succesfull".green.bold)
})

const flighRoutes = require('./routes/flightsRoutes');

app.get("/", (req, res) => {
    res.send("goFLY is warking!")
})


app.use('/api/v1/flight', flighRoutes)

app.listen(port, () => {
    console.log(`app is runing port: ${port}`.yellow.bold);
});

