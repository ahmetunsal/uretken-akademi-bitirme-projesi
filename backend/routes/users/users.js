const express = require('express');
const router = express.Router();
const User = require('../../models/User');

router.get('/users', (req, res) => {
    User.find({}, (err, users) => {
        if (err) res.json(err);
        res.json(users);
    });
});

router.post('/users', (req, res) => {
    User.create(req.body, (err, user) => {
        if (err) res.json(err);
        res.json(user);
    });
});

router.get('/users/:id', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) res.json(err);
        res.json(user);
    });
});

module.exports = router;