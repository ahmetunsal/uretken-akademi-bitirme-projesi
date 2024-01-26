const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require('mongoose');
const { mongoURI, port } = require('./config');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(
    {
        origin: "http://localhost:5173",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true
    }
));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const db = require('./models/db');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users/users');
const apiRouter = require('./routes/api/api');
const adminRouter = require('./routes/admin/admin');
const authRouter = require('./routes/api/auth/auth');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use('/api', apiRouter);
app.use('/api/auth', authRouter);

app.use(function(req, res, next) {
    res.status(404).send("Sorry can't find that!")
});

app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});

mongoose.connect(mongoURI, { useNewUrlParser: true });

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;

