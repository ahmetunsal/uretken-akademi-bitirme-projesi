const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
const User = require('../../../models/User');


router.post('/register', (req, res) => {
    const { email, password, passwordRepeat, displayName } = req.body;
    User.findOne({ email })
    .then(user => {
        if (user) {
            return res.status(400).json({ message: 'Böyle bir e-postaya sahip bir hesap var zaten!?!?', success: false });
        } else {
            if(password.length < 6) {
                return res.status(400).json({ message: 'Şifre en az 6 karakterli olmalı canım!', success: false });
            }
            if (password !== passwordRepeat) {
                return res.status(400).json({ message: 'Şifrelerin bir dediği bir dediğini tutmuyor 😡', success: false });
            }

            const newUser = new User({
                id: uuid.v4(),
                email,
                password,
                displayName,
                isAdmin: false
            });
            newUser.save()
            .then(user => res.status(200).json({user, success: true, message: "Kayıt başarılı! Şimdi giriş yap 😎"}))
            .catch(err => console.log(err));
        }
    }).catch(err => console.log(err));
});


router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(!user) return res.status(404).json({ message: 'Böyle bir e-postaya sahip bir hesap yok!?!?', success: false });
    if(password !== user.password) return res.status(400).json({ message: 'Şifre yanlış!?!?', success: false });
    res.status(200).json({user, success: true, message: "Giriş başarılı! Hoşgeldin 😎"});
});



module.exports = router;