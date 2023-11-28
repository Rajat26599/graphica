const express = require('express');
require('dotenv').config()
const app = express();

const port = process.env.PORT;

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

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

