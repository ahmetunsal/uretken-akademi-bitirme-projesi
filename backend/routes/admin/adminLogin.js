// create a admin login page route

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('adminLogin');
});

module.exports = router;