const express = require('express');
const router = express.Router();
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('../lib/auth')


router.get('/login', (req, res) => {
    res.render('login/signin');
});

router.get('/signup', isNotLoggedIn, (req, res) => {
    res.render('login/signup');
});

router.post('/login', isNotLoggedIn, passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
}));

router.get('/signin', isNotLoggedIn, (req, res) => {
    res.render('login/signin');
});

router.post('/signin', isNotLoggedIn, passport.authenticate('local.signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    failureFlash: true
}));

router.get('/profile', isLoggedIn, (req, res) => {
    res.render('profiles');
});

router.get('/logout', isLoggedIn, (req, res) => {
    req.logOut();
    res.redirect('/signin')
})

module.exports = router;