const express = require('express');
require('dotenv').config()
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser')

const mongoose = require('mongoose');

const designRouter = require('./routes/design')
const authRouter = require('./routes/auth')
const paymentRouter = require('./routes/payment')

mongoose.connect(
    process.env.MONGO_URL
);

const port = process.env.PORT;

const corsOptions = {
   origin: '*', 
   credentials: true,           
   optionSuccessStatus: 200,
}
app.use(cors(corsOptions)) // Use this after the variable declaration

// parse application/json
app.use(bodyParser.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});

app.use('/design', designRouter)

app.use('/auth', authRouter)

app.use('/payment', paymentRouter)