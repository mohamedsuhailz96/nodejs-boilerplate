require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
var cors = require('cors');
require('./data/models');

//var testRouter = './routes/testRouterConfig.js';

const app = express();


app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.Router());

//executeRouter(app, testRouter);

app.use(function (req, res, next) {
    next(createError(404, `Path '${req.url}' Not Found !!`));
});

app.use(function (err, req, res, next) {

    let e = JSON.parse(JSON.stringify(err, ['name', 'message']));
    res.status(e.status || 500)
        .json({
            status: e.status,
            success: false,
            message,
            error: e.name + "  : " + e.message
        })
        .end();

});

process.on('unhandledRejection', function (reason, p) {

    console.log("Possibly Unhandled Rejection at: Promise ", p, " reason: ", reason);
});

process.on('uncaughtException', function (err) {
    console.log(err);
})


module.exports = app;