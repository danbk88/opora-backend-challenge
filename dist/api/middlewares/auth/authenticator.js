"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authenticator = void 0;
const ErrorMsgs_1 = require("../../entities/general/ErrorMsgs");
class Authenticator {
    static async authUser(req, res, next) {
        try {
            if (!req.header('Authorization')) {
                throw new ErrorMsgs_1.ErrorMsgs('No Token Provided');
            }
            var token = req.header('Authorization').replace('Bearer ', '');
            // // Validate user Token:
            const userId = await Authenticator.validateUserToken(token);
            // //  Load userId on request:
            req.userId = userId;
            next();
        }
        catch (error) {
            console.log(error);
            res.status(401).send(new ErrorMsgs_1.ErrorMsgs('Authentication Failure, please authenticate.', error.ErrorToDeveloper));
        }
    }
    static async validateUserToken(token) {
        // TODO Unmark when tokens generation is set
        // const secret = process.env.USER_TOKEN_SECRET;
        // const userId = await jwt.verify(token, secret);
        // return userId;
        return '12329846';
    }
}
exports.Authenticator = Authenticator;
