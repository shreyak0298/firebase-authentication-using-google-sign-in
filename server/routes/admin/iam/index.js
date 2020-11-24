'use strict'

const routes = require('express').Router({ mergeParams: true });

/**
 Routes defined for firestore
*/
module.exports = () => { 
    routes.post('/authenticate', require('./authenticate')()); 
    return routes;
};
