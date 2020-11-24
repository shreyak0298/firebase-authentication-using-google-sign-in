'use strict';

const authenticate = require("./logic/authenticate");
const Logger = require("../../../logger");
const logger = new Logger.Log();
logger.setOption("file", __filename.slice(__filename.indexOf("/server/") + 7));

module.exports =() => {
    return async (req, res) => {
        try {
            logger.info("authenticate token");
            const params = Object.assign(req.body);
            const result = await authenticate.authenticate(params)
            return res.status(200).send({ "data": result, "msg": "token authenticated" });
        } catch (error) {
            logger.error(error);
            if (error.statusCode === 404) {
                return res.status(404).send({ "msg": `Please enable Firestore in your project` });
            }
        
        }
    };
} 
