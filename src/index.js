const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const flash = require("connect-flash");
const mysql = require('mysql2');
const session = require('express-session');
const password = require('passport');


//Inicializations

const app = express();
require('./lib/passport');

//settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');


//Middlewares
app.use(session({
    secret: 'hbtnmysqlnodeassestment',
    resave: false,
    saveUninitialized: false,

}));
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(password.initialize());
app.use(password.session());


// Global Variables
app.use((req, res, next) => {
    app.locals.success = req.flash('success');
    app.locals.message = req.flash('message');
    app.locals.user = req.user;

    next();
});

//Routes
app.use(require('./routes/routes.js'));
app.use(require('./routes/login.js'));
app.use('/orders', require('./routes/orders'));

// Public 
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})

