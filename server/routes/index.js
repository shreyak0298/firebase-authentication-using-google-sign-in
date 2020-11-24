'use strict';

const routes = require('express').Router({ mergeParams: true });

module.exports = () => {
    routes.use('/admin',require('./admin')());
    return routes; 
};

