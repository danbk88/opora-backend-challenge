import  {ErrorMsgs}  from "../../entities/general/ErrorMsgs";
import { BaseRequestHandler } from "../../handlers/base/baseRequest.handler";
import { ServeData } from "../../entities/general/ServeData";

abstract class BaseController{
/**
* ServeRequest
* Base request serving flow
* 
* @param {any} req request
* @param {any} res response
* @param {any} serveData Data needed to serve request
* 
* @returns {Response}  
*/
public static async ServeRequest(req: any, res: any, serveData: any) {
    let handleMethod: any = serveData.Handle;
    let getDataArgs: any = serveData.GetDataArgs
    let buildResult: any = serveData.BuildResult
    let handler:BaseRequestHandler = serveData.Handler
    let reqName:string = serveData.ReqName;

    let errMsg = `Error occured on ${reqName} Request`
    if(!handler){
        throw new Error(errMsg + ' Internal Server error - Request handler is undefined')
    }

    try {
        let result = await handler.HandleRequest(getDataArgs, handleMethod, buildResult);

        if (result.error) {
            let err = result.error;
            if (err) {
                const msg = errMsg +": " + (err.ErrorToDeveloper || err.message);
                console.log(msg);
                const code = err.statusCode || err.status_code || 500;
                delete err.status_code;
                delete err.statusCode;

                res.status(code).send(msg);
            }
        }
        else {
            BaseController.BuildResponse(res, result);
            res.send(result);
        }
    }
    catch (error) {
        console.log(errMsg + error.message);
        res.status(500).send(new ErrorMsgs(errMsg, error.message));
    }
}

public static CreateServeData(handle: Function, getDataArgs: any, handler: BaseRequestHandler, reqName: string): ServeData {
    return new ServeData(handle, getDataArgs, handler.buildResult, handler, reqName);
}

// ------------------------------------------------- RESPONSE BUILDERS ----------------------------------------------------

/**
 * Build General Response from result 
 * Structure: {Data, Success, Error}
 * 
 * @param {any} res response
 * 
 * @returns {any}  : General Response 
 */
    public static BuildResponse(res: any, result: any): void {
        delete result.status_code;
        res.Data = result.Data;
        res.Error = result.Error;
    }
}

export default BaseController;