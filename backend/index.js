const express = require('express');
require('dotenv').config()
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser')

const mongoose = require('mongoose');
const UserModel = require('./models/Users')

mongoose.connect(
    'mongodb+srv://silver:Rajat123@cluster0.sktt3xq.mongodb.net/graphica?retryWrites=true&w=majority&appName=Cluster0'
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

app.get('/documents', (req, res) => {
    const data = { documents: [
        'Poster',
        'Banner / Flex',
        'Brochure',
        'Invitation',
        'Presentation',
    ] };
    res.json(data);
});

app.get('/sizes', (req, res) => {
    const data = { sizes: [
        'A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4'
    ] };
    res.json(data);
});

app.get('/users', (req, res) => {
    UserModel.find({})
    .then((users) => {
        res.json(users)
    })
    .catch((err) => console.log(err))
})

app.post('/createUser', async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
    res.json({
        data: newUser,
        status: 'success'
    });
})

app.post('/register', async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
    res.json({
        status: 'success'
    });
})