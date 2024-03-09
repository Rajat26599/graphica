const express = require('express');
const router = express.Router();

const UserModel = require('../models/Users')

router.get('/users', (req, res) => {
    UserModel.find({})
    .then((users) => {
        res.json(users)
    })
    .catch((err) => console.log(err))
})

router.post('/register', async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
    res.json({
        status: 'success'
    });
})

router.post('/login', async (req, res) => {
    const user = req.body;
    UserModel.findOne({email: user.email})
    .then((u) => {
        if(u) {
            if(u.password === user.password) {
                res.json({
                    userData: u,
                    status: 'success'
                })
            } else {
                res.status(400).json({
                    errorDesc: 'Invalid username or password',
                    status: 'error'
                })
            }
        } else {
            res.status(400).json({
                errorDesc: 'User does not exist',
                status: 'error'
            })
        }
    })
    .catch((err) => console.log(err))
})

module.exports = router;