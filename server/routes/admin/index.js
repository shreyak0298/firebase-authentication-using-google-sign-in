'use strict'

const routes = require('express').Router({ mergeParams: true });

module.exports = () => {
    routes.use('/iam',require('./iam')());
    return routes; 
};
