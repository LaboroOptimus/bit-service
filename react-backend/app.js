require('dotenv').config();

var express = require("express");
var bcrypt = require('bcrypt');
var testRoute = require('./routes/testroute');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();
var db = require('./db');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    db.pool.query(`SELECT * FROM ${process.env.DB_USERS_TABLE} WHERE id = $1`, [parseInt(id, 10)], (err, results) => {
        if(err)
            console.log('Failed to find user by id when deserializing!');

        done(null, results.rows[0]);
    });
})

passport.use(new LocalStrategy({
        usernameField: 'mail',
        passwordField: 'password'
    },
    function(username, password, done) {
        console.log("stratagy started");
        db.pool.query(`SELECT id, mail, password FROM ${process.env.DB_USERS_TABLE} where mail=$1`, [username], (err, result) => {
            if (err)
            {
                console.log('failed to login, problem with database!');
                return done(err);
            }
            if(result.rows.length > 0) {
                const first = result.rows[0]
                bcrypt.compare(password, first.password, function(err, res) {
                    if(res) {
                        done(null, { id: first.id, mail: first.mail})
                    } else {
                        done(null, false)
                    }
                })
            } else {
                done(null, false)
            }
        });
    }
));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    resave : true,
    secret : process.env.SESSION_SECRET,
    saveUninitialized : true,
    cookie : { secure : false }
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/api/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        console.log(info);
        console.log(user);
        if (err) { return next(err); }
        if (!user) { return res.redirect('/login'); }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            return res.redirect('/api/profile');
        });
    })(req, res, next);
});

function requireAuth(req, res, next)
{
    if (req.isAuthenticated())
        next();
    else
        res.send({
            error : 
            {
                message : 'auth required'
            }
        });
}

app.get('/api/profile', requireAuth, function(req, res){
    if (req.isAuthenticated())
        res.send(req.user);
});

app.get('/api/logout', requireAuth, function(req, res){
    req.logOut();
    res.send('success logout!');
})

app.listen(5000, () => {
    console.log("Server successfully launched!");
});
