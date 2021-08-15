import { ErrorMsgs } from "../../entities/general/ErrorMsgs";
import * as jwt from 'jsonwebtoken';

export class Authenticator{
	public static async authUser(req: any, res: any, next: any) {
        try {
             if(!req.header('Authorization')){
                 throw new ErrorMsgs('No Token Provided');
             }

             var token = req.header('Authorization').replace('Bearer ', '');

            // // Validate user Token:
             const userId = await Authenticator.validateUserToken(token);

            // //  Load userId on request:
             req.userId = userId;

             next();
         } catch (error) {
             console.log(error);
             res.status(401).send(new ErrorMsgs('Authentication Failure, please authenticate.', error.ErrorToDeveloper));
         }
	}
    public static async validateUserToken(token: any) {
        // TODO Unmark when tokens generation is set
        // const secret = process.env.USER_TOKEN_SECRET;
        // const userId = await jwt.verify(token, secret);
        // return userId;
        return '12329846';
    }
}