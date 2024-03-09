const express = require('express');
const router = express.Router();

router.get('/documents', (req, res) => {
    const data = { documents: [
        'Poster',
        'Banner / Flex',
        'Brochure',
        'Invitation',
        'Presentation',
    ] };
    res.json(data);
});

router.get('/sizes', (req, res) => {
    const data = { sizes: [
        'A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4'
    ] };
    res.json(data);
});

module.exports = router;