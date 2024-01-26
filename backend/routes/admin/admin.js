// crate a admin page route

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const { isAuthenticated } = req.query;

    console.log(req.query);
    if(!isAuthenticated) return res.status(400).json({ message: 'Bu kullanıcı admin değil!?!?', success: false });
    
    res.render('admin');
});

module.exports = router;