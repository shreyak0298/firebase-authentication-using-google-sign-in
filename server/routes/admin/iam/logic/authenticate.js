"use strict";

const admin = require('firebase-admin');
const Logger = require("../../../../logger");
const logger = new Logger.Log();
logger.setOption("file", __filename.slice(__filename.indexOf("/server/") + 7));


const authenticate = async (params) => {
    try{
       return admin.auth().verifyIdToken(params.idToken)
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {
    authenticate
}

