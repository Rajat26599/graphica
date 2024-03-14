const express = require('express');
var mongodb= require('mongodb');
const DesignRequirementModel = require('../models/DesignRequirement');
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

router.post('/requirement', async(req, res) => {
    const requirement = req.body;
    console.log(requirement)
    const newRequirement = new DesignRequirementModel(requirement);
    await newRequirement.save();
    res.json({
        data: requirement,
        status: 'success'
    });
})

router.post('/requirements', (req, res) => {
    const user = req.body;
    DesignRequirementModel.find({creator: {email: user.email}})
    .then((requirements) => {
        res.json(requirements)
    })
    .catch((err) => console.log(err))
})

router.get('/allRequirements', (req, res) => {
    const user = req.body;
    DesignRequirementModel.find({})
    .then((requirements) => {
        res.json(requirements)
    })
    .catch((err) => console.log(err))
})

router.delete('/requirement/delete', (req, res) => {
    const id = req.body.id;
    DesignRequirementModel.deleteOne({_id: new mongodb.ObjectId(id)})
    .then(() => {
        res.json({
            data: {
                id: id
            },
            status: 'success'
        })
    })
    .catch((err) => console.log(err))
})

module.exports = router;