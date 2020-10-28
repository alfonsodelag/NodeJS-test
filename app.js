const express = require('express');
const app = express();

const clientRoutes = require('./api/routes/clients')
const policyRoutes = require('./api/routes/policies')

app.use('/clients', clientRoutes);
app.use('/policies', policyRoutes);

module.exports = app;