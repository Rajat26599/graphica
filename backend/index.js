const express = require('express');
const app = express();

const port = process.env.PORT ||8000;
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

