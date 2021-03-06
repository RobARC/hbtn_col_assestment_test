const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const pool = require('../database');
const helpers = require('./helpers');

passport.use('local.signin', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {

    const rows = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
    if (rows.length > 0) {
        const user = rows[0];
        const validPassword = await helpers.matchPassword(password, user.password);
        if (validPassword) {
            done(null, user, req.flash('success', 'Welcome ' + user.username));
        } else {
            done(null, false, req.flash('message', 'Incorret Password'));
        }
    } else {
        return done(null, false, req.flash('message', 'The username does no exist'));
    }

}));

passport.use('local.signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
    const { name, lastname, govid, email, company } = req.body;
    const newUser = {
        username,
        name,
        lastname,
        govid,
        email,
        company,
        password
    };
    newUser.password = await helpers.encryptPassword(password);

    const result = await pool.query('INSERT INTO users set ?', [newUser]);
    // console.log(result);
    newUser.id = result.insertId;
    return done(null, newUser);

}));

passport.serializeUser((user, done) => {
    return done(null, user.userid);
});
passport.deserializeUser(async (userid, done) => {
    const rows = await pool.query('SELECT * FROM users WHERE userid = ?', [userid]);
    return done(null, rows[0]);
});