const express = require('express');
const app = express();
const morgan = require('morgan');

const clientRoutes = require('./api/routes/clients')
const policyRoutes = require('./api/routes/policies')

app.use(morgan('dev'));

// Routes which should handle requests
app.use('/clients', clientRoutes);
app.use('/policies', policyRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;